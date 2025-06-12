let person = {
    fname: 'jhon',
    ageYear: 1999,
    calculateAge: function() {
        console.log(this);
        const self = this
        const greet = function() {
            console.log(self.fname);
        }
        greet();
        return 2025 - this.ageYear;
    },
    greetUser: () => console.log('hello ' + this.fname)
}

let age = person.calculateAge();
person.greetUser();
console.log(age);