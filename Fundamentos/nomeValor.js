//Par nome/valor
const nome = "Alex"; //Contexto léxico 1

function saudacao() {
    const fala = "Olá"; //Contexto Léxico 2
    return fala;
}

console.log(saudacao());