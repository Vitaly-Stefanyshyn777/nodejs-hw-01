import fs from "fs/promises";
import path from "path";

export const getAllContacts = async () => {
  try {
    const filePath = path.resolve("src/db/db.json");
    const data = await fs.readFile(filePath, "utf8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("Invalid JSON format:", error.message);
    } else {
      console.error("Error reading or parsing file:", error.message);
    }
    throw new Error(error.message);
  }
};

getAllContacts()
  .then((contacts) => console.log(contacts))
  .catch((error) => console.error("Error:", error.message));
