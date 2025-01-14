import { countContacts } from "./countContacts.js";
import { getAllContacts } from "./getAllContacts.js";
import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";

export const removeLastContact = async () => {
  try {
    const allContacts = await getAllContacts();
    const contactCount = await countContacts();

    if (contactCount === 0) {
      console.log("No contacts to remove.");
      return;
    }

    const updatedContacts = allContacts.slice(0, -1);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      "utf8"
    );
    console.log("The last contact has been removed successfully.");
  } catch (error) {
    console.error("Error in removeLastContact:", error.message);
    throw error;
  }
};

removeLastContact();
