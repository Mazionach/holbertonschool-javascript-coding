#!/usr/bin/node

const req = require('request');

req(process.argv[2], (err, resp, body) => {
  if (err) {
    console.error(err);
  } else {
    const movies = JSON.parse(body).results;
    const filter = movies.filter(f => f.characters.includes('https://swapi-api.hbtn.io/api/people/18/'));
    console.log(filter.length);
  }
});
