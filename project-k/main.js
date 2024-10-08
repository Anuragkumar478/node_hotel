var prompt = require('prompt-sync')();
const age=prompt("please entere your age:");
if(age<18){
    console.log("you get 20% discount");
}
else{
    console.log("you get a 30% discount!");
}

