var approot = require('app-root-path');
var db = require(approot + '/libs/db');

var StatisticsGraphModel = function() {
	this.getData = function(callback) {
		db.connection.execute('SELECT COUNT(*) count, timestamp FROM log_request WHERE YEAR(timestamp)=YEAR(CURDATE()) GROUP BY DAY(timestamp)', function(err, results, fields) {
			if(err) {
				console.log("SQL ERROR: " + err);
			}
			callback(results);
		});
	}
}

module.exports = StatisticsGraphModel;
