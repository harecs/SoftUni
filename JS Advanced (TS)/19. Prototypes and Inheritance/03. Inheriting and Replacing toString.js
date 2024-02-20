function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            const role = this.constructor.name;
            let output = `${role} (name: ${this.name}, email: ${this.email}`;
            return output;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);

            this.subject = subject;
        }

        toString() {
            return `${super.toString()}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `${super.toString()}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}