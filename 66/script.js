// console.log(document.body);
let boxes= document.getElementsByClassName("box")
console.log(boxes);

// boxes[2].style.backgroundColor= "red"

document.getElementById("red").style.backgroundColor= "red"

// document.querySelector(".box").style.backgroundColor= "green"
// console.log(document.querySelectorAll(".box"));

// document.querySelectorAll(".box").style.backgroundColor= 'green' //error
// for (let e of document.querySelectorAll(".box")) {
//     e.style.backgroundColor= 'green'
// }
document.querySelectorAll(".box").forEach((e, i, arr) => {
    // console.log(e);
    e.style.backgroundColor= 'green'
})

