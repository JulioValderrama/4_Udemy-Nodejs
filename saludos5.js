var saludo = "Hi, I am a private variable that can't be changed outside of the module";

function saludos() {
    console.log(saludo);
};

module.exports = {
    saludos: saludos
};