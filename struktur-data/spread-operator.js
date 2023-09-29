// fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...).

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(favorites);
//menggunakan spread
console.log("menggunakan spread : ", ...favorites);

// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];
console.log("tanpa spread : ", allFavorites);

//dengan spread
const allFavoritesSpread = [...favorites, ...others];
console.log("dengan spread : ", allFavoritesSpread);

//Spread di Objek
const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 };

console.log("menggunakan spread : ", newObj);
