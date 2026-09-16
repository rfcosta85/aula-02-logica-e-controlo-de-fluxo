const nota1 = 10;
const nota2 = 6;
const media = (nota1 + nota2) / 2

if(media >= 7) {
    console.log("A nota do aluno foi: ", media, "portanto o aluno está aprovado")
} else if (media < 7) {
    console.log("A nota do aluno foi: ", media, "portanto o aluno está reprovado");
} else if (media == 10) {
    console.log("A nota do aluno foi: ", media, "portanto o aluno está aprovado com distição")
}