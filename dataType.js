// Undefined, Number, BigInt, String, Boolean, Null, dan Symbol.

// 1. undefined
let x;
console.log(typeof(x));

// 2. numbers
x = 10;
console.log(typeof(x));

let y = 3.54;

// Operator	Fungsi	Contoh
// +	Penjumlahan	10 + 10 = 20
// -	Pengurangan	15 - 7 = 8
// /	Pembagian	21 / 7 = 3
// *	Perkalian	9 * 9 = 81
// %	Sisa hasil bagi	5 % 2 = 1
// **	Perpangkatan	3 ** 3 = 27

console.log(x+y)
console.log(x-y)
console.log(x/y)
console.log(x*y)
console.log(x%y)
console.log(x**2)

// 3. BigInt
let bigInt = 7n;

// 4. String 
let firstName = "Muhammad Arindra";
let lastName = "Khoiru Syawal";

// concat with plus
console.log(firstName+lastName)

// concate with string literal
console.log(`Hi!, Nama Lengkap Saya adalah ${firstName} ${lastName}`)

// 5. Boolean
let isMarried = true;

// operator boolean (Comparison Operator)
// Operator	Fungsi
// ==	Membandingkan kedua nilai apakah sama (tidak identik).
// !=	Membandingkan kedua nilai apakah tidak sama (tidak identik).
// ===	Membandingkan kedua nilai apakah identik.
// !==	Membandingkan kedua nilai apakah tidak identik.
// >	Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
// >=	Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
// <	Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
// <=	Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.

let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

