// function calculate(value){
//     return value<2 ? value : (calculate(value-1)+calculate(value-2));
// }

// console.log(calculate(3))

// function car({a,b,c}){
//     this.a = a;
//     this.b = b;
//     this.c = c;
// }

// const myCar = new car({a:'Toyota',b:200, c:4})
// console.log(myCar)

// try{
//     const a = [1,2,3,4]
//     for(let i = 0; i <=4;i++){
//         console.log(a[i])
//     }
// }
// catch(e){
//     console.log("Out of Bonds")
// }

class MyCustomError extends Error{
    constructor(message){
        super(message);
        this.name = "MyError";
    }
}


try{
    throw new MyCustomError("This is an Error")
}
catch(e){
    console.log(e.message)
}