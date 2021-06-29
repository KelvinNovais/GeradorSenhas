var caracteres = "";
                
document.getElementById("gerSen").onclick = function () {
    caracteres = "";                

    // Inserindo caracteres de acordo com os checkbox
    if (maiusc.checked) {
        console.log("> Escolheu maiúsculas");
        caracteres = caracteres + "ABCDEFGHIJLMNOPQRSTUVWXYZ";
    }

    if (minusc.checked) {
        console.log("> Escolheu minúsculas");
        caracteres = caracteres + "abcdefghijklmnopqrstuvwxyz";
    }

    if (num.checked) {
        console.log("> Escolheu números");
        caracteres = caracteres + "0123456789";
    }

    if (carEsp.checked) {
        console.log("> Escolheu caracteres especiais");
        caracteres = caracteres + "!@#$%^&*()+?><:{}[]";
    }

    // Se nenhuma caixa for selecionada, ou qtd. de caracteres for igual ou menor que 0 ou qtd. de senhas for menor ou igual a 0...
    if(!(maiusc.checked || minusc.checked || num.checked || carEsp.checked) || (parseInt(document.getElementById('QtdCar').value) <= 0) || (parseInt(document.getElementById('QtdSen').value) <= 0)){
        console.log("Informe uma configuração válida!");
        document.getElementById("senhaGerada").textContent = "Informe uma configuração válida!";
    } else {
         console.log("Caracteres selecionados: " + caracteres);
         gerarSenha();
    }
}

function gerarSenha() {
    console.log("Gerando senha...");

    var comprimento = document.getElementById('QtdCar').value;
    var quantidade = document.getElementById('QtdSen').value;
    var senhaAtual = "";
    var tabelaSenhas = "";

    for(var j = 0; j < quantidade; j++){
        for (var i = 0; i < comprimento; i++) {
            var numRandomico = Math.floor(Math.random() * caracteres.length);
            senhaAtual += caracteres.substring(numRandomico, numRandomico + 1);
        }
        console.log(senhaAtual);

        tabelaSenhas += senhaAtual + '\n'; // Soma-se a própria tabela de senhas, com a senha atual e uma quebra de linha
        document.getElementById("senhaGerada").textContent = tabelaSenhas;
        
        senhaAtual = ""; //Resetando senha atual
    }
}
