const Emitter = require("./emitter");
const eventConfig = require("./config").events;

var myEmitter = new Emitter();

myEmitter.on(eventConfig.SALUDOS, () => {
    console.log("Hello, I am listening to the event Saludos");
});

myEmitter.on(eventConfig.SALUDOS, () => {
    console.log(`Adios, I am listening to the event Saludos`);
});
// In this example, the listener takes an argument. That arguments will be given by the .emit
myEmitter.on(eventConfig.SALUDOS, (data) => {
    console.log(`This listener takes an argument and log it out: ${data}`);
});

//We pass the DATA argument that will be taken by any functions that accepts it.
myEmitter.emit(eventConfig.SALUDOS, "DATA emitted from emit");

