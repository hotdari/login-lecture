const mysql = require('mysql');

const db = mysql.createConnection({
  host: "login-lecture.ce3bvqsxnu7k.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password:"as323563",
  database: "login_lecture"
})

db.connect();

module.exports = db;