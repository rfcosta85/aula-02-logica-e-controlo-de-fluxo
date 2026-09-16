/* Exemplo 08 - Loops */

let produtos = ["Rato", "Portátil", "ecrã", "Iphone 18", "Samsung Galaxy 16", "Ipad"];

/* for(let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
} */

/* for(let i = 3; i < produtos.length; i++) {
    console.log(produtos[i]);
} */

for(let i = produtos.length - 1; i >= 0; i--) {
    console.log(produtos[i]);
}