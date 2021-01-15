const faker = require('faker');
const {addPhotos, addProperties} = require('./index.js')

// need to import my index.js functions into here so I can seed the database

const randomPhoto = faker.image.city()
console.log(randomPhoto)
const randomName = faker.random.word()
const randomLocation = faker.address.city()
const randomFavs = faker.random.number()




const fillDatabase = () => {

  //main outer loop for primary records
  for (var i = 2; i <= 101; i++) {
    let randomName = faker.random.word()
    let randomLocation = faker.address.city()
    let randomFavs = faker.random.number()
    let randomNumber = (min, max) => {
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