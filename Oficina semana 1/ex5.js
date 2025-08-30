const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log("Números pares de 1 a 20:");
for (const numero of numeros) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
}