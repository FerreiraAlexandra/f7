# Student Management System to demostrate MEAN concept

This project ( Student Management System) demonstrate mainly 
* Angular Http functionality
* call a Node.js RESTful service.  


## Angular Topics

* Using TypeScript classes and modules
* Modules are loaded with System.js
* Using Custom Components
* Using the Http object for Ajax calls along with RxJS observables
* Performing GET, PUT, POST and DELETE requests to the server
* Working with Angular service classes for Ajax calls
* Using Angular databinding and built-in directives

### Run the App

1. Check DB connection in lib/database.js and dbSeeder.js

1. Install Nodemon and Gulp: `npm install nodemon gulp -g`

1. Run `npm install` to install app dependencies

1. Run the following Gulp task to copy required Angular modules into the `public` folder: 

    `gulp copy:libs`

1. Run `npm start` to compile the TypeScript and start the server

1. Browse to http://localhost:3000

