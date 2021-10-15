if(process.argv[2] != undefined && process.argv[3] != undefined && Number(process.argv[2]) && Number(process.argv[3])) {
    let x = process.argv[2];
    let y = process.argv[3];

    x=Math.sqrt(x);
    y **= 2;
    x+=1;
    y+=x;

    console.log(`y = ${y}`);
}
else console.error('Wrong values of arguments');

