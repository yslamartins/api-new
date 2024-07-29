const express = require('express');
const router = require('/router')

const app = express(); //todas as funçoes do expresss ficam aqui nessa const.
app.use(express.json())

app.use(router);

module.exports = app;