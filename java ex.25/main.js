


// spreat operator


const number = [1,2,3];
const Numbers = [...number, 4,5,6]

console.log(Numbers)




// rest operator

function multiply(...number){
    return number.reduce((total,num) => total * num,1)
}
console.log(multiply(2,6,8,10))
