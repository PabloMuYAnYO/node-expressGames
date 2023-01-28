const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let games = [
    {titulo: 'Halo: The Master Chief Collection', url:'https://acortar.link/BrQy2L', distribuidor:'Xbox Game Studios', 
    descripcion:'Halo: The Master Chief Collection is a remastering of the first-person shooter video game from the Halo saga for the Xbox consoles and Windows, which was released in the United States on November 11, 2014 and in Europe on the same year.'},
    {titulo: 'Hollow Knight', url:'https://acortar.link/dEDY2n', distribuidor:'Team Cherry, Popeach', 
    descripcion:'Hollow Knight is a classically styled 2D action adventure across a vast interconnected world. Explore twisting caverns, ancient cities and deadly wastes; battle tainted creatures and befriend bizarre bugs; and solve ancient mysteries at the kingdom\'s heart. Includes free content packs!'},
    {titulo: 'Terraria', url:'https://acortar.link/DexghE', distribuidor:'Re-Logic, 505 Mobile S.r.l, 505 Games,...', 
    descripcion:'Terraria is an action-adventure and sandbox video game produced independently by Re-Logic studio. It has features such as exploration, crafting, building structures, and combat. It was released on May 16, 2011.'}
  ];
  res.render('index', { title: 'ExpressGames | Home', juegos:games });
});

module.exports = router;
