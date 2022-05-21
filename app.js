const EventEmitter = require("events");

//We inherit Event Emitter properties
class Saludos extends EventEmitter {
    constructor() {
        super();
        this.saludo = "emitMessage";
    }
    //We create a method that EMIT with some data
    despedida() {
        console.log("ADIOS");
        this.emit("emitMessage", "Julio")
    };
};

var newSaludo = new Saludos();

// Then we add a LISTENER in our new object, created with the CLASS constractor, that listen to an EMIT and takes DATA
newSaludo.on("emitMessage", (data) => {
    console.log(data);
});

newSaludo.despedida();





