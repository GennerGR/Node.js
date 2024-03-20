import {readFile} from 'node:fs/promises'
    
Promise.all([
    readFile('../1.txt', 'utf-8'),
    readFile('../2.txt', 'utf-8')
]) .then(([text, secondText]) => {
    console.log(`Resultado1: ${text}`),
    console.log(`Resultado2: ${secondText}`)
})





