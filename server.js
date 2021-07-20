const express = require("express");
const http = require("http");
const fs = require("fs");
// const api = require("./public/assets/js/routes.js");

const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/notes", (req, res) => {
    res.sendFile(__dirname + "/public/notes.html");
});

app.listen(PORT, () => {
    console.log("server running");
});

app.get("/api/notes", (req, res) => {
    res.sendFile(__dirname + "/public/notes.html");
});

app.post("/api/notes", (req, res) => {
    res.sendFile(__dirname + "/public/notes.html");
});
