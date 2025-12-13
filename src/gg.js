

// let (1)

let arr = [5,7,9,10,12,14];

// empty array

let newArr = [];

for(let i=0; i<arr.length; i++){

newArr.push(arr[i] * 2);

}

console.log(newArr);







// by  multiply with 3 

let arrr=[2,4,5,6,7];

let newArrr = [];


for(let i=0; i<arrr.length; i++){

newArrr.push(arrr[i] * 3);

}
console.log(newArrr);



// 2 write a program to find factorial of a number 




let num = 5;

let fact = 1;

// do loop in this 

for (let i = 1; i <=num; i++) {


  fact = fact * i;
}



console.log(fact);





let num=5;
let fact = 1;

for(let i=1; i<=num; i++){

fact = fact * i;

}

console.log(fact);









// 3 print fibonacci series 






// 4 swapping with 3rd variable 



let a = 1;
let b= 3;

// for the a 

let c=a;
a=b;
b=c;

console.log("after swape a " ,a  ,"before swapp b " ,b)






// swap a number without 3 rd variable 

let a = 2;
let b= 4;

a = a+b;
b = a-b;
a = a-b;

console.log("After swap a",a,"before swap b ",  b)






let products = [

{name: 'A', costs: 100},
{name: 'B', costs: 200},
{name: 'c', costs: 300},
{name: 'D', costs: 800}

]
// 1 find the sum of all products 

// for the addition of costs
let total = 0;



for(let item of products){

    total += item.costs
}

console.log(total)


// 2 sort all products  in descending order.

let products = [

{name: 'A', costs: 100},
{name: 'B', costs: 200},
{name: 'c', costs: 300},
{name: 'D', costs: 800}

]







//  3 Find all the product whose price is greater then 200


let products = [

{name: 'A', costs: 100},
{name: 'B', costs: 200},
{name: 'c', costs: 300},
{name: 'D', costs: 800}

]



let expensive = products.filter(item => item.costs > 200)

console.log(expensive)




let lowExpensive = products.filter(item => item.costs <500 )

console.log(lowExpensive)













let pr =[
    {name :"A", cost:100},
    {name :"B", cost:200},
    {name :"C", cost:300},
    {name :"D", cost:800},
]

let total=0

for(let item of pr){
    total += item.cost
}
console.log(total)



let result = pr.filter((a) => a.cost > 200);
console.log(result);



pr.sort((A,B)=>{return B.cost - A.cost})
console.log(pr)








// Destructuring


const person = {

namee: 'John Doe',

profession: 'Developer'
};

const {namee, , profession} = person;

console.log(namee);

console.log(profession);




const information = {

    namee: "samaltman",
   
    salary: 5500
}

const {namee, salary} = information;

console.log(namee);

console.log(salary);





// create a function in js 

function greet(b) {

console.log(b);

}

greet('Hiii')
greet({username: 'Ana', userAge: 55});
















function greet(name, callback){

console.log("hello, " + name);
callback();
}

function saybye(){
console.log("Gd");
}

greet("John", saybye);





function greet(name, callback){

console.log("Hello, " + name);
callback();

}

greet("cdccd",function() {
console.log("kfmcfcvf")

});




// Destructuring in js 



// Destructuring means unpacking values from arrays or objects into separate variables easily.

const person = {

namme: 'samaltman',
age: 22,
role: 'Teacher'
};

const {namme, age, role} = person;

console.log(namme);
console.log(age);
console.log(role);



// callback function 
function greett(name, callback){

console.log("hello " + name);
callback();


}

function saybye(){

console.log("goodbye!");
}

greett("John", saybye);


// setTimeout 


let timeoutID=setTimeout(()=>{console.log('SetTimeout called ')},1000) 








// 2 second example in this 



let minute = setTimeout(()=>{


console.log('Timeout called')

}, 1200);





// basic promises 



let samaltman = new Promise((resolve, reject) =>{

let success = true;


if(success){

resolve("successfull operation ");
}else{

reject("failed operation ");
}

});

samaltman

.then(result => console.log(result))
.catch(error => console.log(error));







// Promises in js 





let maxman = new Promise((resolve, reject) =>{

let success = true;

setTimeout(()=>{

if(success){

resolve("Timeout complted after 1.2 seconds ");
    
} else {

reject("something went wrong");

}   

}, 1200);


});

maxman
.then(msg => console.log(msg))
.catch(err => console.log(err));





// spread operator in js 


const array = [1,2]

