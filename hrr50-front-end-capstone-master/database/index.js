const mysql = require('mysql')

const con = mysql.createConnection({
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
const addProperties = (name, location, favorites, callback) => {
  con.query(
    'INSERT INTO Property (name, location, favorites) VALUES (?, ?, ?)', [name, location, favorites], callback
  );
}

const addPhotos = (photoURL, id, callback) => {
  con.query(
    'INSERT INTO Photos (photoUrl, propertyID) VALUES (?, ?)', [photoURL, id], callback
  )
}

const retrieveOneProperty = (index, callback) => {
 con.query(
  `select property.name, property.location, property.favorites, photoURL from property join photos on property.id = photos.propertyID where property.id = ${index}`, callback
 )
// con.query(
//   `select * from photos where photos.propertyID = ${index}`, callback
// )
}

// need to create functions to get contents from the database



module.exports = {
  addPhotos,
  addProperties,
  retrieveOneProperty
}
