let a= [1,2,3,4,5,7]
a[3]= 6
// console.log(a, a.length)
b= a.toString()
// console.log(b)
console.log(typeof(a));
console.log(typeof(b));

let c= a.join(" ");
console.log(c);

console.log(a.pop());
// delete a[1];
a.sort()
console.log(a);

// for(let i of a){
//     console.log(i);
// }

// for(let i in a){
//     console.log(i);
// }

a.forEach((value, index, array)=>{
    value= value*2;
    // console.log(value); 
})

const greater= (e) =>{
    return e> 7? true: false;
}

let news= a.map(e=>{
    return e**2;
})

// console.log(news);

p= news.filter(greater);
// console.log(p);

const red = (a, b)=> {
    return a+b;
}
console.log(a.reduce(red))


let q=5;
function fac(number){
    let arr= Array.from(Array(number).keys());
    const incr= (e) =>{
        return e+1;
    }
    const red= (a, b)=>{
        return a*b;
    }
    arr= arr.map(incr);
    console.log(arr);
    console.log(arr.reduce(red));
}

fac(q);





