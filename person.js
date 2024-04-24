export class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
}
age() {
    let now = new Date();
    let years = now.getFullYear() - this.dateOfBirth.getFullYear();
    console.log(this.getFullYear);
    if (now.getFullYear() < this.dateOfBirth.getFullYear() || now.getFullYear() ==
        this.dateOfBirth.getFullYear() && now.getFullYear() < this.dateOfBirth.getFullYear()) {
        years -= 1;
    }
    return years;
}

static searchPeople(lastName, people){
    let q = people.filter(function (p) { return p.lastName.toLowerCase() == lastName })
    return q;
}