//Crie um array de números que contenha 8 números.

const arrayOriginal = [8, 13, 22, 26, 21, 48, 30, 39]

//Depois disso, utilize este array para criar duas funcões de array `map()`:
//1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;

const triplos = arrayOriginal.map((cadaElem) => {return cadaElem * 3})
console.log(triplos)

//2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

const metades = arrayOriginal.map((cadaElem) => {return cadaElem / 2})
console.log(metades)
