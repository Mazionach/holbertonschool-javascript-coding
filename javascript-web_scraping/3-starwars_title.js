#!/usr/bin/node

const req = require('request');

req(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, (err, resp, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.parse(body).title);
  }
});
