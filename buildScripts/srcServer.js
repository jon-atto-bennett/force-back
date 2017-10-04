/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import chalk from 'chalk';

const port = 3000;
const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if(err) {
    console.log(chalk.red(err));
  } else {
    console.log(chalk.green('app listening on port 3000!'));
  }
});
