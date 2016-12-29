var express = require('express');
var approot = require('app-root-path');
var router = express.Router();
var StatisticsController = require(approot + '/libs/controller/StatisticsController');

/* GET Statistics page. */
router.get('/', function(req, res, next) {
	var sc = new StatisticsController;
	res.render('index', { title: 'EksDeePanel', usage_graph: sc.getGraph() });
});

module.exports = router;
