const express = require("express");
const router = express.Router();
const { Quiz } = require("../models/quiz");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.json(quizzes);
  } catch (error) {
    // Put a catch here to see if this works so far
    res.status(500).json({ error: "Failed to fetch quizzes" });
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  const quiz = await Quiz.create({ name });
  res.json(quiz);
});

router.get("/:id", async (req, res) => {
  const quiz = await Quiz.findByPk(req.params.id);
  res.json(quiz);
});

router.post("/:id", async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const quiz = await Quiz.update({ name }, { where: { id } });
  res.json(quizzes);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deleted = await Quiz.destroy({
    where: { id },
  });

  res.json({ deleted })
  res.redirect('/quizzes')
});

module.exports = router;