function createPerson(firstName, lastName) {
    const person = {
        firstName,
        lastName
    };

    Object.defineProperty(person, 'fullName', {
        enumerable: true,
        configurable: true,
        get() {
            return `${this.firstName} ${this.lastName}`
        },

        set(fullName) {
            const fullNameArray = fullName.split(' ');

            if (fullNameArray.length === 2) {
                this.firstName = fullNameArray[0];
                this.lastName = fullNameArray[1];
            }
        }
    });

    return person;
}