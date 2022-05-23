"use stric";

const EventEmitter = require("events");

//We inherit Event Emitter properties
module.exports = class Saludos extends EventEmitter {
    constructor() {
        super();
        this.saludo = "emitMessage";
    }
    //We create a method that EMIT with some data
    despedida(data) {
        console.log("ADIOS");
        this.emit("emitMessage", data)
    };
};