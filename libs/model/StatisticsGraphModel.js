var approot = require('app-root-path');
var db = require(approot + '/libs/db');

var StatisticsGraphModel = function() {
	this.getData = function() {
		gx = [];
		gy = [];

		db.connection.execute('SELECT COUNT(*) count, timestamp FROM log_request GROUP BY DAY(timestamp)', function(err, results, fields) {
			console.log(results);
			results.forEach(function(item) {
				gx.push(item.count);
				gy.push(item.timestamp);

			});
		});

		return [ { x: gx, y: gy, type: 'scatter' } ];
	}
}

module.exports = StatisticsGraphModel;
