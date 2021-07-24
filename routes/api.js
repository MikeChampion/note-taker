const { Router } = require("express");
const db = require("../db/service.js");

// console.log(db);
const router = new Router();

router.get("/notes", async (req, res) => {
    const notes = await db.index();
    res.status(200).json(notes);
});

router.post("/notes", async ({ body }, res) => {
    const newNote = await db.create(body);
    const notes = db.index();
    res.status(200).json(notes);
});

// DELETE - finish this function
router.delete("/notes/:id", (req, res) => {
    db.delete(req.params.id);
    const notes = db.index();
    res.status(200).json(notes);
});

module.exports = router;
