import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("src/db/db.json");

export async function readContacts() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading contacts:", error.message);
    throw error;
  }
}
