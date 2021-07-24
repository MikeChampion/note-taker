const { Router } = require("express");
const db = require("../db/service.js");
const { v4: uuidv4 } = require("uuid");

// console.log(db);
const router = new Router();

router.get("/notes", async (req, res) => {
    const notes = await db.index();
    res.status(200).json(notes);
});

router.post("/notes", async ({ body }, res) => {
    const uuid = uuidv4();
    const newNote = await db.create(body);
    const notes = db.index();
    res.status(200).json(notes);
});

// DELETE - finish this function
// router.delete("/notes/:id", async (req, res) => {
//     await db.delete(e);
//     const notes = db.index();
//     res.status(200).json(notes);
// });

module.exports = router;
