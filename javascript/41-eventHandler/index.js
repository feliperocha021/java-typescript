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
'use-strict'
let mainSection = document.querySelector('.main-section-area');
let selectTab = 'home-page';
let home = document.querySelector('.home-page');
let calculator = document.querySelector('.emi-calculator-page');
let loan = document.querySelector('.apply-loan-page');
mainSection.innerHTML = '';

function renderSelectedSection(selectTab) {
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
