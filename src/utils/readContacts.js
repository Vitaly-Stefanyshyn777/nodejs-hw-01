import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: "utf-8" });

    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading contacts:", error.message);
    throw new Error("Failed to read contacts");
  }
};

// import { PATH_DB } from "../constants/contacts.js";
// import fs from "node:fs/promises";

// export const readContacts = async () => {
//   try {
//     const data = await fs.readFile(PATH_DB, { encoding: "utf-8" });

//     if (!data) {
//       console.warn("File is empty. Returning an empty array.");
//       return [];
//     }

//     return JSON.parse(data);
//   } catch (error) {
//     if (error.code === "ENOENT") {
//       console.error("File not found. Returning an empty array.");
//       return [];
//     }

//     console.error("Error reading contacts:", error.message);
//     throw new Error("Failed to read contacts");
//   }
// };
