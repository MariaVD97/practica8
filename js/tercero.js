//Se definen dos arreglos de números enteros
const arreglo1 = [5, 3, 8, 2, 1];
const arreglo2 = [9, 6, 7, 4];

// Se combinan los valores de los dos arreglos en un tercer arreglo
const arregloCombinado = arreglo1.concat(arreglo2);

// Ordena el tercer arreglo de manera ascendente
arregloCombinado.sort(function(a, b) {
    return a - b;
});

// Muestra el tercer arreglo ordenado en la consola
console.log("Arreglo 1: " + arreglo1);
console.log("Arreglo 2: " + arreglo2);
console.log("Arreglo Combinado Ordenado: " + arregloCombinado);
