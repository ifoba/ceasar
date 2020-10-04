const fs = require("fs");

const validateArg = (input, output, shift, action) => {
    if (!action || !shift) {
        process.stderr;
        console.log("action and shift is required arguments");
        process.exit(1);
      }
      if (!fs.existsSync(input) && input) {
        process.stderr;
        console.log("didn't match input file");
        process.exit(1);
      }
      if (!fs.existsSync(output) && output) {
        process.stderr;
        console.log("didn't match output file");
        process.exit(1);
      }
}

module.exports = validateArg