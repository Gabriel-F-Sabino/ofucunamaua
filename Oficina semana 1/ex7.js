function encontrarMaiorNumero(arr) {
  if (arr.length === 0) {
    return null;
  }
  
  let maior = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }
  return maior;
}

const numeros = [3, 7, 2, 9, 15, -4];
console.log("O maior número no array é:", encontrarMaiorNumero(numeros));