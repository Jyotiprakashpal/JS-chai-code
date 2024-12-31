//Primitive 

// 7types : String ,Number , Boolean ,null , undefined ,Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outTemo = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);


const bigNumber = 1231231424533335n

//Non primitive(Reference type) 

//Array, Objects, Functions

const heros = ["shaktiman","doga","Naagraj"] //Array
//Objects
let myobj = {
    name : "jyotiprakash",
    age : 21
}
//Functions
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId)