var approot = require('app-root-path');
var jsonfile = require('jsonfile');
var mysql = require('mysql2');

var db_auth = jsonfile.readFileSync(approot + '/config/auth.json');
exports.connection = mysql.createPool({
    connectionLimit : 25, host: db_auth.host,
		user: db_auth.user,
		password: db_auth.password,
database: db_auth.database});
