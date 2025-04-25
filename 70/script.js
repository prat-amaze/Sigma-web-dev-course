function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let boxes= document.querySelectorAll(".box")
console.log(boxes);

boxes.forEach(e => {
    let text= getRandomColor()
    let bg= getRandomColor() 
    e.style.backgroundColor= bg
    e.style.color= text
});