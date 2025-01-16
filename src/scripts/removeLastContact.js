// import { countContacts } from "./countContacts.js";
// import { getAllContacts } from "./getAllContacts.js";
// import { PATH_DB } from "../constants/contacts.js";
// import fs from "node:fs/promises";

// export const removeLastContact = async () => {
//   try {
//     const allContacts = await getAllContacts();
//     const contactCount = await countContacts();

//     if (contactCount === 0) {
//       console.log("No contacts to remove.");
//       return;
//     }

//     const updatedContacts = allContacts.slice(0, -1);

//     await fs.writeFile(
//       PATH_DB,
//       JSON.stringify(updatedContacts, null, 2),
//       "utf8"
//     );
//     console.log("The last contact has been removed successfully.");
//   } catch (error) {
//     console.error("Error in removeLastContact:", error.message);
//     throw error;
//   }
// };

// // removeLastContact();
// import { countContacts } from "./countContacts.js"; // Функція для підрахунку контактів
// import { getAllContacts } from "./getAllContacts.js"; // Функція для отримання всіх контактів
// import { PATH_DB } from "../constants/contacts.js"; // Константа з шляхом до db.json
// import fs from "node:fs/promises"; // Робота з файловою системою

// // Функція для видалення останнього контакту
// export const removeLastContact = async () => {
//   try {
//     // Отримуємо всі контакти
//     const allContacts = await getAllContacts();
//     // Підраховуємо кількість контактів
//     const contactCount = await countContacts();

//     // Перевіряємо, чи є контакти для видалення
//     if (contactCount === 0) {
//       console.log("No contacts to remove.");
//       return;
//     }

//     // Видаляємо останній контакт
//     const updatedContacts = allContacts.slice(0, -1);

//     // Записуємо оновлений список у файл
//     await fs.writeFile(
//       PATH_DB,
//       JSON.stringify(updatedContacts, null, 2),
//       "utf8"
//     );

//     console.log("The last contact has been removed successfully.");
//   } catch (error) {
//     console.error("Error in removeLastContact:", error.message);
//     throw error;
//   }
// // };

// // // Викликаємо функцію для перевірки
// // removeLastContact();
// import { readContacts } from "../utils/readContacts.js";
// import { writeContacts } from "../utils/writeContacts.js";

// async function removeLastContact() {
//   const contacts = await readContacts();
//   if (contacts.length > 0) {
//     contacts.pop();
//     await writeContacts(contacts);
//   } else {
//     console.log("No contacts to remove.");
//   }
// }

// removeLastContact();

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
