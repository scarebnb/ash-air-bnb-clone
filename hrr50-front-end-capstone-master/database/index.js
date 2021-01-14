const mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root"
});

con.connect(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('connected to the database')
  }
})