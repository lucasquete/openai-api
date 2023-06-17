const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors")

const routes = require("./routes/api")

const port = process.env.PORT || 8800;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/openai", routes)


app.listen(port, () => {
    console.log("server running");
});