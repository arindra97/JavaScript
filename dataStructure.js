// Object
const user = {
    firstName: "Muhammad Arindra", 
    lastName: "Khoiru Syawal", 
    age: 25, 
    isMarried: true,
    place: "Demak"
};

//how to use
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["place"]}`);

// how to add, modif, and delete
user.age = 26;
user["place"] = "Depok";
user.fullName = `${user['firstName']} ${user['lastName']}`
delete user.lastName
console.log(user)

// Array
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);

// operation array
// for delete the last index 
myArray.pop();
console.log(myArray);

// for add at the last index
myArray.push('JavaScript');
console.log(myArray);

/* 
Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, 
sementara unshift() digunakan untuk menambahkan elemen di awal array.
*/
myArray.shift();
console.log(myArray);

myArray.unshift("Apple");
console.log(myArray);

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

// Spread Array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);
// code above similar with code below
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

// why use spread?
// for combine 2 values of array, for example:

const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];
console.log(allFavorites);
// the result should be
/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

// but when we use spread 
const allFavorites1 = [...favorites, ...others];
console.log(allFavorites1);

// Destucturing Data

const {firstName, lastName, age} = user;

console.log(age)
let place = "Semarang";
let isMarried = false;

// menginisialisasi nilai baru melalui destructuring object
({isMarried, place} = user);
console.log(place)
console.log(isMarried)

// Assigning to Different Local Variable Names
const vehicle = {
    model: "SUV", 
    brand: "Hyundai", 
};

const {model: type, brand: merk} = vehicle;

console.log(type, merk)

// Destucturing Array
const [firstFood, , thirdFood] = favorites;

console.log(`This is value variable destucturing from array firstFood = ${firstFood}, thirdFood = ${thirdFood}`)

let a = 1;
let b = 2;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

// Map
const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"]
]);

console.log(capital)
console.log(capital.size);
console.log(capital.get("London"));

capital.set("New Delhi", "India");
console.log(capital)
console.log(capital.size);
console.log(capital.get("New Delhi"));
console.log(capital.get("Jakarta"));

// .has .delete
console.log(capital.has("Tokyo"))

// Set
const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet);