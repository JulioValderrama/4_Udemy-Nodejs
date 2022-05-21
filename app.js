const greet = require("./greet");

greet.english();
greet.spanish();

// We create a function and then added inside an object with the saludos method
const saludos = require("./saludos");
saludos.saludos();

//We create a function and added to module.export.saludos
const saludos2 = require("./saludos2");
saludos2.saludos();

// Here we require the Class or function constractor itself and then added to a variable that will function creating new instances.
const Saludos3 = require("./saludos3");
//Here we are creating instances directly with our new Class o function cronstractor.
const newSaludo = new Saludos3("Julio");
newSaludo.saludos();
const newSaludo2 = new Saludos3("Pepe");
newSaludo2.saludos();
//So even if we change some of the methods from the Object prototype, it won´t affect the others
newSaludo.saludos = () => {console.log("Changed method")};
newSaludo.saludos();
newSaludo2.saludos();

// Here we are requiring new objects directly from the module, so all of them have the same prototype
const saludos4 = require("./saludos4");
const saludos4b = require("./saludos4");

saludos4.saludos();
saludos4b.saludos();
//Here if we change one of the properties from one instance, all the rest are changed as well.
saludos4.firstname = "I have been CHANGED from an instances after beign created";
saludos4b.saludos();

// Here we are requiring an object with methos that are using PRIVATE VARIABLES that can't be accessed here. We can only call the methos.
const saludos5 = require("./saludos5");

// This pattern is called REVEALING MODULE PATTERN
saludos5.saludos();





