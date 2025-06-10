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

    //alert('EMI: ' + emi + '. Total payable amount: ' + paybleAmount);
    showModal(emi, paybleAmount);
}
// document.querySelector('.calculate-emi-button').onclick = calculateEMI;

function showModal(emi, payableAmount) {
    const modalDiv = document.querySelector('#calculate-emi-modal');
    document.querySelector('#calculated-emi-cell').textContent = `$${emi}`
    document.querySelector('#calculated-payable-amount-cell').textContent = `$${payableAmount}`
    modalDiv.classList.remove('hide');
}

function closeModal(event) {
    document.querySelector('#calculate-emi-modal').classList.add('hide');
}

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

function ApplyForLoan(event) {
    event.preventDefault(); // evita que a página recarregue ao aperta o botão de formulário
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const email = document.querySelector('#email').value;

    const occupation = document.querySelector('#occupation').value;
    const dob = document.querySelector('#dob').value;
    
    const gender = document.querySelector('input[name="gender"]:checked').value; 

    const selectedContacts = [...document.querySelectorAll('input[name="contact"]:checked')].map(input => input.value);

    showMessage(fname);
}

// appendChild()
// Adiciona um elemento filho ao final de outro elemento.
// Só pode ser usado para adicionar um único elemento por vez.

// insertAdjacentElement()
// Permite inserir um elemento em posições específicas dentro do DOM.
// Aceita uma posição relativa, como "beforebegin", "afterbegin", "beforeend", "afterend".

function showMessage(name){
    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('modal-overlay');

    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const header2 = document.createElement('h2');
    header2.textContent = 'Loan Request Received';
    modalHeader.appendChild(header2)

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const heading3 = document.createElement('h3');
    const textNode = document.createTextNode('Hello, ' + name);
    heading3.appendChild(textNode)
    modalContent.insertAdjacentElement('afterbegin', heading3);

    const p = document.createElement('p');
    p.style.marginTop = '30px';
    p.textContent = 'We have received your loan request and we will contact you through your provided contact.';
    modalContent.insertAdjacentElement('beforeend', p);

    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('close-modal-btn');
    closeBtn.textContent = 'OK';
    closeBtn.onclick = function(){
        overlayDiv.remove();
    }
    modalFooter.insertAdjacentElement('beforeend', closeBtn);

    modalWrapper.appendChild(modalHeader);
    modalWrapper.appendChild(modalContent);
    modalWrapper.appendChild(modalFooter);

    overlayDiv.appendChild(modalWrapper);

    document.querySelector('.main-content-area')
    .insertAdjacentElement('beforeend', overlayDiv);
}