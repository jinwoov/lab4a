'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'))

app.get('/', (request, response) => {
    response.send()
})

app.listen(PORT)