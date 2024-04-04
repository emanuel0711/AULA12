let readlineSync = require('readline-sync')

const frase = readlineSync.question ('violao');

console.log(frase.toUpperCase())
console.log(frase.replaceALL ('o','i'))
console.log(frase.lenght())