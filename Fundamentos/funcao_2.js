//Armazenando uma função em uma variavel

const imprimirSoma = function (a = 0, b = 0) {
    console.log(a + b);
}

imprimirSoma(2, 3);

//Armazenando funco arrow em uma variavel

console.log("Função Arrow");

const soma = (a, b) => {
    return a + b;
}

console.log(soma(154, 8944));

//retorno implicito

const subtracao = (a, b) => a - b;

console.log(subtracao(784554, 8945));

const texto = a => console.log(a);

texto("Oi!!!");