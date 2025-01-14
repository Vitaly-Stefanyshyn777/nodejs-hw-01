import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  try {
    const generateUsers = Array.from({ length: number }, createFakeContact);
    await writeContacts(generateUsers);
  } catch (error) {
    console.error("Failed to generate contacts:", error.message);
    throw error;
  }
};

generateContacts(5);
generateContacts(5);
