let a = "Adam",
b = "Brennda",
c = "Carl";

let d = 2,
e = 5,
f = 10;

// + for addition
console.log( a + b ); // AdamBrenda
console.log( d + f ); // 12
console.log( a + f ); // Adam10

// - for subtraction
console.log( a - b ); // NaN (not a number)
console.log( d - f ); // -8
console.log( a - f ); // NaN (not a number)

// / for division
console.log( d / f ); // 0.2

// * for multiplication
console.log( d * f ); // 20

// > Greater than
console.log( d > f ); //false

// < Less Than
console.log( d < f ); // true

// === equal to without coercion (remove one = to allow data coercion)
console.log( d === f ); // false

// !== not equal to without coercion (remove one = to allow data coercion)
console.log( d !== f ); // true


