const express = require('express')
const app = express()
const port = 4000

app.use('/', require('./routes/products'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})