let arr= [1, 2, 3, 5, 6, 7] //arrays are mutable
// console.log(arr);
// console.log(arr.length); 

// arr[0]= 9
// console.log(arr);

// console.log(arr.toString());
// console.log(arr.join(" and "));
// arr.pop()
// console.log(arr);
// arr.push('prat')
// console.log(arr);

// for(let a of arr){
//     console.log(a);
// }

// for(let a in arr){
//     console.log(arr[a]);
// }

arr.forEach((value, index)=>{
    // console.log(value, index);
})

let newArr= arr.map((e, index, array)=>{
    return e**2;
})
console.log(newArr);

newArr= newArr.filter(e=>{
    return e>7
})
console.log(newArr);

const red= (a, b)=>{
    return a*b;
}

let nums= [1, 2, 3, 4, 5]
console.log(nums.reduce(red));

let brr= Array.from("Prat")
console.log(brr);
