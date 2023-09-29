// Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi.
const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

// add() untuk menambahkan data dalam set()
numberSet.add(5);
numberSet.add(5);
numberSet.add(2);

console.log(numberSet);

//menghapus set
numberSet.delete(4);

console.log(numberSet);
