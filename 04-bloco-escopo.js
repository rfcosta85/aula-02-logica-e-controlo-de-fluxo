/* exemplo 04 - Bloco e Escopo */

let a = 10;
var c = 50;

{
    let b = 20;
    var d = 5000;
    console.log("Variável de escopo global",a);
    console.log("Variável de escopo local",b);
    console.log("Variável de escopo global",c);
}

/* console.log(b); */
console.log("Variável de escopo global",c);
console.log("Variável de escopo global",d);
