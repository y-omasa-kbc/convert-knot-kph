var express = require('express');
var router = express.Router();

var path = require("path");
const calcs = require(path.join(__dirname,'../functions/calcs.js') );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  let opr1 = req.body.opr1;

  let outstr = opr1 + " X 1.852 = ";
  let result = calcs.knotToKph(opr1);
  
  res.render('index', { title: '結果', output1: outstr, output2: result });
});

module.exports = router;
