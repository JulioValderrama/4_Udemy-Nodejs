const fs = require("fs");

// Syncronous method will be called and the whole programm will wait for it
var saludo2 = fs.readFileSync(__dirname + "/saludos.txt", "utf8");

console.log(`This is syncro method: ${saludo2}`);

// Here while waiting, the rest of the code will cointinue and then once the code is done, the function CALLBACK will be invoke;
var saludo = fs.readFile(__dirname + "/saludos.txt", "utf8", function(err, data) {
    console.log(data);
});

console.log("Despues de fs.readFile()")

// A method that READS data from the STREAM meaning it could SEND DATA to other stream
var copiame = fs.createReadStream(__dirname + "/copiame.txt", { encoding: "utf8", highWaterMark: 1 * 1024});

// A method that WRITES data from the STREAM meaning it could RECIEVE DATA from other stream
var copiahere = fs.createWriteStream(__dirname + "/copiahere.txt");

// This listener METHOD, will be trigger once the fs.createReadStream() reads the DATA, that is why the event emitter is called "data". After this we just pass a CALLBACK function to do whatever we want with the data passed, normally called CHUNK.
copiame.on("data", (chunk) => {
    console.log("The file has been read");
    console.log(chunk.length);
    // Here we are writing to the STREAM with fs.createWriteStream() method, using that chunk that qwe received from DATA event.
    copiahere.write(chunk);
    console.log("The file has been copied")
});

copiame.on("end", () => {
    console.log("File read and closed");
});



