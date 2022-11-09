require('dotenv').config();

const PORT = process.env.PORT
const express = require('express')
const app = express()
const drinks = require("./models/drinks")

app.get('/', (req, res) => {
    res.send(`Welcome to the Gitpub App!`)
})

//INDEX ROUTE
app.get('/drinks', (req, res) => {
    res.render("drinks_index.ejs", // need to understand more about render
    {
        drinks
    })
})

//SHOW ROUTE
app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id)
})


app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})