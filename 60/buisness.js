let adj= "Crazy Amazing Fire"
let Shop= "Engine Foods Garments"
let Anot= "Bros Limited Hub"

let adjs= adj.split(" ")
let shops= Shop.split(" ")
let ants= Anot.split(" ")

function randomName(){
    let a, s, A;
    a= Math.floor(Math.random()*(adjs.length))
    s= Math.floor(Math.random()*(shops.length))
    A= Math.floor(Math.random()*(ants.length))

    return adjs[a]+ " " + shops[s] + " "+ ants[A];
}

console.log(randomName());
