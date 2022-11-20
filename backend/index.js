const express = require('express')
const cors = require('cors')
const products = require('./products')

const app= express()


// configuring app to read JSON (middleware function)
app.use(express.json())
// allows access to nod.js api from react app
app.use(cors())


// req is what is inputted from front end, res is what is recieved from api
app.get('/', (req, res) => {
    res.send('Welcome to online shop...')
})

app.get('/products', (req,res) => {
    res.send(products)
})


// selecting PORT to run server--necessary for deployment
const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`server running on port ${PORT}`))