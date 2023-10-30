// Se define un arreglo de números enteros
const numeros = [2, 4, 5, 4, 8, 4, 10, 5, 12, 4, 15];

// Se crear una función para encontrar la moda
function encontrarModa(arr) {
    const conteo = {}; // Un objeto para contar la frecuencia de cada número
    let moda = [];
    let maxFrecuencia = 0;

    // Llenar el objeto de conteo
    for (let num of arr) {
        conteo[num] = (conteo[num] || 0) + 1;
        if (conteo[num] > maxFrecuencia) {
            maxFrecuencia = conteo[num];
        }
    }

    // Encontrar la moda
    for (let num in conteo) {
        if (conteo[num] === maxFrecuencia) {
            moda.push(Number(num));
        }
    }

    return moda;
}

// Llama a la función para obtener la moda
const moda = encontrarModa(numeros);

// Muestra el arreglo original y el valor de la moda en la consola
console.log("Arreglo de números: " + numeros);
console.log("Moda: " + moda);
