const mongoose = require('mongoose');

const Person = require('./models/Person');

mongoose.connect('mongodb://localhost:27017/haridb');

// CREATE
// Person.create({
//     firstName: 'Stamat',
//     lastName: 'Petrov',
//     age: 39,
//     email: 'stamat@stamatpetrov-bg.info'
// }).then((result) => {
//     console.log(result);
// });

// const person = new Person({
//     firstName: 'Stamat',
//     lastName: 'Petrov',
//     age: 39,
//     email: 'stamat@stamatpetrov-bg.info'
// });

// person.save()
//     .then(result => {
//         console.log(result);
//     });

// READ
Person.find({ lastName: 'Petrov' })
    .then(people => {
        people.forEach(person => person.logInfo());
    });

Person.findOne({ lastName: 'Petrov', age: { $lte: 35 } })
    .then(person => {
        console.log(person.email);
    });

Person.findById('65b0fa06982d7e3a185149b0')
    .then(person => {
        console.log(person);
    });