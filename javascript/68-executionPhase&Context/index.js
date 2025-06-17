let a = 20;
function details(c, d) {
    let a = 10;
    console.log(a);
    let age = 20;

    if(age >= 18) {
        let x = 110;
        var y = 500;
    }
    // console.log(x); error
    console.log(y);
    function print(g) {
        console.log(a);
        console.log(c);
    }
    print('hi');
}
details('hello', 'world')