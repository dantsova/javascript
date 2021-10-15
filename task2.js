if(process.argv[2] != undefined && Number(process.argv[2])) {
    let x = Number(process.argv[2]);
    let y;
    if (x > 0) {
        y = 2 * x;
    } else {
        y = -2 * x;
    }
    console.log(`y = ${y}`);
}
else console.error('Wrong values of arguments');