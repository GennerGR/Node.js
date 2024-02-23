const fs = require('node:fs/promises')


// IIFE - Inmediatly Invohed Function Expression
(() => {}

)()



console.log('Leyendo el primer archivo...')
fs.readFile('../1.txt', 'utf-8')
.then(text => {
    console.log(`Primer texto: ${text}`)
})
.catch(error => {
   console.log(error)
})

console.log('Hace cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo...')
fs.readFile('../2.txt', 'utf-8')
.then(secondText => {
    console.log(`Segundo texto: ${secondText}`)
})



