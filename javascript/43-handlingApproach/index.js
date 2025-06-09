/*
- Event é algo que acontece em um navegador, por exemmplo, click de botão
- Event Listener é responsável por ouvir qualquer evento 
- Evente Handler função executada quando um evento ocorre

# Formas de lidar com eventos:
## Inline event Handler: 
- Adiciona um on+atributo ao elemento HTML que queremos ouvir
- Ex: onfocus, onclick, <div class="menu-item" onclick="renderSelectedSection('home-page')">Home</div>
## Event hanlder properties
## addEventListener()
*/
"use-strict";
let mainSection = document.querySelector('.main-section-area');
let selectTab = 'home-page';
let home = document.querySelector('.home-page');
let calculator = document.querySelector('.emi-calculator-page');
let loan = document.querySelector('.apply-loan-page');

//HANDLING APPROACH
function calculateEMI(){
    let principal = document.getElementById('amount').value;
    let duration = document.getElementById('duration').value;
    let rate = document.getElementById('roi').value / 100 / 12;

    //calculate emi
    const emi = ((principal * rate * Math.pow(1 + rate, duration)) / (Math.pow(1 + rate, duration) - 1)).toFixed(2);

    //Total payable amount
    const paybleAmount = (emi * duration).toFixed(2);

    alert('EMI: ' + emi + '. Total payable amount: ' + paybleAmount);
}
// document.querySelector('.calculate-emi-button').onclick = calculateEMI;

function renderSelectedSection(selectTab) {
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
renderSelectedSection('home-page');

// EVENT HANDLER PROPERTIES
let aplyBtn = document.querySelector('.apply-now-button');
aplyBtn.onclick = () => {
    alert('Thank you for apply');
}
aplyBtn.onmouseover = () => {
    aplyBtn.style.backgroundColor = 'transparent'
    aplyBtn.style.border = '#F39C12 2px solid'
}

aplyBtn.onmouseout = () => {
    aplyBtn.style.backgroundColor = '#F39C12'
    aplyBtn.style.border = 'none'
}

// ADDEVENTLISTENER METHOD
// pode não ser recomendado em páginas dinâmicas porque o elemento ao qual o evento estava ligado pode ter sido removido do DOM
// e substituído por outro, sem que o evento seja transferido automaticamente para o novo elemento.
// a Inline event Handler é melhor nesse caso <button class="calculate-emi-button" onclick="calculateEMI()">Calculate EMI</button>
let header = document.querySelector('header');
header.addEventListener('mouseover', () => {
    header.style.color = 'black';
})
header.addEventListener('mouseout', () => {
    header.style.color = 'white';
})

