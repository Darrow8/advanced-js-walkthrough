// variables -- different types
// arrays 
// loops -- for and while
// if statements
// functions
// class based stuff

// class Animal{
//     constructor(breed, name, height) {
//         breed = this.breed;
//         name = this.name;
//         height = this.height;
//     }

//     run() {
//         console.log('this animal is running');
//     }
// }

// // class Dog extends Animal{

// // }

// let dog = new Animal('labrador', 'john', '10ft');

// dog.run();
// console.log(dog);

// * arrow functions and using functions as callbacks

// function sayHi() {
//     console.log('hi')
// }

// setInterval(sayHi,500)

// setInterval(() => {
//     console.log('running!')
// },500)

// (name) => {
//     console.log(name);
// }

// * asynchronous

// get an image from a server, the server will make changes, pass it back to me (TAKES TIME)

// * using promises

// console.log('1. starting!')

// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log('2. actually doing stuff')
//         resolve('wowowow');
//     },1000)
// }).then((data) => {
//     console.log('3. ending!')
//     console.log(data);
// })
import fetch from 'node-fetch';

// fetch('https://api.thecatapi.com/v1/images/search') // * getting the http response
//     .then(async(resp) => {
//         return await resp.json(); // * converting that into json
//     })
    // .then((data) => {
//         console.log(data[0]['url']); //* console.logging the json
//     })

// fetch('http://asidoasdnoskdnasodnkas.com/') // ! will error
//     .catch((err) => {
//         console.log('we have an error')
//     })


// async function callCoolStuff() {
//     await new Promise(()=>{})
// }

// * Observables - like radios -- updating