let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

/* output
true
false
*/

/*
Perbedaan antara “Sama” dan “Identik”
Dalam operator komparasi di JavaScript, hal yang menjadi sedikit “tricky” adalah membedakan antara “sama” (==) dan “identik” (===).
*/
const aString = "10";
const aNumber = 10;

console.log(aString == aNumber); // true, karena nilainya sama-sama 10
console.log(aString === aNumber); // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/
