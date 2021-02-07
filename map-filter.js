//How to show square number
// const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for(let i = 0; i < numbers.length; i++){

//     const element = numbers[i];
//     const result = element * element; 
//     output.push(result);
// }
// console.log(output);


//How to show square number In Advance
// const numbers = [3, 4, 5, 6, 7, 8];

// function square (element){
//     return element * element;
// }

// const result = numbers.map(function(element){
//     return element * element;
// })

// console.log(result);



//Javascript Arry Map
// const numbers = [3, 4, 5, 6, 7, 8];
// const result = numbers.map(x => x * x);
// console.log(result);


//Javascript Filter Tag
const numbers = [3, 4, 5, 6, 7, 8];
const bigger = numbers.filter(x => x < 5);
console.log(bigger);
