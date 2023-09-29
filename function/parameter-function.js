/**
 * Parameter merupakan variabel yang didefinisikan sebagai input dari sebuah fungsi.
 * function multiply(a, b) {
  return a * b;
 }
 */

/**
 * Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi
 * multiply(3, 4);
 */

/**
 * Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya
 */

const user = {
  id: 24,
  displayName: "kren",
  fullName: "Kylo Ren",
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);

/**
 * Default Parameter
 * Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen yang dimasukkan ke dalam parameter. Ini berarti kita bisa memasukkan argumen meskipun tidak sesuai dengan parameter yang telah didefinisikan.
 */

function exponentsFormula(baseNumber, exponent) {
  const result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);

/**
 * Sebagai solusi jika memungkinkan, kita bisa memberikan nilai default pada parameter. Nilai ini akan digunakan jika kita tidak memasukkan parameter.
 */
function exponentsFormula(baseNumber, exponent = 2) {
  const result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

/**
 * Rest Parameter
 * Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array.
 */
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));
