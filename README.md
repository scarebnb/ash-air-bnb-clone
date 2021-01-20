# front-end-capstone-service

Modules Represented within this repo:

Property Title
Property Photo Gallery

!!All script commands must be run AFTER cd'ing into the specific hrr50-front-end-capstone-master folder at the top level of this repo!!

To Run Server:
npm start

To Run Webpack:
npm run watch

To Create Database:
mysql -u root <schema.sql

To Seed Database:
npm run seed

NOTE: The database property entry at index 1 is initially blank, allowing you to insert and only send back photos personally have selected. This allows you to innitially control the content of the page being displayed. If you wish for these photos to be randomly generated, refactor the code in seed.js accordingly.

Navigate in your browser to localhost:3000 to see the page