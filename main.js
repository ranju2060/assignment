const readFile = require('./read');
const writeFile = require('./write');

writeFile('data.txt', 'Hi Bye Mama!');

readFile('data.txt');