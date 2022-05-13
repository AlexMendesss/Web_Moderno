let valor; //não inicializa a variável

console.log(valor);

valor = null; //Variável inicializada, mas, sem valor

console.log(valor);

valor = 10; //Variável inicializada, e com valor definido

console.log(valor);

const produto = {}

produto.preco = null //False

console.log(!!produto.preco);

produto.preco = 0; //False

console.log(!!produto.preco);

produto.preco = 1; //True

console.log(!!produto.preco);