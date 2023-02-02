function solve() {

    class Person {
        constructor(name, email) {
            this.name = name
            this.email = email
        }
    }

    class Teacher extends Person {
        constructor(teachName, teachEmail, subject) {
            super(teachName, teachEmail);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}