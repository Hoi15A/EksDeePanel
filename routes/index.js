var express = require('express');
var approot = require('app-root-path');
var router = express.Router();
var StatisticsController = require(approot + '/libs/controller/StatisticsController');

/* GET Statistics page. */
router.get('/', function(req, res, next) {
	var sc = new StatisticsController;

	sc.getGraph(function(graph1) {
		res.render('index', { title: 'EksDeePanel', usage_graph: graph1 });
	});
});

module.exports = router;
