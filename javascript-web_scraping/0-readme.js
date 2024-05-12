
const fs = require('fs');


fs.readFile(arguments[0], (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});

