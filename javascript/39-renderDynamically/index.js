'use-strict'
let mainSection = document.querySelector('.main-section-area');
let selectTab = 'home-page';

function renderSelectSection(selectTab) {
    let home = document.querySelector('.home-page');
    let calculator = document.querySelector('.emi-calculator-page');
    let loan = document.querySelector('.apply-loan-page');
    mainSection.innerHTML = '';
    switch(selectTab) {
        case 'home-page':
            mainSection.innerHTML = home.outerHTML;
            break;
        case 'emi-calculator-page':
            mainSection.innerHTML = calculator.outerHTML;
            break;
        case 'apply-loan-page':
            mainSection.innerHTML = loan.outerHTML;
            break;
        default:
            mainSection.innerHTML = home.outerHTML;
            break;
    }
}

renderSelectSection(selectTab);