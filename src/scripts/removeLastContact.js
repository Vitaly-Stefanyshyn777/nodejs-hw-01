import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("src/db/db.json");

const removeLastContact = async () => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const contacts = JSON.parse(data);
    contacts.pop();

    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2), "utf8");
    console.log("The last contact has been removed successfully.");
  } catch (error) {
    console.error("Error in removeLastContact:", error.message);
    throw error;
  }
};

removeLastContact();
