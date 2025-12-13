import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css"; // optional, if you have CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);











let str = "warehouse manage"
let words = str.split(" ");
let longest = " ";


for(let i=0; i< words.length; i++){


if(words[i].length > longest.length){
longest = words[i];
}}


console.log(longest);






// create a promise 



let mypromise = new Promise((resolve, reject)=>{

let success = true;


if(success){


resolve("access granted")


} else{

reject("access denied")

}
})


mypromise

.then(msg => console.log(msg))
.catch(err => console.log(err));






// create a promise without using new promise 





let spider = new Promise((resolve, reject)=>{

let success = true;

if(success){


resolve("access granted")



}else{


reject("access denied")

}
})

spider
.then(msg => console.log(msg))
.catch(err => console.log(err));



// js callbacks 



function greet(name, callback){

console.log("Hello, "  + name);

callback();

}

function sayBye(){

console.log("Goodbye!");

}

greet("john", sayBye);




function goodv(name, callback){

console.log("Good" + name);
callback();
}

function goody(){
console.log("Morning");

}

goodv("sam" , goody);






let dsp = new Promise((resolve, reject) =>{

let success = true;


if(success){


resolve("access granted")

}else{

reject("access denied")

}
});

dsp
.then(msg => console.log(msg))
.catch(err => console.log(err));











