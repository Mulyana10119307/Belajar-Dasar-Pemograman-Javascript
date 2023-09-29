// Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
// const myMap = new Map();

// Apabila ingin menetapkan nilai dari Map secara langsung, gunakan array multi dimensi
const myMap = new Map([
  ["1", "a string key"],
  [1, "a number key"],
  [true, true],
]);

console.log(myMap);

//get() untuk mengambil nilai berdasarkan key
const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);

console.log(capital.size);
console.log(capital.get("London"));

// set() untuk menambahkan pasangan key-value baru
capital.set("New Delhi", "India");

console.log(capital.size);
console.log(capital.get("New Delhi"));
