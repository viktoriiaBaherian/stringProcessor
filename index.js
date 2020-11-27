'use strict';

const fs = require('fs');
const input = require('./input');

const processConst = () => {
  let result = `[
  `;

  for (const prop in input) {
    result += `[
    'uid' => 'MY_ACCOUNT_${prop}',
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
