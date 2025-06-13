let flight = 'BNB289';

let person = {
    name: 'jhon',
    passport: 12342345
}

function checkIn(fligthNum, passanger) {
    fligthNum = 'BNB999';
    passanger.name = 'Mr. ' + passanger.name;

    if(passanger.passport === 12342345) {
        console.log(`Hello ${passanger.name}, you checked`);
    } else {
        console.log('invalid passport');
    }
}

checkIn(flight, person);
console.log(flight);
console.log(person);