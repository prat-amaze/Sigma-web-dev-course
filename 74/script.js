let button= document.getElementById("btn")

button.addEventListener("click", ()=>{
    document.querySelector(".box").style.display= 'none'
}) 

button.addEventListener("contextmenu", ()=>{
    alert("dont hack us")
}) 

document.addEventListener("keydown", (e)=>{
    console.log(e.key);
})

document.querySelector(".child").addEventListener("click", (e)=>{
    e.stopPropagation()
    console.log(e);
    alert("child was clicked")
})

document.querySelector(".childContainer").addEventListener("click", (e)=>{
    e.stopPropagation()
    alert("childContainer was clicked")
})

document.querySelector(".container").addEventListener("click", ()=>{
    alert("container was clicked")
})

let a= setInterval(()=>{
    r= Math.floor(Math.random()*255)
    g= Math.floor(Math.random()*255)
    b= Math.floor(Math.random()*255)
    document.querySelector(".container").style.backgroundColor =  `rgb(${r}, ${g}, ${b})`
}, 1000)
console.log(a);

let b= setTimeout(()=>{
    r= Math.floor(Math.random()*255)
    g= Math.floor(Math.random()*255)
    b= Math.floor(Math.random()*255)
    document.querySelector(".childContainer").style.backgroundColor =  `rgb(${r}, ${g}, ${b})`
}, 5000)
