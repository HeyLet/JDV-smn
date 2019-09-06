var imagemX = 'Imagens/x.png'; //Local da imagem X
var imagemO = 'Imagens/Bolinha.png'; // Local da imagem Bolinha
var comparaO = '<img src="Imagens/Bolinha.png" style=" width: 200px; height: 200px background-size: 200px">'
var controle = null; // variavel para preenchimento dos quadrados
var vencedor = '';
var fimDeJogo = false;
var resetar
var placarX = +(window.localStorage.getItem('scoreX')) || 0;
var placarO = +(window.localStorage.getItem('scoreO')) || 0;
var numerodejogadas = 0; //todos os blocos numero de jogadas;
var disabled = false;
var nivel = 2;
var tipo; //Verifica a primeira jogada da maquina se for b2 ou a1
var selectedValue; //Inicializa jogo com o computador como oponente
var chaveX = 'scoreX'
var chaveO = 'scoreO'
var bloquearJogada = false;

window.onload = () => {
    document.getElementById('placarXis').innerHTML = placarX;
    document.getElementById('placarO').innerHTML = placarO;
}


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
    }
}

function botaoBolinha() {
    if (controle == null) {
        controle = true;
        document.getElementById("bola").disabled = true;
    }
}

function jogadaJogador(espaco) {

    if (!bloquearJogada) {
        if (selectedValue == undefined) {
            alert("ESCOLHA UM MODO DE JOGO")
        } else {
            if (!espaco.classList.contains("clicado")) {
                console.log("Bloqueei");
                bloquearJogada = true;
                jogada(espaco)
                if (selectedValue === "maquina") {
                    setTimeout(() => {
                        jogadaCpu();

                    }, 500);
                } else {
                    bloquearJogada = false;
                }
            }
        }
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
    setTimeout(() => {
        bloquearJogada = false;
        if (nivel == 1) {
            var vetVazio = vet.filter(function(elemento) {
                return elemento.innerHTML === "";
            })
            var index = Math.floor(Math.random() * vetVazio.length);

        } else {
            if (numerodejogadas === 1) {
                if (b2.innerHTML === "") {
                    jogada(b2)
                    tipo = 5
                    return
                } else {
                    jogada(a1)
                    tipo = 1
                    return
                }
            } else {
                var contJogada = 0;
                var jogar;
                if (tipo == 1) { //testa se a primeira jogada da maquina foi na casa A1
                    //Testa Linha 2
                    if (b1.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = b1;
                    }

                    if (b2.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = b2;
                    }

                    if (b3.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = b3;
                    }

                    if (contJogada === 2) {
                        jogada(jogar);
                        return
                    } else {
                        contJogada = 0;
                    }

                    //Testa Linha 3
                    if (c1.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c1;
                    }

                    if (c2.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c2;
                    }

                    if (c3.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c3;
                    }

                    if (contJogada === 2) {
                        jogada(jogar);
                        return
                    } else {
                        contJogada = 0;
                    }

                    //Testa Coluna 2
                    if (a2.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = a2;
                    }

                    if (b2.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = b2;
                    }

                    if (c2.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c2;
                    }

                    if (contJogada === 2) {
                        jogada(jogar);
                        return
                    } else {
                        contJogada = 0;
                    }

                    //Testa Coluna 3
                    if (c1.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c1;
                    }

                    if (c2.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c2;
                    }

                    if (c3.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c3;
                    }

                    if (contJogada === 2) {
                        jogada(jogar);
                        return
                    } else {
                        contJogada = 0;
                        jogada(jogar);
                        return
                    }
                } else if (tipo == 5) { //testa se a primeira jogada da maquina foi na casa B2
                    //Testa Linha 1
                    if (a1.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = a1;
                    }

                    if (a2.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = a2;
                    }

                    if (a3.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = a3;
                    }

                    if (contJogada === 2) {
                        jogada(jogar);
                        return
                    } else {
                        contJogada = 0;
                    }

                    //Testa Linha 3
                    if (c1.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c1;
                    }

                    if (c2.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c2;
                    }

                    if (c3.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c3;
                    }

                    if (contJogada === 2) {
                        jogada(jogar);
                        return
                    } else {
                        contJogada = 0;
                    }

                    //Testa Coluna 1
                    if (a1.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = a1;
                    }

                    if (b1.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = b1;
                    }

                    if (c1.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c1;
                    }

                    if (contJogada === 2) {
                        jogada(jogar);
                        return
                    } else {
                        contJogada = 0;
                    }

                    //Testa Coluna 3
                    if (c1.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c1;
                    }

                    if (c2.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c2;
                    }

                    if (c3.innerHTML != "") {
                        contJogada++
                    } else {
                        jogar = c3;
                    }
                    if (contJogada === 2) {
                        jogada(jogar);
                        return
                    } else {
                        contJogada = 0;
                        jogada(jogar);
                        return
                    }
                }

            }
        }

    }, 200);
}

function verificaVencedor() {
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
            document.getElementById('placarO').innerHTML = placarO;
            vencedor = 'Bolinha';
            window.localStorage.setItem(chaveO, placarO);
        } else {
            placarX += 1;
            document.getElementById('placarXis').innerHTML = placarX;
            vencedor = 'XIS';
            window.localStorage.setItem(chaveX, placarX);
        }
        fimDeJogo = true;

    } else if (((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != ""))) {
        {
            if (b2 == comparaO) {
                placarO += 1;
                document.getElementById('placarO').innerHTML = placarO;
                vencedor = 'Bolinha';
                window.localStorage.setItem(chaveO, placarO);
            } else {
                placarX += 1;
                document.getElementById('placarXis').innerHTML = placarX;
                vencedor = 'XIS';
                window.localStorage.setItem(chaveX, placarX);
            }
            fimDeJogo = true;
        }

    } else if (((c1 == c2 && c1 == c3) || (c3 == a3 && c3 == b3)) && c3 != "") {
        if (c1 == comparaO) {
            placarO += 1;
            document.getElementById('placarO').innerHTML = placarO;
            vencedor = 'Bolinha';
            window.localStorage.setItem(chaveO, placarO);
        } else {
            placarX += 1;
            document.getElementById('placarXis').innerHTML = placarX;
            vencedor = 'XIS';
            window.localStorage.setItem(chaveX, placarX);
        }
        fimDeJogo = true;
    }
    if (vencedor == "" && numerodejogadas == 9) {
        fimDeJogo = true;

        setTimeout(function() {
            alert("DEU VELHA!!");
        }, 50)
    }

    if (vencedor != "") {
        fimDeJogo = true;

        setTimeout(function() {
            alert("O ganhador foi o :'" + vencedor + "'");
        }, 50)
    }

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

    numerodejogadas = 0;
    document.getElementById("bola").disabled = false;
    document.getElementById("xis").disabled = false;
    controle = null; // variavel para preenchimento dos quadrados
    vencedor = '';
    fimDeJogo = false;
    placarX = 0;
    placarO = 0;
    numerodejogadas = 0; //todos os blocos numero de jogadas;
    nivel = 2;
    tipo; //Verifica a primeira jogada da maquina se for b2 ou a
    bloquearJogada = false;
    tipoDejogo();


}

//função de novo jogo
function novoJogo(espaco) {
    resetar();
    placarO = 0;
    placarX = 0;
    window.localStorage.setItem(chaveO, placarO);
    window.localStorage.setItem(chaveX, placarX);
    document.getElementById('placarXis').innerHTML = placarX;
    document.getElementById('placarO').innerHTML = placarO;
}

function verificarClicado(elemento) {
    if (elemento.classList.contains("clicado")) {
        elemento.classList.remove("clicado")
    }
}


function tipoDejogo() {
    if (numerodejogadas == 0) {
        selectedValue = document.getElementById("escolhaTipo").value;

    } else {

    }
}