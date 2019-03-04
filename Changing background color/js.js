const hexte = document.querySelector(".hexText");
const btnHex = document.querySelector(".btnHex");
const container = document.querySelector(".container");

btnHex.addEventListener("click", changeColor);
let color = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
function changeColor(){
    //console.log("dsfsf");
    
    let changing = '#';
    for (let index = 0; index < 6; index++) {
        let rnd = color[parseInt(Math.random()*color.length)];
        changing += rnd;
        console.log(changing);
    }
    container.classList.add("container-show");
    document.body.style.backgroundColor = changing;
    hexte.innerText = changing;


}