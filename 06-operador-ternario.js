/* exemplo 06 - Operador Ternário  */

let associado = true;

let user = associado;
/* user = !associado;
 */
console.log(user ? "Valor total a pagar: €100,00" : "Valor total a pagar: €200,00");

let velocidade = 80;

let multado = velocidade > 50  ? "Condutor em alta velocidade, coima aplicada" : "";

console.log(multado);

let preco = 100;
let totalPago = preco > 50 ? preco - (preco) * 0.10 : preco;

console.log("O total a pagar: €", totalPago,);


let idade = 65;
let diabetes = true;

console.log(idade > 60 && diabetes ? 
    "Vacina-se, você faz parte do grupo de risco" : "Aguarde o seu momento de vacinação")