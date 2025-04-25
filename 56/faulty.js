let obj= {
    '+': '-', 
    '*': '+', 
    '-': '/',
    '/': '**'
}

function calculate(a, b, operator){
    let p= Math.floor(Math.random()*100);
    if(p >= 10){
        return eval(`${a} ${operator} ${b}`)
    }
    else{
        operator= obj(operator)
        return eval(`${a} ${operator} ${b}`)
    }
}

let a= prompt("enter first number")
let b= prompt("enter second number")
let c= prompt("enter operator")

p= calculate(a, b, c)
console.log(p);

alert(p)
