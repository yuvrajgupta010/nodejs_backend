const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootPath = require("./utils/path");

const app = express();

app.use(express.static(path.join(rootPath, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(rootPath + "/views/404.html");
});

app.listen(3000, () => {
  console.log("Server now running....");
});
