const express = require("express");
const router = express.Router(); 

let quizzes = require('../models/quizzes'); 

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}))


// RESTFUL API 
router.get('/', (req, res) => { 
    res.json(quizzes)
})

router.post('/', (req, res) => { 
    const {id, name} = req.body; 
    quizzes.push({
        id: Number(id), 
        name 
    })
    res.json(quizzes)
})

router.get('/:id', (req, res) => { 
    const id = req.params.id; 
    const quiz = quizzes.find(q => q.id == id)
    res.json(quiz)
})

router.post('/:id', (req, res) => { 
    const id = Number(req.params.id); 
    
    quizzes.map((q) => {
        if (id === q.id) { 
            q.name = req.body.name
            return q
        }
    })
    res.json(quizzes)
})

router.delete('/:id', (req, res) => { 
    
    // Convert the ID to an integer 
    const id = Number(req.params.id); 

    // Filter the results to find out which is not equal to the input volume 
    quizzes = quizzes.filter(q => q.id != id)

    // Return a json object to render 
    res.json(quizzes);     
}) 

module.exports = router