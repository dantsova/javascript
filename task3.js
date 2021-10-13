let a = 0;
let b = 1;

do {
    b = b + a; // or b+=a;
    a = a + 1; // or a+=1 or a++;
} while (a<b);

console.log(a);
