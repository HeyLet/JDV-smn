var imagemX = 'Imagens/x.png'; //Local da imagem X
var imagemO = 'Imagens/Bolinha.png'; // Local da imagem Bolinha
var comparaO = '<img src="Imagens/Bolinha.png" style=" width: 200px height: 200px background-size: 200px">'
var controle = false; // variavel para preenchimento dos quadrados 
var tabuleiro;
var vencedor = '';
var gameOver = true;
var fimDeJogo = false;
var resetar;

//Função do onclick
function Jogada(espaco) {
    if (fimDeJogo == false) {
        //preenche a imagem e bloqueia a mesma para nao se repetir
        if (espaco.innerHTML == '') {
            if (controle) {
                espaco.innerHTML = `<img src = "${imagemO}" style=" width: 200px height: 200px background-size: 200px"/>`;
                verificaVencedor();
                controle = !controle;
            } else if (!controle) {
                espaco.innerHTML = `<img src = "${imagemX}" style=" width: 200px "/>`;
                verificaVencedor();
                controle = !controle;
            }
        }
    }
}

function verificaVencedor() {
    // Pegará o valor das posiçoes
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
            vencedor = 'Bolinha';

        } else {
            vencedor = 'XIS';

            fimDeJogo = true;
        }

    } else if (((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != ""))) {
        {
            if (b2 == comparaO) {
                vencedor = 'Bolinha';

            } else {
                vencedor = 'XIS';

                fimDeJogo = true;
            }


        }


    } else if (((c3 == c2 && c3 == c1 == c1) || (c3 == a3 && c3 == b3)) && c3 != "") {
        console.log("Vencedor 4: ", vencedor);
        fimDeJogo = true;
    }
    if (vencedor != "") {
        gameOver = true;
        alert("O ganhador foi o :'" + vencedor + "'");
        fimDeJogo = true;


    }
}

function resetar() {

}