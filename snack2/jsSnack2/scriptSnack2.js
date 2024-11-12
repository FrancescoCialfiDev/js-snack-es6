'use strict'
console.clear()

let squadre = [
    { nome: 'Squadra A', punti: 0, falliSubiti: 0 },
    { nome: 'Squadra B', punti: 0, falliSubiti: 0 },
    { nome: 'Squadra C', punti: 0, falliSubiti: 0 },
]

let newArray = []
for (let i = 0; i < squadre.length; i++) {
    squadre[i].falliSubiti = getRndInteger(1, 10);
    squadre[i].punti = getRndInteger(1, 10);
    newArray = 
    console.log(squadre[i]);
}


console.log(newArray);
