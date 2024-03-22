//  Uso de async/await:

// async function myAsyncFunction() {
//     try {
//         const result = await myPromise;
//         // Operación exitosa
//     } catch (error) {
//         // Manejo de errores
//     }
// }

// myAsyncFunction();

// //Ejemplo combinado (uso de promesas y async/await):

// function asyncFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('¡Operación exitosa!');
//         }, 1000);
//     });
// }

// async function myAsyncFunction() {
//     try {
//         const result = await asyncFunction();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// myAsyncFunction();
