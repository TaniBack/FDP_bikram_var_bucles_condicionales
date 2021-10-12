let variableSinValor;
/*Variables*/
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = PI*2;
console.log (TAU)

/*Booleanos*/
const booleanoAnd = (booleano1==booleano2);
console.log (booleanoAnd)

const booleanoNot = (!booleano1);
console.log (booleanoNot)

const booleanoMix0 = (booleano1 || booleano2) && booleano1 || (!booleano1 && !booleano2);
console.log (booleanoMix0)

/*Operadores*/
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
console.log(resultadoDesp)

let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;
console.log(resultadoAntes)

/*Bucles*/
let contarHasta10_2 = 10;
for (let i = 0; i <=10; i++) {
  contarHasta10_2[i]; console.log(i)
}

let postI = 0;
let postJ = 0;
for (let i = 0; i <= 10; i++){
//  postI = postI + postJ++; 
    postI += postJ++    /*reasignar el valor de PostI con postI + PostJ*/
    console.log ('Ejercicio con error', postI);
}


let sumaPares = 0;
for (let i = 0; i < 10; i++){
  if (i % 2 == 0){
    sumaPares = sumaPares + i; console.log(i)
  }
}

/*Variables*/
let variableValorNumerico = 2;
const MiNombre = 'Taniu';
const MiNumeroFav = 6;

/*Booleanos*/
let booleanoOr = booleano1 || booleano2;

let booleanoMix1 = (booleano1 && (TAU/2 == PI)) || variableValorNumerico >= MiNumeroFav;
console.log (booleanoMix1);

let seisNoEsNueve = 6!== 9;
console.log (seisNoEsNueve)

let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < (MiNumeroFav * TAU);
console.log (booleanoMix2)

/*Operadores */
let valorSuma = MiNumeroFav + variableValorNumerico;
console.log (valorSuma)

let valorResta = MiNumeroFav - variableValorNumerico;
console.log (valorResta)

let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
console.log (valorMultiplicacion)

let valorDivision = MiNumeroFav / 3;
console.log (valorDivision)

/* Bucles */
let contarHasta10 = 0;
let i = 0;
do{
  i++; 
}
while (i <= 9) {
  contarHasta10 += i ; 
}
console.log(i);
console.log(contarHasta10);

// let preI = 0;
// let preJ = 0;
// do {
//   preI = preI + preJ;
// }
// while (preJ <= 11) {
//     preJ++;
// }


let sumaImpares = 0;
for (let i = 0; i < 10; i++)
if (i % 3 == 0){
  sumaImpares += i;
  console.log(i)
}
  console.log(sumaImpares);