import fs from "fs/promises";

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile("./path/to/contacts.json", "utf8");
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error("Invalid JSON format:", error.message);
    } else {
      console.error("Error reading or parsing file:", error.message);
    }
    throw new Error(error.message);
  }
};
