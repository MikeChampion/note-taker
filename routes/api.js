const { Router } = require("express");
const db = require("../db/service.js");
// console.log(db);
const router = new Router();

router.get("/notes", async (req, res) => {
    const notes = await db.index();
    res.status(200).json(notes);
});

// router.post("/notes", ({ body }, res) => {
// res.status(201).json("post notes.html");
//     res.sendFile(__dirname + "/public/notes.html");
// });

// DELETE - finish this function
// router.delete("/notes/:id", (req, res) => {});

module.exports = router;
// export default router;
