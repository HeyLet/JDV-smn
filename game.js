var imagemX = 'Imagens/x.png'; //Local da imagem X
var imagemO = 'Imagens/Bolinha.png'; // Local da imagem Bolinha
var comparaO = '<img src="Imagens/Bolinha.png" style=" width: 200px; height: 200px background-size: 200px">'
var controle = null; // variavel para preenchimento dos quadrados 
var vencedor = '';
var fimDeJogo = false;
var resetar
var placarX = 0;
var placarO = 0;
var numerodejogadas = 0; //todos os blocos numero de jogadas;
var disabled = false;
var nivel = 1;


//Função de clique
function jogada(espaco) {

    if (fimDeJogo == false) {
        //preenche a imagem e bloqueia a mesma para nao se repetir
        if (controle == true) {
            espaco.classList.add("clicado");
            espaco.innerHTML = `<img src = "${imagemO}" style=" width: 200px; height: 200px background-size: 200px"/>`;
            numerodejogadas += 1;
            controle = !controle;

        } else if (controle == false) {
            espaco.innerHTML = `<img src = "${imagemX}" style=" width: 200px; height: 200px background-size: 200px "/>`;
            espaco.classList.add("clicado");
            numerodejogadas += 1;
            controle = !controle;

        }
        verificaVencedor();
    }
}

function botaoXis() {
    if (controle == null) {
        controle = false;
        document.getElementById("xis").disabled = true;
    } else {

    }
}

function botaoBolinha() {
    if (controle == null) {
        controle = true;
        document.getElementById("bola").disabled = true;
    } else {

    }
}

function jogadaJogador(espaco) {

    console.log(numerodejogadas)

    if (espaco.classList.contains("clicado")) {

    } else {
        jogada(espaco)
        jogadaCpu();
    }
}

//jogada do computador
function jogadaCpu() {

    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");

    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");

    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var vet = [a1, a2, a3, b1, b2, b3, c1, c2, c3];
    var vetVazio = vet.filter(function(elemento) {
        return elemento.innerHTML === "";
    })
    var index = Math.floor(Math.random() * vetVazio.length);

    setTimeout(() => {
        jogada(vetVazio[index]);
    }, 500);


}

async function verificaVencedor() {
    var a1 = document.getElementById("a1").innerHTML;
    var a2 = document.getElementById("a2").innerHTML;
    var a3 = document.getElementById("a3").innerHTML;

    var b1 = document.getElementById("b1").innerHTML;
    var b2 = document.getElementById("b2").innerHTML;
    var b3 = document.getElementById("b3").innerHTML;

    var c1 = document.getElementById("c1").innerHTML;
    var c2 = document.getElementById("c2").innerHTML;
    var c3 = document.getElementById("c3").innerHTML;


    //Possibilidade de ganhador
    if (((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != ""))) {
        if (a1 == comparaO) {
            placarO += 1;
            placarBolinha.innerHTML = placarO;
            vencedor = 'Bolinha';
        } else {
            placarX += 1;
            placarXis.innerHTML = placarX;
            vencedor = 'XIS';
        }
        fimDeJogo = true;

    } else if (((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != ""))) {
        {
            if (b2 == comparaO) {
                placarO += 1;
                placarBolinha.innerHTML = placarO;
                vencedor = 'Bolinha';
            } else {
                placarX += 1;
                placarXis.innerHTML = placarX;
                vencedor = 'XIS';
            }
            fimDeJogo = true;
        }

    } else if (((c1 == c2 && c1 == c3) || (c3 == a3 && c3 == b3)) && c3 != "") {
        if (c1 == comparaO) {
            placarO += 1;
            placarBolinha.innerHTML = placarO;
            vencedor = 'Bolinha';
        } else {
            placarX += 1;
            placarXis.innerHTML = placarX;
            vencedor = 'XIS';
        }
        fimDeJogo = true;
    }
    if (vencedor == "" && numerodejogadas == 9) {
        await sleep(50);
        alert("DEU VELHA!!");
    }

    if (vencedor != "") {
        fimDeJogo = true;

        await sleep(50);

        alert("O ganhador foi o :'" + vencedor + "'");
    }
}
//tempo de resposta do alert
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Função de resetar
function resetar() {

    document.getElementById("a1").innerHTML = "";
    verificarClicado(document.getElementById("a1"))

    document.getElementById("a2").innerHTML = "";
    verificarClicado(document.getElementById("a2"))

    document.getElementById("a3").innerHTML = "";
    verificarClicado(document.getElementById("a3"))

    document.getElementById("b1").innerHTML = "";
    verificarClicado(document.getElementById("b1"))

    document.getElementById("b2").innerHTML = "";
    verificarClicado(document.getElementById("b2"))

    document.getElementById("b3").innerHTML = "";
    verificarClicado(document.getElementById("b3"))

    document.getElementById("c1").innerHTML = "";
    verificarClicado(document.getElementById("c1"))

    document.getElementById("c2").innerHTML = "";
    verificarClicado(document.getElementById("c2"))

    document.getElementById("c3").innerHTML = "";
    verificarClicado(document.getElementById("c3"))

    fimDeJogo = false;
    controle = null;
    vencedor = "";
    numerodejogadas = 0;
    document.getElementById("bola").disabled = false;
    document.getElementById("xis").disabled = false;
}

//função de novo jogo
function novoJogo(espaco) {
    resetar();
    placarO = 0;
    placarX = 0;
    placarXis.innerHTML = placarX;
    placarBolinha.innerHTML = placarO;
}

function verificarClicado(elemento) {
    if (elemento.classList.contains("clicado")) {
        elemento.classList.remove("clicado")
    }
}