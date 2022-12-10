const express = require('express');
const app = express();

const cors = require('cors');

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use('/', require('./routes/products'));

const port = 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});