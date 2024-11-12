//! DEFAULT RESET
'use strict'
console.clear()

/*
!SNACK1
?Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

//* CREO UN ARRAY DI OGGETTI CON LE PROPRIETA' RICHIESTE
let biciclette = [
  {
    nome: 'Bici da corsa A',
    peso: 15.2,
  },
  {
    nome: 'Bici da corsa B',
    peso: 12,
  },
  {
    nome: 'Bici da corsa C',
    peso: 32,
  },
]

let biciLeggera = biciclette[0]
for (let i = 1; i < biciclette.length; i++) {
  if (biciLeggera.peso > biciclette[i].peso) {
    biciLeggera = biciclette[i]
  }
}

// Non è possibile stampare direttamente l'oggetto con i backtick poichè tenta di convertire l'oggetto stesso in stringa.
console.log(
  `La bici piu leggera è ${biciLeggera.nome}. Il suo peso è ${biciLeggera.peso}`
)
