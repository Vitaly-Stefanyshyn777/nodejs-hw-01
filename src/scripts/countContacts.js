import { readContacts } from "../utils/readContacts.js";

async function countContacts() {
  try {
    const contacts = await readContacts();
    console.log(`Number of contacts: ${contacts.length}`);
  } catch (error) {
    console.error("Failed to count contacts:", error.message);
  }
}

countContacts();
