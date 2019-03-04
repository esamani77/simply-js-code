//form

const itemForm = document.getElementById("itemForm");
const itemInput = document.getElementById("itemInput");
const itemList = document.querySelector(".item-list");
const clearBtn = document.getElementById("clear-list");
const feedback = document.querySelector(".feedback");

let itemData = [];

itemForm.addEventListener("submit", function(event){
    event.preventDefault();

    var textValue = itemInput.value;

    if ( textValue === ''){
        showfeedback("plz Enter a vlue","danger");
    }
    else {
        addItem(textValue);
        itemInput.value ="";
        itemData.push(textValue);
       
        // handle Item
        handleItem(textValue);
    }



});

function showfeedback(text,action){
    feedback.textContent = text;
    feedback.classList.add('showItem', `alert-${action}`);
    setTimeout(function(){
        feedback.classList.remove('showItem');
        feedback.classList.remove(`alert-${action}`);
    },3000);
1}

var i = 0;
function addItem(value) {
    const div = document.createElement("div");
    div.classList.add("item", "my-3");
    div.innerHTML = `<h5 class="item-name text-capitalize">${value}</h5>
        <div class="item-icons">
         <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
         <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
         <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
        </div>`;
    itemList.appendChild(div);
}
function handleItem(textValue) {
    const items = itemList.querySelectorAll(".item");
    console.log(items);
    
   // console.log(items.querySelector(".item-name").textContent);
    items.forEach(function(item) {
      if (item.querySelector(".item-name").textContent === textValue) {
        // complete event listener
        item.querySelector(".complete-item").addEventListener("click", function() {
             item.querySelector(".item-name").classList.toggle("completed");
             this.classList.toggle("visibility");
        });

        // Edit event listener
        item.querySelector(".edit-item").addEventListener("click",function(){
            itemInput.value = item.querySelector(".item-name").textContent;
            itemList.removeChild(item);
            itemData.filter(function(item){
                return item !== textValue;
            });
        }); 
        
        // Remove event listener
        item.querySelector(".delete-item").addEventListener("click",function(){
            itemList.removeChild(item);
            showfeedback("The Item deleted successfully","success");
            itemData.filter(function(item){
                return item !== textValue;
            });

        }); 

      }
    });
  }


  clearBtn.addEventListener("click",function(event){
      itemData = [];
      const items = itemList.querySelectorAll(".item");
      items.forEach(function(item) {
        itemList.removeChild(item);
      });
  });