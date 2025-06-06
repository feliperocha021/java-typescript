// BREAK

let x = 1;
let y = 1;

while(x <= 10) {
    if(x === 5) {
        break;
    }
    console.log(x);
    x++;
}

// CONTINUE

while(y <= 10) {
    if(y === 5) {
        y++;
        continue;
    }
    console.log(y);
    y++;
}