const path = require('path')
const express = require('express')

const app = express();
const PORT = process.env.PORT || 4200



// routes
app.get('/', (req, res, next) => {
    res.send('Hello World')
})

// listening server
app.listen(PORT, () => {
    console.log('server is running...', PORT)
});