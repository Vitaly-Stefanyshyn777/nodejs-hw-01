import fs from "fs/promises";
import path from "path";
import { createFakeContact } from "../utils/createFakeContact.js";

const filePath = path.resolve("src/db/db.json");

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    let existingContacts = [];

    if (data.trim()) {
      existingContacts = JSON.parse(data);
      if (!Array.isArray(existingContacts)) {
        throw new Error("Invalid data format in db.json: should be an array");
      }
    }

    const newContacts = Array.from({ length: number }, createFakeContact);

    const updatedContacts = [...existingContacts, ...newContacts];

    await fs.writeFile(
      filePath,
      JSON.stringify(updatedContacts, null, 2),
      "utf8"
    );
    console.log(`${number} contacts added successfully.`);
  } catch (error) {
    console.error("Failed to generate contacts:", error.message);
    throw error;
  }
};

generateContacts(5);
