function createThumbnail(thumbnail, duration){
    let thumb= document.createElement("div")
    thumb.setAttribute("style", "height:98%; width:170px; border:2px solid black; color: black; position: relative; text-align:center")
 
    let img= document.createElement("img")
    thumb.insertAdjacentElement("afterbegin", img)
    img.src= thumbnail
    img.setAttribute("style", "height:100%; width:100%;")


    let d= document.createElement("div")
    thumb.append(d)
    d.innerText= duration
    d.setAttribute("style", "position: absolute; background-color:rgba(68, 66, 66, 0.87); color: white; bottom:1px; right: 1px")

    return thumb
}

function createCard(title, cName, views, months, duration, thumbnail= "https://i.ytimg.com/vi/Xoz_KYfaSkk/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDt3KHcTUySmkkdiFrD9sG9sJZkmA"){
    let card= document.createElement("div")
    card.className= "card hover"
    card.setAttribute("style", "display: flex; border:2px solid black; height:95px; margin: 3px; background-color: black")
    
    let thumb= createThumbnail(thumbnail, duration)
    card.append(thumb) 

    let text= document.createElement("div");
    text.setAttribute("style", "margin: 5px")

    let tit= document.createElement("div");
    tit.setAttribute("style", "color:rgb(246, 246, 246)")
    tit.innerHTML= title
    tit.setAttribute
    text.append(tit)

    let meta= document.createElement("div");
    meta.setAttribute("style", "color:rgb(128, 125, 125); margin: 2px")
    text.append(meta)
    meta.innerHTML= cName
    meta.innerHTML+= " | " + views + " | " + months


    card.append(text)
    document.querySelector(".container").append(card)
}

createCard("This is the video about", "CodeWithMe", "118k", "8 months ago", "50:52") 