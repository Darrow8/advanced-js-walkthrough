
// basic variables strings, numbers, arrays, objects
// loops -- for loops, while loops
// if statements
// functions
// arrow functions

// different types of asynchronous functions
// promises and observables

// * Promises:

// console.log('1 code is starting!')
// new Promise((resolve,reject) => { // asking your brother to check the weather for you
//     setTimeout(() => {
//         console.log('2 running internal code!')
//         resolve('done')
//     }, 1000)
// }).then((param) => {
//     // your brother telling you the weather status
//     console.log('3 code is over!')
//     console.log(param)
// })

// * Using APIs & npm
// var fetch = require('node-fetch');

import fetch from "node-fetch";
// * promise
// fetch('https://api.thecatapi.com/v1/images/search?size=full') 
// // * after the promise
// .then(async (resp) => { return await resp.json();})
// .then((data) => {
//     console.log(data[0]['url']);
// })
// * error handling
await fetch('www.djoanbsdjaosndaso.com')
    .then(() => {
    console.log('got the page!')
})
    .catch((err) => {
    console.log('got an error!')
    // console.log(err);
})

console.log('more coding down here')

// * observables -- https://angular.io/guide/rx-library


