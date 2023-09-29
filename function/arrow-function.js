// const sayName = (name) => {
//   console.log(`Nama saya ${name}`);
// };
// sayName("Mulyana");

//Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung
const name = (name) => {
  console.log(`Nama saya ${name}`);
};

// Namun, jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong
// const sayHello = () => {
//   console.log("Selamat pagi semuanya!");
// };

// sayHello();

// Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal
const sayName = (name) => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

// Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));
