const mongoose = require('mongoose');

const Person = require('./models/Person');

mongoose.connect('mongodb://localhost:27017/haridb');

Person.create({
    firstName: 'Stamat',
    lastName: 'Petrov',
    age: 39,
    email: 'stamat@stamatpetrov-bg.info'
}).then((result) => {
    console.log(result);
});