// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./3-names");
const sayHi = require("./4-utils")

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
