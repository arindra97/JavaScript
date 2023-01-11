// If Else
let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}
console.log(greeting)

// ternary operator
// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

// Switch Case
switch (expression) {
    case value1:
      // do something
      break;
    case value2:
      // do something
      break;
    // ...
    // ...
    default:
      // do something else
}

// For Loop
for(let i = 0; i < 5; i++) {
  console.log(i);
}

// For of Loop
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}