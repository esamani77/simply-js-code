console.log("helo");
var names = ["bob" , "james" , "erfan" , "sobhan","ehsan","jdsjd"];
var numbers = [1,2,3,4,5,6];

const check = names.reduce(function(acc,arr){
    console.log(acc +"-"+ arr +"-" +"-" );
    //arr.push(arr);
    return acc;
});

//console.log(check.toString());