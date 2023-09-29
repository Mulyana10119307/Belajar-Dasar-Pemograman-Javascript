// mengakses array menggunakan index [0]

let myArray = ["Cokelat", 42.5, 22, true, "Programming"];

console.log(myArray[1]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

console.log(myArray[5]);
//output undefined

//menambahkan array deng push(), menambahkan data di akhir
myArray.push("Push");
console.log(myArray);

//pop() mengeluarkan data terkahir dari array
myArray.pop();
console.log(myArray);

//shift() digunakan untuk mengeluarkan elemen pertama dari array
myArray.shift();
console.log(myArray);

//unshift digunakan untuk menambahkan elemen di awal array
myArray.unshift("unshift");
console.log(myArray);

//menghapus elemen array splice()
myArray.splice(1, 1);
console.log(myArray);

// Selain untuk menghapus elemen pada array, splice() juga dapat digunakan untuk menambahkan elemen pada array tersebut. Caranya dengan memberikan argumen ke-3
const month = ["January", "March", "April", "May"];
console.log("before splice: ", month);

month.splice(1, 0, "Februari");
console.log("after splice: ", month);
