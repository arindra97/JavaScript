// return mengembalikan nilai
function multiply(a, b) {
    return a * b;
}

let kali = multiply(3,4)


function sapa(name, language) {
    if(language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}

// Expression Function
const greeting = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting('Ron', 'English'))

// parameter from object
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

// default parameter
function exponentsFormula(baseNumber, exponent = 2) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

// rest parameter
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

// arrow function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)
}
 
const sayName = (name) => {
    console.log(`Nama saya ${name}`)
}

// arrow function
const add = (a, b) => a + b;
console.log(add(3, 4));

// Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung seperti berikut:
const sayName1 = name => console.log(`Nama saya ${name}`);
sayName("Leia");

// Namun, jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong seperti ini:
const sapa = () => console.log('Halo Dunia!');

// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}


// Closure
function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}

init();

let addp = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = addp();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());


/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */


// TODO
const minimal = (a,b) => a>b ? b:a;

const power = (a,b) => a**b;

let check = minimal(4,3);
console.log(check)

check = power(4,3);
console.log(check)

function calculate(value) {
    return value < 2 ? value : calculate(value - 1) + calculate(value - 2);
}

console.log(calculate(3));
  