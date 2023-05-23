const { crearArchivo } = require('./helpers/multiplicar'); // Import function from helpers/multiplicar.js
const argv = require('./config/yargs'); // Import argv from config/yargs.js

console.clear();    // Clear console

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

