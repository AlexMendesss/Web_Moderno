{
    {
        {
            {
                var nome = "Alex";
            }
        }
    }
}

console.log(nome); //Var pode ser acessada de qualquer bloco

const testeEscopo = () => {
    var jogador = "Curry";
    console.log(jogador); // Aqui ela é acessada, pois está no mesmo escopo da função
}

testeEscopo();
//console.log(jogador); - Já aqui não, pois este código não está no mesmo escopo da função