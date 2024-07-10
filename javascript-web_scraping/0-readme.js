#!/usr/bin/node

const fs = require('fs');


if (!process.argv[2]){
	console.error('No file path');
	process.exit(1);
}

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

