let boxes= document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor= "red";

document.body.setAttribute("style", "background-color: black;")

let box= document.createElement('div');
box.innerText= "Pratyush"
// box.style.color= "white"
box.className= "box";
// console.log(box.getAttributeNames())

document.body.insertAdjacentElement("afterbegin", box)

hmm= document.querySelectorAll(".box")
console.log(hmm)

hmm.forEach(element => {
    element.style.backgroundColor= "green";
});