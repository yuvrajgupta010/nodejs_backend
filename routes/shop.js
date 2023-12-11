const express = require("express");

const rootPath = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(rootPath + "/views/shop.html");
});

module.exports = router;
