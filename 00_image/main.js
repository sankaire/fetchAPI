console.log("about to fetch a rainbow");

catchRainbow()
.catch(err =>{
    console.log('error')
    console.log(err)
})
.then(res => {
    console.log('yey')
})

async function catchRainbow(){

    const res = await fetch('rainbow.jpg')
    const blob = await res.blob()
    document.querySelector("#rainbow").src = URL.createObjectURL(blob)
}

async function myName(){
    const res = await fetch('para.txt')
    const para = await res.para
    document.getElementById('para').innerText = para;
    return await Response.text()
}
myName()
// fetch("rainbow.jpg")
//   .then((response) => {
//     console.log(response);
//     return response.blob();
//   })
//   .then(blob => {
//     console.log(blob);
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);
//   })
//   .catch(err => {
//       console.log('error!')
//       console.error(err)
//     });