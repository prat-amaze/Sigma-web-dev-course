// alert("hmm")
title= (msg)=>{
    const tit= document.createElement("h1");
    tit.textContent = msg;
    document.body.appendChild(tit);
}

waitTime= ()=>{
    time= Math.floor(Math.random()*5)
    return time;
}

async function genMsg(msg){
    time= waitTime();
    // console.log("started");
    const tit= document.createElement("h2");
    tit.textContent = msg;
    return new Promise((resolve) => {
        setTimeout(()=>{
            document.body.appendChild(tit);
            resolve();
        }, time*1000)  
    })
}

async function main(){
    title("You are being hacked");

    await genMsg("Initializing Hacking...");
    await genMsg("Reading Your files...");
    await genMsg("Password Detected...");
    await genMsg("Saving Password...");
}
main();