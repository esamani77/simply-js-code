const inputText = document.querySelector("#input");
const btn = document.querySelector(".btnChange");
const text = document.querySelector(".message");

btn.addEventListener("click" , changeText);
console.log("adsadad");
function changeText (){
    var val = inputText.value;
    if (val=="") {
        alert("Empty text");
        console.log("shit");
        
        inputText.value= "";
    }
    else {
        const newText = document.createElement('p');
        newText.innerText = val;
        text.appendChild(newText);
        inputText.value= "";
    }
    
}