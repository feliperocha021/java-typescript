// getElementById() retorna o primeiro elementto HTML que possui esse id
// se não encontrar retorna null
let p = document.getElementById('intro');
console.log(p.textContent);
p.textContent = 'Alterando o conteúdo';
console.log(p.textContent);

// querySelector() retorna o primeiro elementto HTML que possui esse id, class ou tag
// se não encontrar retorna null

let q = document.querySelector('#intro');
console.log(q);

let r = document.querySelector('.about-us');
console.log(r);

document.querySelector('h1').innerHTML += `<b>adicionando mais coisas<b>`