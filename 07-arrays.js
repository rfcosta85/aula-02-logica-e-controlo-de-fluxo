/* Exemplo 07 - Arrays */

let frutas = ["Maçã", "Banana", "Morango"];
console.log(frutas[0]);

let mesclado = ["Formandos", 10, "UPCA"];
console.log(mesclado[0], mesclado[1]);

console.log(frutas.length);

let produtos = ["Rato", "Portátil"]
console.log(produtos);
produtos.push("Ecrã 29")
console.log(produtos);

produtos.pop();
console.log(produtos);


produtos.unshift("Iphone 18");
console.log(produtos);

produtos.shift();
console.log(produtos);

produtos.push("Asus Pro 16");
console.log(produtos);

produtos.splice(1, 1);
console.log(produtos);