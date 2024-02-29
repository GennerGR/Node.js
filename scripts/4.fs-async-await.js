const {readFile} = require('node:fs/promises')

// IIFE - Inmediatly Invohed Function Expression

;(
    async() => {
        console.log('Leyendo el primer archivo...')
        const text = await readFile('../1.txt', 'utf-8')
        console.log(`primer texto ${text}`)
        
        console.log('Hace cosas mientras lee el archivo')
        
        console.log('Leyendo el segundo archivo...')
        const secondText = await readFile('../2.txt', 'utf-8')
        console.log(`Segundo texto: ${secondText}`)
    }
)()
    



