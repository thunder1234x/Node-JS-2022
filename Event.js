const event = require('events');

const customEvent = new event();

customEvent.on('data',()=>{
    console.log('DATA RECEIEVED !!! ');
})

customEvent.on('info',(name , age)=>{
    console.log(`My name is ${name} and I am ${age} yaers old`);
})

module.exports = customEvent;