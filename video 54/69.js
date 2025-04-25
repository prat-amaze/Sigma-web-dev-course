let a= 5;
function fac(number){
    arr= Array.from(Array(number).keys());
    arr= arr.map(e=>{
        return e+1;
    })
    let ans= arr.reduce((a,b)=>{
        return a*b;
    })
    console.log(arr);
    console.log(ans);
}

fac(a);  