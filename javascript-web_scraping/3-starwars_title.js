#!/usr/bin/node

const req = require('request');

req(`https://swapi-api.hbtn.io/api/films/${movieID}`, (err, resp, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.parse(body).title);
  }
});
