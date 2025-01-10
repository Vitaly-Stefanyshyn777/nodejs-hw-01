import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    try {
        const generateUsers = [];
        for (let i = 0; i <= number; i += 1) {
            const generate = generateContacts()
            generateUsers.push(generate)
        }
        await writeContacts(generateUsers)
}
};

generateContacts(5);
