var express = require('express');
var router = express.Router();
const APIcontroller = require('../controllers/apicontroller.js')

/* GET home page. */

router.get('/', APIcontroller.home);

router.get('/:id', APIcontroller.searchClient);

module.exports = router;
