#!/usr/bin/node

const fs = require('fs');


if (!process.argv[2]){
	console.error('No file path');
	process.exit(1);
}

fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

