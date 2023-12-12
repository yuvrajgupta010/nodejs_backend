const express = require("express");
const path = require("path");

const rootPath = require("../utils/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
