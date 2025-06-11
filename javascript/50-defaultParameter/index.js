// lembre-se que os parametos com valores pré definidos devem ficar no final

function getYears(bitrhYear, retirementAge = 60) {
    const currentYear = new Date().getFullYear();

    const age = currentYear - bitrhYear;
    
    const yearLeft = retirementAge - age;

    return yearLeft;
}

const yearLeft = getYears(1990, undefined);
console.log(yearLeft);