// **Lexical Scope**
let fname = 'jhon';
function f1() {
    let bYear = 1990;
    console.log(fname);
    function f2() {
        let x = 'hi';
        console.log(fname, bYear);
    }
    f2();
    // console.log(x) // error
    

}
f1();