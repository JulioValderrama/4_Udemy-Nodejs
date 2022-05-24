const fs = require("fs");
const zlib = require("zlib");
const { pipeline } = require("stream");

// A Stream that READS data from the STREAM meaning it could SEND DATA to other stream
var readable = fs.createReadStream(__dirname + "/copiame.txt", { encoding: "utf8", highWaterMark: 1 * 1024});

// A Stream that WRITES data from the STREAM meaning it could RECIEVE DATA from other stream
var writable = fs.createWriteStream(__dirname + "/copiahere.txt");

// A Stream that Writes data from other Stream.
var compressed = fs.createWriteStream(__dirname + "/copiame.txt.gz");

// A zlib Object that is TRANSFORM and DUPLEX STREAM, meaning that could READ from a Stream and WRITE to another Stream.
var gzip = zlib.createGzip();


pipeline(readable, gzip, compressed, (err) => {
    if (err) {
        console.error("An error has occurred: ", err);
        process.exitCode = 1;
    }
    console.log("PIPELINE from readable ---to--- gzip ---to--- compressed DONE")
});

pipeline(readable, writable, (err) => {
    if (err) {
        console.error("An error has occurred: ", err);
        process.exitCode = 1;
    }
    console.log("PIPELINE from readable ---to--- writable DONE")
});








