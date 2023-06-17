const express = require("express");
const { generateImage } = require("../controllers/openai");

const router = express.Router()

router.post("/images", generateImage);

module.exports = router;