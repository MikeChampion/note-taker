const express = require("express");
const apiRouter = require("./routes/api.js");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiRouter);

// APP LISTENER
app.listen(PORT, () => {
    console.info("server running");
});
