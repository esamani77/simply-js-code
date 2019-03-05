let counter = document.querySelector('.number');
const addCount = document.querySelector('.btnAdd');
const lowerCount = document.querySelector('.btnLow');


let count = 0;


addCount.addEventListener('click',incrementCounter);
lowerCount.addEventListener('click',decrementCounter);


function incrementCounter (){
 count++;
 counter.innerText = count;
 if(counter.innerText>'0'){
  counter.style.color = '#4caf50'
 }
 else if(counter.innerText === '0'){
  counter.style.color = 'white';
 }
 counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
}


function decrementCounter (){
 count--;
 counter.innerHTML = count;
 if(counter.innerHTML<'0'){
  counter.style.color = 'red'
 }
 else if(counter.innerHTML === '0'){
  counter.style.color = 'white';
 }
 counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
}