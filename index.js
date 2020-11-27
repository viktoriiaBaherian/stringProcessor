'use strict';

const fs = require('fs');
const input = require('./input');

const processConst = () => {
  const appConst = process.argv.slice(2)[0] || 'MY_ACCOUNT_';
  let result = `[
  `;

  for (const prop in input) {
    result += `[
    'uid' => '${appConst}${prop}',
    'text' => '${input[prop]}'
   ],
   `;
  }
  result += ']';

  fs.writeFile('output.txt', result, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
};

processConst();
