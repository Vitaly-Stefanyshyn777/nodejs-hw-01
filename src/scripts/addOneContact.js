import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
  try {
    const data = createFakeContact();
    await writeContacts(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

addOneContact();
