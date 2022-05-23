"use stric";

const Saludos = require("./saludos");

var newSaludo = new Saludos();

// Then we add a LISTENER in our new object, created with the CLASS constractor, that listen to an EMIT and takes DATA
newSaludo.on("emitMessage", (data) => {
    console.log(`Listener responding to Emit event ${data}`);
});
//Here the functions with the argument DATA would be a CALLBACK function
newSaludo.on("emitMessage", (data) => {
    console.log(`SECOND Listener responding to Emit event ${data}`);
});

newSaludo.despedida("Julio");

console.log(newSaludo.__proto__); // Firs in the chain's prototype is EventEmitter constractor we created from require
console.log(newSaludo.__proto__.__proto__); // Second in the chain's prototype is EVENTS module we grab from require
console.log(newSaludo.__proto__.__proto__.__proto__); // Last in the chain's prototype is Global Object 





