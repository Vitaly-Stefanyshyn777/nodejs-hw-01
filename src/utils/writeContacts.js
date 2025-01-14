import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";
import { readContacts } from "./readContacts.js";

export const writeContacts = async (updatedContacts) => {
  try {
    const userData = await readContacts();

    const newContacts = Array.isArray(updatedContacts)
      ? updatedContacts
      : [updatedContacts];
    const updatedData = [...userData, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2));

    console.log("Contacts updated successfully!");
  } catch (error) {
    throw new Error(`Failed to write contacts: ${error.message}`);
  }
};

// import { PATH_DB } from "../constants/contacts.js";
// import fs from "node:fs/promises";
// import { readContacts } from "./readContacts.js";

// export const writeContacts = async (updatedContacts) => {
//   try {
//     const userData = await readContacts();

//     const newContacts = Array.isArray(updatedContacts)
//       ? updatedContacts
//       : [updatedContacts];
//     const updatedData = [...userData, ...newContacts];

//     await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2));

//     console.log("Contacts updated successfully!");
//   } catch (error) {
//     console.error("Failed to write contacts:", error.message);
//     throw new Error(`Failed to write contacts: ${error.message}`);
//   }
// };
