// Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda kurung siku [ ]
// perbedaannya pada posisi
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
console.log(firstFood, secondFood, thirdFood, fourthFood);

const array = ["satu", "dua", "tiga", "empat"];

const [, , tiga] = array;
console.log(tiga);

// Destructuring Assignment
// Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung.
let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;

console.log(myFood, herFood);

// Default Values
// Ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak dapat terjangkau oleh array, maka variabel tersebut akan bernilai undefined

const favoritesDefaultValues = ["Seafood"];

// const [myFoodDefault, herFoodDefault] = favoritesDefaultValues;
// console.log(myFoodDefault, herFoodDefault);

//supaya tidak undefined
const [myFoodDefault, herFoodDefault = "Salad"] = favoritesDefaultValues;

console.log(myFoodDefault, herFoodDefault);
