const express = require('express'); 
const app = express(); 
const quizessCtrl = require("./src/controllers/quizzes");
// const questionsCtrl = require("./src/controllers/questions");
// const choicesCtrl = require("./src/controllers/choices");


app.get("/products", (request, response) => { 
    response.send("All Products... ")
})

app.use("/quizzes", quizessCtrl)
// app.use("/questions", questionsCtrl)
// app.use("/choices", choicesCtrl)





app.listen(3000);












 














// app.get("/", (request, response) => { 
//     response.send("Home Page! Get... ")
// })

// app.post("/", (request, response) => { 
//     response.send("Home PAge! POST...")
// })

// app.get("/products/:productName", (request, response) => { 
//     response.send("Product Page! Product Name: " + request.params.productName); 
// })




