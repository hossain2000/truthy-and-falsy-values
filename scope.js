let bonus = 20;

function sum(first, secound){
    let result = first + secound + bonus;
    //console.log(bonus);
    if(result > 9){
        const mood = "happy";
        console.log(mood);
    }
    return result;
}

const output = sum(3, 7);
console.log(bonus);
console.log(output);