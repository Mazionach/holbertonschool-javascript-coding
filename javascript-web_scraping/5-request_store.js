#!/usr/bin/node

const req = require('request');
const fs = require('fs');

req(process.argv[2], (err, resp, body) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(process.argv[3], body, 'utf8', (erro) => {
      if (erro) {
        console.error('File write error', err);
      }
    });
  }
});
