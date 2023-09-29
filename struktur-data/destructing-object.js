// destructing, mengeluarkan nilai properties dari sebuah object ke dalam satuan yang lebih kecil.

// Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
  city: "Bandung",
};

const { firstName, lastName, age } = profile;

console.log(firstName, lastName, age);

// Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita desktrukturisasikan. Sehingga kita tidak perlu membuat variabel sebanyak properti yang dimiliki objeknya
const { city } = profile;
console.log(city);

// Destructuring Assignment
const obj = {
  namaDepan: "Mul",
  namabelakang: "Doe",
  umur: 24,
};

let namaDepan = "Mulyana";
let umur = 20;

//menginisialisasi nilai melalui destructing object
({ namaDepan, umur } = obj);

console.log(namaDepan, umur);

// Default Values
// menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined

const { isMale = true } = profile;
console.log(isMale);

// Assigning to Different Local Variable Names
const {
  firstName: localFirstName,
  lastName: LocalLastName,
  age: localAge,
} = profile;

console.log(localFirstName, LocalLastName, localAge);
