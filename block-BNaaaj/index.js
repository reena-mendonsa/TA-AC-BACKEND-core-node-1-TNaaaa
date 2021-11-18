let os = require("os");

var fs  = require("fs");

let cpus = os.cpus().length;

let freeM = os.freemem();

let upTime = os.uptime();

let version = os.version();

console.log("Welcome to Nodejs");

console.log(cpus,"cpus");
console.log(freeM,"freeM");
console.log(upTime,"uptime");
console.log(version, "version");

let unlink = fs.unlink;

let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);

buff1.write("Node is a part of backend");

buff2.write("Welcome to node");

console.log(buff1.toString());
console.log(buff2.toString());

// blocking
for (let i = 0; i < 1000000000; i++){
 
};

console.log("synchronous");

// non-blocking

setTimeout(() => console.log("Timeout"), 3000);
console.log("Async");