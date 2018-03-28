var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "@mysql_ip@",
   user: "@mysql_user@",
   password: "@mysql_password@",
   database: "@dbname@"
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
