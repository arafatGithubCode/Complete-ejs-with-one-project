const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const pLanguages = [];

app.get("/", (req, res) => {
  res.render("index", { plName: pLanguages });
});
app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.post("/", (req, res) => {
  const pLang = req.body.pLang;
  pLanguages.push(pLang);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
