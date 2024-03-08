let suma = require('./m1.js');
let resta = require('./m2.js');
let multiplicacion = require('./m3.js');
let division = require('./m4.js');

suma()
resta()
multiplicacion()
division()


let op = (suma, resta) => {
    res = suma + resta;
    console.log(res)
}

op(suma(), resta())

let fun = (division, multiplicacion) => {
    result = division + multiplicacion;
    console.log(result)
}

fun (division(), multiplicacion())




function saludar (name) {
    console.log(`I love you ${name}`);
}

saludar('Ariana')
