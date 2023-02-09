const express = require('express');
const bodyParser = require('body-parser');
// ! Requires de base de datos
const dbConnection = require('../config/dbConnection')
const connection = dbConnection()

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addgames', { title: 'ExpressGames | Add Games' });
});

router.post('/insertar', function(req, res, next) {
  let titulo = req.body.titulo;
  let distribuidor = req.body.distribuidor;
  let imagen = req.body.imagen;
  let descripcion = req.body.descripcion;

  console.log(titulo);
  console.log(distribuidor);
  console.log(imagen);
  console.log(descripcion);

 // ! UTILIZAR BASE DE DATOS 'games' para insertar juegos
  connection.query(`INSERT INTO juegos (titulo, url, distribuidor, descripcion) VALUES ('${titulo}', '${imagen}', '${distribuidor}', '${descripcion}'); `, (error, result) => {
    console.log(error)
    console.log(result)
  })
});

module.exports = router;
