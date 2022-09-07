// STREAMS
// 1. Writeable
// 2. Readable
// 3. Duplex
// 4. Transform

const { writeFileSync } = require("fs");

// Reading 64kb in chunks
for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big.txt", `hello world ${i}\n`, { flag: "a" });  // The flag stands for "append"
}
