#!/usr/bin/node

const fs = require('request');

request(process.argv[2], (err, resp) => {
  if (err) {
    console.error(err);
  } else {
    consle.log(`code: ${response.statusCode}`);
  }
});
