let btn = document.getElementById('btn')
btn.addEventListener("click", ()=>{
    // document.body.firstChild.firstChild.
    document.querySelector(".box").innerHTML= "Yo mama so fat"
})

btn.addEventListener("dblclick", ()=>{
    // document.body.firstChild.firstChild.
    document.body.style.backgroundColor= "blue"
})

btn.addEventListener("contextmenu", ()=>{
    // document.body.firstChild.firstChild.
    alert("dont do that");
})