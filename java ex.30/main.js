


// callbacks

function operate(a,b,callback){
    return callback(a,b)
}

function Add(a,b){
    return a+b
}
console.log("is Addition", operate(8,3, Add));


function Subtract(a,b){
    return a-b
}
console.log("is Subtraction", operate(6,2, Subtract));


function Multipl(a,b){
    return a*b
}
console.log("is Multiplication", operate(8,3, Multipl));


function Div(a,b){
    return a/b
}
console.log("is Division", operate(4,2, Div));