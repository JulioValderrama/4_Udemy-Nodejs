const Emitter = require("./emitter");
const eventConfig = require("./config").events;

var myEmitter = new Emitter();

myEmitter.on(eventConfig.SALUDOS, () => {
    console.log("Hello, I am listening to the event Saludos");
});

myEmitter.on(eventConfig.SALUDOS, () => {
    console.log(`Adios, I am listening to the event Saludos`);
});

myEmitter.emit(eventConfig.SALUDOS);
