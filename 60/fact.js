function fact1(n){
    if(n == 1) return 1;
    return n*fact(n-1);
}

function genArr(n){
    let res= []
    for(let i=1; i<=n; i++){
        res.push(i)
    }
    return res;
}

function red(a, b){
    return a*b;
}

function fact2(n){
    let nums= genArr(n)
    return nums.reduce(red) 
}

function fact3(n){
    let nums= genArr(n)
    let res= 1;
    for(let e of nums){
        res*= e;
    }
    return res
}


console.log(fact3(6));

