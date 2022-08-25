// GLOBALS      - NO WINDOW !!
// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules
// module       - info about current module (file)
// process      - info about env wehre the program is being executed

// Will print "Time Out" after 1s
setTimeout(() => {
  console.log("Time Out");
}, 1000);

// Will print "Interval" every second
setInterval(() => {
  console.log("Interval");
}, 1000);
