const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

let realPath;

const api = {
    async index() {
        return JSON.parse(await fs.readFile(`${realPath}/db/db.json`, "utf-8"));
    },
    async create(newNote) {
        const currentNotes = await this.index();
        const uuid = uuidv4();
        fs.writeFile(
            `${realPath}/db/db.json`,
            JSON.stringify([...currentNotes, { ...newNote, ...{ id: uuid } }])
        );
    },
    async delete(idToDel) {
        let currentNotes = await this.index();
        currentNotes = currentNotes.filter(({ id }) => id !== idToDel);
    },
};

(async () => {
    realPath = await fs.realpath("./");
})();

module.exports = api;
