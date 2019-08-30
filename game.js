var imagemX = 'Imagens/x.png'; //Local da imagem X
var imagemO = 'Imagens/Bolinha.png'; // Local da imagem Bolinha
var comparaO = '<img src="Imagens/Bolinha.png" style=" width: 200px; height: 200px background-size: 200px">'
var controle = false; // variavel para preenchimento dos quadrados 
var vencedor = '';
var fimDeJogo = false;
var resetar
var placarX = 0;
var placarO = 0;
var numerodejogadas = 0; //todos os blocos numero de jogadas
var bloquearUser = false;
var dificuldade = getDificuldade;
var randomBloq

//Função do onclick
function jogada(espaco) {
    if (fimDeJogo == false) {
        console.log(espaco.id)

        //preenche a imagem e bloqueia a mesma para nao se repetir
        if (espaco.innerHTML == '') {
            if (controle) {
                espaco.innerHTML = `<img src = "${imagemO}" style=" width: 200px; height: 200px background-size: 200px"/>`;
                // numerodejogadas = numerodejogadas + 1;
                numerodejogadas += 1;
                controle = !controle;
            } else if (!controle) {
                espaco.innerHTML = `<img src = "${imagemX}" style=" width: 200px; height: 200px background-size: 200px "/>`;
                numerodejogadas += 1;
                controle = !controle;
            }
            verificaVencedor();
        }
    }
}

function getDificuldade() {
    if (document.getElementById("facil").checked) {
        return 0;
    }
    if (document.getElementById("medio").checked) {
        return 1;
    }
    if (document.getElementById("dificil").checked) {
        return 2;
    }
}


function jogadaJogador(espaco) {
    jogada(espaco)
    jogadaCpu();

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

    console.log();
    switch (dificuldade) {
        case 0:
            if (vetVazio >= 7) {
                bloquearUser = true;
            }
            break;
        case 1:
            if (vetVazio >= 5) {
                bloquearUser = true;
            }
            break;
        case 2:
            if (vetVazio >= 2) {
                bloquearUser = true;
            }
            break;
    }

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
        alert("DEU VEIAAAAA");
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

//Função de novo jogo
function resetar(espaco) {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    fimDeJogo = false;
    controle = false; // vez do X de começar
    vencedor = "";
    numerodejogadas = 0;
}

function novoJogo(espaco) {
    resetar();
    placarO = 0;
    placarX = 0;
    placarXis.innerHTML = placarX;
    placarBolinha.innerHTML = placarO;

}