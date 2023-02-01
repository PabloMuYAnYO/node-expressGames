const express = require('express');
const router = express.Router();
// const dbConnection = require('../config/dbConnection')
// const connection = dbConnection()
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(__dirname)
   // ! UTILIZAR ARCHIVO .JSON 'gamesdata.json'
  // * 1 Leer el archivo
  fs.readFile('public/javascripts/gamesdata.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    // * 2 Si no hay error, entonces pasar se STRING a OBJETO
    let games = JSON.parse(data);
    // * 3 Con los OBJETOS renderizar la vista con sus parámetros
    res.render('index', {title: 'ExpressGames | Home', juegos : games});
  });

 // ? Ej - Mostrar una lista debajo de las imágenes con los distribuidores
//<ul class="d-flex flex-column mb-3 p-3">
// <% juegos.forEach(function(juego) { %>
//  <li><%= juego.distribuidor %></li>
// <% }); %> 
// </ul>

 // ! UTILIZAR BASE DE DATOS 'games'
  // console.log(games);
  // connection.query("SELECT * FROM juegos", (error, result) => {
  //   console.log(error)
  //   console.log(result)
  //   res.render('index', { title: 'ExpressGames | Home', juegos:result });
  // })
});

module.exports = router;
