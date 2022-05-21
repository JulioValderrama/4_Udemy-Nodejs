const Emitter = require("./emitter");

var myEmitter = new Emitter();

myEmitter.on("Saludos", () => {
    console.log("Hello, I am listening to the event Saludos");
});

myEmitter.on("Saludos", () => {
    console.log(`Adios, I am listening to the event Saludos`);
});

myEmitter.emit("Saludos");
