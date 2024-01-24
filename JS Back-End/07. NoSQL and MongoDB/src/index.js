const mongoose = require('mongoose');

const Person = require('./models/Person');

mongoose.connect('mongodb://localhost:27017/haridb');

// CREATE
Person.create({
    firstName: 'Stamat',
    lastName: 'Petrov',
    age: 39,
    email: 'stamat@stamatpetrov-bg.info'
}).then((result) => {
    console.log(result);
});

const person = new Person({
    firstName: 'Pesho',
    lastName: 'Mitkov',
    age: 15,
    email: 'pesho5000@gmail.com'
});

person.save()
    .then(result => {
        console.log(result);
    });

// READ
Person.find({ lastName: 'Petrov' })
    .then(people => {
        people.forEach(person => person.logInfo());
    });

Person.findOne({ lastName: 'Mitev', age: { $gte: 35 } })
    .then(person => {
        console.log(person.email);
    });

Person.findById('65b0fa06982d7e3a185149b0')
    .then(person => {
        console.log(person);
    });

// UPDATE
Person.updateOne({ lastName: 'Mitev' }, { age: 64 })
    .then(result => console.log(result));

Person.updateMany({ lastName: 'Petrov' }, { lastName: 'Petroff' })
    .then(result => console.log(result));

Person.updateMany({ lastName: 'Petroff' }, { lastName: 'Petrov' })
    .then(result => console.log(result));

// DELETE
Person.deleteOne({ email: 'pesho5000@gmail.com' })
    .then(result => console.log(result));

Person.deleteMany({ lastName: 'Petrov' })
    .then(result => console.log(result));

// MONGOOSE QUERIES
// READ
Person.find()
    .where('lastName').equals('Mitev')
    .then(people => {
        people.forEach(person => person.logInfo());
    });

Person.findOne()
    .where('lastName').equals('Mitev').select('email')
    .then(result => console.log(result));

Person.find().sort({ age: 1 })
    .then(people => {
        people.forEach(person => person.logInfo());
    });