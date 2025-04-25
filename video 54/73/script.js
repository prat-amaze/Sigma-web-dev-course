var thumbnail= "https://i.ytimg.com/eaf/an_webp/CO_DAXswOrc/mqdefault_6s.webp?du=3000&sqp=CJ3yn7oG&rs=AOn4CLBcl2pePESCosJ4q3EYPFxxECq3MQ"

function createCard(title, cName, views, months, duration) {
    let card = document.createElement('div');
    card.className = "card";

    // Create the left section
    let left = document.createElement('div');
    left.className = "l";

    // Add the thumbnail image
    let img = document.createElement('img');
    img.src = thumbnail;
    img.alt = "Thumbnail";
    img.style.width = "100%"; // Ensure the image fills the left section
    img.style.height = "100%"; // Ensure the image covers the height
    img.style.objectFit = "cover"; // Maintain aspect ratio, crop if needed
    left.appendChild(img);

    // Create the right section
    let right = document.createElement('div');
    right.className = "r";

    // Add video details
    right.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Channel:</strong> ${cName}</p>
        <p><strong>Views:</strong> ${views}</p>
        <p><strong>Uploaded:</strong> ${months} months ago</p>
        <p><strong>Duration:</strong> ${duration}</p>
    `;

    // Append left and right sections to the card
    card.appendChild(left);
    card.appendChild(right);

    return card;
}

document.body.querySelector(".container");

button= document.getElementById("button");
container= document.getElementById("container");

button.addEventListener('click', ()=>{
    // let div= createCard(title, cName, views, months, duration)
    // console.log("clicked");
    const title = "Dynamic Video Title";
    const cName = "Channel Name";
    const views = Math.floor(Math.random() * 1000000).toLocaleString() + " views";
    const months = Math.floor(Math.random() * 12) + 1;
    const duration = `${Math.floor(Math.random() * 3) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, "0")}`;

    let card= createCard(title, cName, views, months, duration);
    container.appendChild(card);
})