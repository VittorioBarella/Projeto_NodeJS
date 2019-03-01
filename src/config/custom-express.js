require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/estatico', express.static('src/app/public'));

//  URLENCODED É UM MÉTODO QUE DEFINE COMO O BODYPARSER VAI FUNCIONAR
// SENDO QUE ESSE URLENCODED ESTA LIGADO A FORMA PADRÃO DE ENVIO DOS FORMULÁRIOS HTML.
app.use(bodyParser.urlencoded({
    extended: true
}));


const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;