// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() =>{
//             resolve(455);
//         }, 3500);
//     })
// }

async function getData(){
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'POST',
    })
    // .then(response => response.json())
    // .then(json => console.log(json))
    let data= await x.json()
    return data
}

async function main() {
    console.log("loading modules")

    console.log("Do Something else")

    console.log("load data")
    let data= await getData()
    console.log(data)

    // data.then((msg)=>{
    //     console.log(data);
    // })

    console.log("process data")
    console.log("done")
}

main();


