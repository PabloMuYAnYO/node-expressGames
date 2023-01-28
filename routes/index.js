const express = require('express');
const router = express.Router();
const dbConnection = require('../config/dbConnection')
const connection = dbConnection()

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM juegos", (error, result) => {
    console.log(error)
    console.log(result)
    res.render('index', { title: 'ExpressGames | Home', juegos:result });
  })
});

module.exports = router;
