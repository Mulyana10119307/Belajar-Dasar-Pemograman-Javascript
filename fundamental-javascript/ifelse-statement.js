// if
const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
  console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");

// if else
let x = 50;

if (x > 70) {
  console.log(x);
} else {
  console.log("Nilai kurang dari 70");
}

//gabungan
let language = "French";
let greeting = "Selamat Pagi";

if (language === "English") {
  greeting = "Good Morning!";
} else if (language === "French") {
  greeting = "Bonjour!";
} else if (language === "Japanese") {
  greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);
