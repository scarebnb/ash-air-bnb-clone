const faker = require('faker');
const {addPhotos, addProperties} = require('./index.js')

// need to import my index.js functions into here so I can seed the database

var randomPhoto = faker.image.city()
console.log(randomPhoto)
var randomName = faker.random.word()
var randomLocation = faker.address.city()
var randomFavs = faker.random.number()






var fillDatabase = () => {

  //main outer loop for primary records
  for (var i = 2; i <= 101; i++) {
    var randomName = faker.random.word()
    // var randomLocation = faker.address.city()
    var randomFavs = faker.random.number()
    addProperties(randomName, randomFavs, () => {
      console.log('done')
    })
    // i can be index, write to the join table
    // write properties to the property table
    // should have access to randomName, randomLocation, and randomFavs

    for (var j = 0; j < 20; j++) {

      const randomPhoto = faker.image.city()

      addPhotos(randomPhoto, i, () => {
        console.log('done')
      })

    }
  }


}

fillDatabase();