function Saludos4() {
    this.firstname = "I have been declared in the function constractor";
    this.saludos = function() {console.log(`Hola ${this.firstname}`)};
};

module.exports = new Saludos4();