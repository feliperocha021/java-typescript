let user = {
    name: 'john',
    yearOfBirth: 1989,
    isMarried: true,
    calculateAge: function() {
        return 2025 - this.yearOfBirth;
    }

}

console.log(`A idade de ${user.name} é ${user.calculateAge()}`)