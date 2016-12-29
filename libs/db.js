var approot = require('app-root-path');
var jsonfile = require('jsonfile');
var mysql = require('mysql2');

var db_auth = jsonfile.readFileSync(approot + '/config/auth.json');
exports.connection = mysql.createConnection(db_auth);
