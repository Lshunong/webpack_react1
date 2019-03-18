const mysql = require('mysql')

exports.execQuery = (sql, callback) => {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'book'  //数据库名
  })
  connection.connect()

  connection.query(sql, function(error, results, fields) {
    connection.end()
    if (error) throw error
    callback(results)
  })
}
