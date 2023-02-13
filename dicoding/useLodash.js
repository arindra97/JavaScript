import _ from 'lodash';

// use for 
const myArray = [1, 2, 3, 4];
let sumFor = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sumFor += myArray[i];
}
 
console.log(sumFor);

// use reduce
let sumReduce = myArray.reduce((prev, curr) => {
    return prev + curr;
});
 
console.log(sumReduce);

// use lodash 
const sumLodash = _.sum(myArray);
 
console.log(sumLodash);