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
    var randomLocation = faker.address.city()
    var randomFavs = faker.random.number()
    var randomNumber = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);

      return Math.floor(Math.random() * (max - min) + min)
    }


    addProperties(randomName, randomLocation, randomFavs, () => {
      console.log('done')
    })

    for (var j = 0; j < randomNumber(10, 20); j++) {

      const randomPhoto = faker.image.city()

      addPhotos(randomPhoto, i, () => {
        console.log('done')
      })
    }
  }


}

fillDatabase();