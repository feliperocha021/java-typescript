let input = document.querySelector('input');
// há duas formas de typeCasting: <>, as
// O uso do <> em react pode acabar inferindo como um <React.Fragment>
// e não como conversão de tipo, então use o 'as'
let fname = <HTMLInputElement>document.querySelector('#fname')!;
let name = document.querySelector('#fname')! as HTMLInputElement;
fname.value = 'jhon'

export default undefined;