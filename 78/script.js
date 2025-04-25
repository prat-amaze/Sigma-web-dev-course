async function displayMsg(msg){
    let div= document.createElement("div")

    document.body.append(div)
    
    div.innerHTML= msg

    const dot= setInterval(()=>{
        if(div.innerHTML.endsWith('...')){
            div.innerHTML= msg
        }
        else{
            div.innerHTML+= '.'
        }
    }, 200) 

    const hmm = Math.floor(Math.random() * 5000);
    await new Promise((resolve, reject) => {
        setTimeout(resolve, hmm)
    })
    clearInterval(dot)

    div.innerHTML= msg
    div.innerHTML += " ✅";
}

async function main(){
    await displayMsg("Initializing Hacking")
    await displayMsg("Reading Your lips")
    await displayMsg("love detected")
    await displayMsg("Sharing love") 
    await displayMsg("You are mine now") 
}

main()



