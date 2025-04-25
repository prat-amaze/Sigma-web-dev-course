var a= 5
var b=6

// console.log(a+b, typeof a);
//cant start variable name with number
//var is globaly scoped
//let, const are block scoped
//const variable cannot be changed

let c= 5
{
    // console.log(c);
    let d= 5
}
// console.log(d); //d is not defined


//datatypes
//primitive--> null, number, string, symbol, undefined, boolean, bigint

let o= { //non primitive-> object, array
    a: 5,
    b: 6
}

console.log(typeof o);
o.c= 15
o.a= 7
console.log(o);


