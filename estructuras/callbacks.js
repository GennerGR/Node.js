//  Sintaxis básica de un callback:

// function myCallback(err, result) {
//     if (err) {
//         // Manejo de errores
//     } else {
//         // Operación exitosa
//     }
// }

// Uso de un callback en una función:

// function myFunction(callback) {
//     // Código asíncrono
//     if (/* operación exitosa */) {
//         callback(null, /* resultado */);
//     } else {
//         callback(new Error('Error'), null);
//     }
// }

// myFunction(myCallback);
