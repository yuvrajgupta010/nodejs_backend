const express = require("express");

const rootPath = require("../utils/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(rootPath + "/views/add-product.html");
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
