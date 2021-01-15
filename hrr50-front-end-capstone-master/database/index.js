const mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "airBnB"
});

con.connect(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('connected to the database')
  }
})


//need to create functions to write to the database
var addProperties = (name, favorites, callback) => {
  con.query(
    'INSERT INTO Property (name, favorites) VALUES (?, ?)', [name, favorites], callback
  );
}

var addPhotos = (photoURL, id, callback) => {
  con.query(
    'INSERT INTO Photos (photoUrl, propertyID) VALUES (?, ?)', [photoURL, id], callback
  )
}

// need to create functions to get contents from the database



module.exports = {
  addPhotos,
  addProperties
}
