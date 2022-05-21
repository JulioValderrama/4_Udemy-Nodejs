class Saludos {
    constructor(firstname) {
        this.firstname = firstname;
    }
    saludos() {
        console.log(`Hola ${this.firstname}`);
    }
}

module.exports = Saludos;
