document.getElementById("startBtn").addEventListener("click", function() {

    const nome = prompt("Por favor, insira o seu nome:");

    const numero1 = parseInt(prompt(nome + ", vamos realizar uma soma, insira o primeiro número:"));
    const numero2 = parseInt(prompt("Agora, insira o segundo número:"));

    const soma = numero1 + numero2;

    console.log(nome + ", a soma de " + numero1 + " e " + numero2 + " é: " + soma);
    alert(nome + ", a soma de " + numero1 + " e " + numero2 + " é: " + soma);

    const frase = prompt(nome + ", vamos formar uma frase, insira o primeiro texto:");
    const frase2 = prompt(nome + ", Agora, insira o segundo texto");

    const soma2 = frase + " " + frase2;

    console.log(nome + ", Ao juntar os dois textos, a frase resultante será a seguinte:" + soma2);
    alert(nome + ", Ao juntar os dois textos, a frase resultante será a seguinte:" + soma2);
});
