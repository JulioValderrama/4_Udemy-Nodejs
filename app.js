const fs = require("fs");
const zlib = require("zlib");

// A Stream that READS data from the STREAM meaning it could SEND DATA to other stream
var readable = fs.createReadStream(__dirname + "/copiame.txt", { encoding: "utf8", highWaterMark: 1 * 1024});

// A Stream that WRITES data from the STREAM meaning it could RECIEVE DATA from other stream
var writable = fs.createWriteStream(__dirname + "/copiahere.txt");

// A Stream that Writes data from other Stream.
var compressed = fs.createWriteStream(__dirname + "/copiame.txt.gz");

// A zlib Object that is TRANSFORM and DUPLEX STREAM, meaning that could READ from a Stream and WRITE to another Stream.
var gzip = zlib.createGzip();

// PIPES could be invoke by READABLE Streams and send to WRITABLE Streams. It basically does the same that the .on function but RETURN the destination, in this case the Writable or Trasnform or Duplex STREAM. SO we could CHAIN more pipes

// copiame.on("data", (chunk) => {
//     // Here we are writing to the STREAM with fs.createWriteStream() method, using that chunk that qwe received from DATA event.
//     copiahere.write(chunk);
// });
readable.pipe(writable);
console.log("From readable to writable DONE")

// Compressing or decompressing a stream (such as a file) can be accomplished by piping the source stream (READABLE) through a zlib Transform (READABLE AND WRITABLE) stream into a destination stream (WRITABLE):
readable.pipe(gzip).pipe(compressed);
console.log("From readable ---to--- Transform gzip ---to--- Writable compressed DONE");

// Examples
// READABLE.pipe(WRITABLE or TRANSFORM or DUPLEX)
// READABLE.pipe(TRANSFORM or DUPLEX).pipe(TRANSFORM or DUPLEX).pipe(WRITABLE)









