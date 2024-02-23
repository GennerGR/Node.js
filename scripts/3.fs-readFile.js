const fs = require('node:fs')

// console.log('Leyendo el primer archivo ...')
// const text = fs.readFileSync('../.txt', 'utf-8')

// console.log(text)

// console.log('Leyendo el segundo archivo ...')
// const secondText = fs.readFileSync('../2.txt', 'utf-8')

// console.log(secondText)

//A sido asincrono porque ha leido de forma secuencial.
//readFileSync == sincrono.

//readFile && Collback

console.log('Leyendo el primer archivo ...')
fs.readFile('../.txt', 'utf-8', (err, text) =>{ //mostrar: error y leer texto. Cuando termine ejecuta el collback
    console.log(text)
})

console.log('Leyendo el segundo archivo ...')
fs.readFile('../2.txt', 'utf-8', (err, secondText) =>{
    console.log(secondText)
})


