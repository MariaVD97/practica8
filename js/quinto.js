// Se definen dos arreglos de números enteros (del mismo tamaño)
const arreglo1 = [5, 3, 8, 2, 1];
const arreglo2 = [9, 6, 7, 4, 10];

// Se crear un tercer arreglo con los valores menores de los dos primeros arreglos
const arregloMenores = [];

for (let i = 0; i < arreglo1.length; i++) {
    arregloMenores.push(Math.min(arreglo1[i], arreglo2[i]));
}

// Ordena el tercer arreglo de manera descendente
arregloMenores.sort(function(a, b) {
    return b - a;
});

// Muestra los arreglos originales y el tercer arreglo en la consola
console.log("Arreglo 1: " + arreglo1);
console.log("Arreglo 2: " + arreglo2);
console.log("Arreglo de Valores Menores (descendente): " + arregloMenores);
