// Se define una matriz cuadrada (es un arreglo de dos dimensiones).
const matrizCuadrada = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Se crea un arreglo para almacenar los valores de la diagonal principal
const diagonalPrincipal = [];

// Se itera sobre la matriz para obtener los valores de la diagonal principal
for (let i = 0; i < matrizCuadrada.length; i++) {
    diagonalPrincipal.push(matrizCuadrada[i][i]);
}

// Muestra la matriz original y los valores de la diagonal principal en la consola
console.log("Matriz Cuadrada:");
for (let fila of matrizCuadrada) {
    console.log(fila.join("\t")); // Se usar join para formatear la salida de cada fila
}

console.log("Valores de la Diagonal Principal: " + diagonalPrincipal);