const newAr = [...array, 3,4]

console.log(newAr)



let arr1 = ['hello']

let arr2 = [...arr1, 'world'];

console.log(arr2)





// Destrucring in js 

let human = {

namwe: 'deded',

age: 22,

gender: 'male'

}

let {namwe, age, gender} = human;

console.log(namwe);
console.log(age);
console.log(gender);



// spread operator 

let arr = ["Good"]

let arr2 = [...arr, "Morning"]

console.log(arr2)




// spread, destructuring, setTimeout, callbacks, rest 



























// filter method in this 











// Rest operstor in js


function add(a,b,c){

return a+b+c;

}

console.log(add(1,2,3));




// rest 

function add(...numbers){
console.log(numbers);
}

add(2,4,8,6);




// rest in arrays 

const fruits = ["Apple", "Banana", "MAngo", "Orange"];

const [second, ...restfruits] = fruits;

for(let fruits of restfruits){
console.log(fruits)
}



// using (slice) method  to remove the element from the arrays
// Does NOT change the original array


const fruits = ["apple", "banana", "grapes"];

const restfruits = fruits.slice(1);

console.log(fruits)
console.log(restfruits);


// using (splice) 
// Changes (modifies) the original arrays


const fruits = ["apple", "banana", "pineapple"];

const allfruits = fruits.splice(1);

console.log(fruits);
console.log(allfruits);








// spread operator 


let sum = [1,2];

let arr = [...sum, 3,4];

console.log(arr);




let arre = [1,2];

let rre = [...arre, 3,4];

console.log(rre);

















// Rest operator in objects 




const user = {

naeme: "ddeede",
age: 22,
city: "surat",

};
const {naeme, ...otherdetails} = user;

console.log(naeme);
console.log(otherdetails);






const user = {

namer: "johnn",
age: 33,
city: "up",
};

const {namer, ...otherdetails} = user;

console.log(namer);
console.log(otherdetails);







const number = [11,12,13,14,15];

const [, second , , fourth] = number;

console.log(second); // 11
console.log(fourth); // 12,13,14,15......





// Timeout called 

let time = setTimeout(()=>{

console.log("called")



}, 1200);













let timee = new Promise((resolve, reject)=>{

setTimeout(()=>{

let success = true;

if(success){

    resolve("pass"){

    } else {
        reject("vgv")
    }
}


})



})



// callback -> promises => async/await



async function example(){

return "hello, Async!";
}

example().then(console.log)











async function example(){

let result = await Promise.resolve("Awaited Result")
console.log(result);

}

example();





// promises in  js 



let myPrmoise = new Promise((resolve, reject) =>{
let success = true;

if(success){

resolve("Access Granted");
}else{

    reject("Access Denied ");
}
});

myPrmoise
 .then(msg => console.log(msg))
 .catch(err => console.log(err));

// ---------------------------------------------------------------




let samatlam = new Promise((resolve, reject) =>{

let success = false;

if(success){


resolve("access granted");
}else{
    reject("Access denied");
}
});

samatlam 
.then(msg => console.log(msg))
.catch(err => console.log(err));



// let time = setTimeout(()=>{

// console.log("called");


// }, 1200);





let superman = new Promise((resolve, reject)=>{

let success = true;

if(success){

resolve("access granted")

}else{

reject("access denied")

}
});

superman

.then(msg => console.log(msg))
.catch(err => console.log(err));


let man = new Promise((resolve, reject)=>{

let success = true;

if(success){


resolve("access")
}else{

reject("granted")

}
});

man 

.then(msg => console.log(msg))
.catch(err => console.log(err));













function boilWater(callback) {
  console.log("Boiling water...");
  setTimeout(() => {
    console.log("Water boiled ✅");
    callback(); 
  }, 2000);
}

function addTea() {
  console.log("Adding tea leaves and making tea ☕");
  console.log("Tea is ready ✅");
}
boilWater(addTea);






// try/ catch method in js 



// try{

// code to print 

// }
// catch(err){

// for handling error 

// }





try{

const response = await fetch('https://fakestoreapi.com/products')

const data = await response.json();

console.log(data);

}catch(error){

console.log("failed", error.message);

}




// basic error handling in js 


// try{

// let a = 10;
// let b=1;

// console.log(a+b);

// // x is not defined so it will go for an error message

// console.log(x);

// }catch (error){

// console.log("an error", error.message);
// }








// Rest operator in js 


print("Hello world")


function print(...show){

console.log(show)

}
























