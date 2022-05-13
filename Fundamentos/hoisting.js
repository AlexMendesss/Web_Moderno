console.log(a);
var a = 0;
console.log(a);

var funcao = () => {
    console.log(valor);
    var valor = 101;
    console.log(valor);
}

funcao();

console.log(b);
let b = 0;
console.log(b); //Com o Let não há o hoisting