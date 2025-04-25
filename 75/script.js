const callback= (arg)=>{
    console.log(arg);
}

const loadScript= (src, callback)=> {
    let sc= document.createElement("script")
    sc.src= src;
    sc.onload= callback("Pratyush")
    document.head.append(sc)
}

loadScript("https://www.youtube.com/watch?v=9JaDBYPmiJ0", callback)