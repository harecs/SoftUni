const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: {
        type: String,
        minLength: 5
    }
});

personSchema.path('age').validate(function () {
    return this.age > 14 && this.age < 130;
});

personSchema.virtual('fullName')
    .get(function () {
        return `${this.firstName} ${this.lastName}`;
    });

personSchema.method('logInfo', function () {
    console.log(`I'm ${this.fullName} and I'm ${this.age} years old. You can email me at ${this.email}`);
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;