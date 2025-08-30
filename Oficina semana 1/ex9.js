const minhaString = "FLAG{aprendendo_js}";

console.log("String em maiúsculas:", minhaString.toUpperCase());

if (minhaString.includes("js")) {
  console.log('A string contém "js".');
} else {
  console.log('A string não contém "js".');
}

const palavra = minhaString.substring(5, 15);
console.log("Palavra extraída:", palavra);