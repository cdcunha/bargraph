var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bargraph', { title: 'Longevidade dos antigos Patriarcas da Bíblia Sagrada' });
});

module.exports = router;
