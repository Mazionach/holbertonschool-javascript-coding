#!/usr/bin/node

const req = require('request');

req(process.argv[2], (err, resp, body) => {
  if (err) {
    console.error(err);
  } else {
    const tasks = {};
    JSON.parse(body).forEach((t) => {
      if (t.completed) {
        if (tasks[t.userId]) {
          tasks[t.userId] = tasks[t.userId] + 1;
        }
        if (!tasks[t.userId]) {
          tasks[t.userId] = 1;
        }
      }
    });
    console.log(tasks);
  }
});
