// discrimenated Union pode conter vários tipos diferentes de valores
// mas inclui uma informação extra(tag) informando o tipo
function calcArea(shape) {
    switch (shape.tag) {
        case 'circle':
            return 3.14 * shape.radius * shape.radius;
        case 'square':
            return shape.length * shape.length;
        default:
            console.log('Incorrect shape type');
    }
}
console.log(calcArea({ tag: 'circle', radius: 10 }));
console.log(calcArea({ tag: 'square', length: 20 }));
export default undefined;
