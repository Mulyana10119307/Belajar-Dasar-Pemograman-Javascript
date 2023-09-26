/*
Selain nilai boolean false, tipe data atau nilai yang dianggap falsy, antara lain:

Number 0
BigInt 0n
String kosong seperti “” atau ‘’
null
undefined
NaN, atau Not a Number

Selain contoh di atas maka nilainya adalah truthy dan ketika dievaluasi ke dalam if statement akan bernilai true.
*/
let name = "";

if (name) {
  console.log(`Halo, ${name}`);
} else {
  console.log("Nama masih kosong");
}

/* output:
Nama masih kosong
 */
