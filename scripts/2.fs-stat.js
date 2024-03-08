const fs = require('node:fs') // a partir de Node 16 se recomienda poner node:  (prefijo)

const stats = fs.statSync('../.txt');

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymboliclink(), // si es un enlace simbolico
    stats.size, // tamaño en bites
)









