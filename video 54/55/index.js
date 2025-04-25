// console.log("I am conditional")

let o= {
    nam: "Harry", 
    roll: "Programmer",
    comp: "hiLabs"
}

let p= [1,2,3,4,5];
for(let i in p){
    console.log(i);
}
for(let i of p){
    console.log(i);
}

for (let key in o) {
    let ele= o[key];
    console.log(key, ele)
}
 