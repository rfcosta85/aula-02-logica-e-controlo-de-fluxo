/* Exemplo 09 - While */

/* let n = 0;
let x = 0;

while(n < 3) {
    n++;
    x += n;
    console.log("Valor atual de X: ", x)
} */


let filaDeEmails = ['Ana', 'Carlos', 'Beatriz', 'David'];

console.log("A iniciar o envio de e-mails...");

while (filaDeEmails.length > 0) {
    
    let proximoUtilizador = filaDeEmails.shift(); 
    
    console.log(`E-mail enviado com sucesso para: ${proximoUtilizador}`);
    console.log(`Ainda restam ${filaDeEmails.length} pessoas na fila.`);
    console.log("-----------------------------------");
}

console.log("Todos os e-mails foram enviados! Fila vazia.");
