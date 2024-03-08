// CommonJS require module

let song = require('./song')
let song2 = require('./song2')
let song3 = require('./song3')
let song4 = require('./song4')

song('ya no he vuelto a sonreír');
song2('un milagro');
song3('¿que hago?');
song4('que sería tenerte un ratito a mi lado');

function lyrics (song, song2, song3, song4) {
    return console.log(song, song2, song3, song4)
}

//lyrics(song('ya no he vuelto a sonreír'), song2('un milagro'), song3('¿que hago?'), song4('que sería tenerte un ratito a mi lado'))
//lyrics(song, song2, song3, song4)

// lyrics (
//     song('ya no he vuelto a sonreír'), 
//     song2('un milagro'), song3('¿que hago?'), 
//     song4('que sería tenerte un ratito a mi lado')
// )







