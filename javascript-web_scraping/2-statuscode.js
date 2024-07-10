#!/usr/bin/node

const req = require('request');

req(process.argv[2], (err, resp) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`code: ${resp.statusCode}`);
  }
});
