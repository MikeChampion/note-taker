const fs = require("fs").promises;

let realPath;

const api = {
    async index() {
        return JSON.parse(await fs.readFile(`${realPath}/db/db.json`, "utf-8"));
    },
    async create(newNote) {
        const currentNotes = await this.index();
        fs.writeFile(
            `${realPath}/db/db.json`,
            JSON.stringify([...currentNotes, newNote])
        );
    },
};

(async () => {
    realPath = await fs.realpath("./");
})();

module.exports = api;
