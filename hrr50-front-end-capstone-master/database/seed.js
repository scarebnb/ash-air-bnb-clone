const faker = require('faker');
const { addPhotos, addProperties } = require('./index.js');

const fillDatabase = () => {
  addProperties('Forest Getaway', 'Petosky, Michigan, United States', '38', () => {});

  addPhotos('https://images.unsplash.com/photo-1609762751666-4ba213fb0b5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80', 1, () => {});
  addPhotos('https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80', 1, () => {});
  addPhotos('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80', 1, () => {});
  addPhotos('https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80 ', 1, () => {});
  addPhotos('https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', 1, () => {});
  addPhotos('https://images.unsplash.com/photo-1558971090-d05c128b78da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', 1, () => {});
  addPhotos('https://images.unsplash.com/photo-1467987506553-8f3916508521?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', 1, () => {});
  addPhotos('https://images.unsplash.com/photo-1464288550599-43d5a73451b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1972&q=80', 1, () => {});
  addPhotos('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80', 1, () => {});
  addPhotos('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1450&q=80', 1, () => {});

  for (let i = 2; i <= 101; i++) {
    let randomName = faker.random.word();
    let randomLocation = faker.address.city();
    let randomFavs = faker.random.number();
    let randomNumber = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);

      return Math.floor(Math.random() * (max - min) + min);
    };

    addProperties(randomName, randomLocation, randomFavs, () => {
    });

    for (let j = 0; j < randomNumber(10, 20); j++) {
      const randomPhoto = faker.image.city()

      addPhotos(randomPhoto, i, () => {
      });
    }
  }
  console.log('done!');
};

fillDatabase();
