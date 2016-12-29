var express = require('express');
var approot = require('app-root-path');
var router = express.Router();
var StatisticsGraphModel = require(approot + '/libs/model/StatisticsGraphModel');

/* GET Statistics page. */
router.get('/', function(req, res, next) {
	var sgm = new StatisticsGraphModel;
  res.render('index', { title: 'EksDeePanel', test: sgm.getData() });
});

module.exports = router;
