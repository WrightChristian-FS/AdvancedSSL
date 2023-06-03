const express = require("express");
const router = express.Router(); 

let choices = require('../models/choices'); 

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}))


router.get('/', (req, res) => {
    res.json(choices);
  });
  
  router.post('/', (req, res) => {
    const { id, choice } = req.body;
    choices.push({
      id: Number(id),
      choice,
    });
    res.json(choices);
  });
  
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    const choice = choices.find(c => c.id == id);
    res.json(choice);
  });
  
  router.post('/:id', (req, res) => {
    const id = Number(req.params.id);
  
    choices.map((c) => {
      if (id === c.id) {
        c.text = req.body.text;
        return c;
      }
    });
  
    res.json(choices);
  });
  
  router.delete('/:id', (req, res) => {
    // Convert the ID to an integer
    const id = Number(req.params.id);
  
    // Filter the choices to remove the one with the input ID
    choices = choices.filter(c => c.id != id);
  
    // Return the updated choices
    res.json(choices);
  });
  module.exports = router