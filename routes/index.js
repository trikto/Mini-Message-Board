var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "Form" });
});

router.post("/new", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  messages.push({ text: message, user: name, added: new Date() });
  res.redirect("/");
});

module.exports = router;
