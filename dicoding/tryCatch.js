/* -- Try & Catch No Error
try{
    console.log("ini adalah block Try yang pertama")
    console.log("ini adalah block Try yang pertama")
}catch(error){
    console.log("blok ini akan diabaikan ketika block try tidak ada error")
}
*/

/* -- Try & Catch With Error
console.log('\n')
try{
    console.log("ini adalah block try yang kedua (1)")
    errorCode
    console.log("ini adalah block try yang kedua (3)")
}catch(error){
    console.log("blok ini akan dieksekusi karena ada error")
    console.log(`debbug error name = ${error.name}`)
    console.log(`debbug error message = ${error.message}`)
    console.log(`debbug error stack = ${error.stack}`)
}
*/

/* -- Throw Error
// let json = '{ "age": 20 }';
let json = '{ "name": "Yoda", "age": 20 }';

try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    errorCode;

    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
*/

// Create Custom Error
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
 
let json = '{ "age": 30 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}