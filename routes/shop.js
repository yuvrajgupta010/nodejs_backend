const express = require("express");
const path = require("path");

const rootPath = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "shop.html"));
});

module.exports = router;
