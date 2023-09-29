/*
    Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.
*/

const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tattooine",
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

// Mengubah nilai properti objek
user.firstName = "Mulyana";
user["age"] = 24;
console.log(user);

// Menambahkan properti baru
user.alamat = "Sukadana";

console.log(user);

//menghapus properti pada objek
delete user.lastName;

console.log(user);
