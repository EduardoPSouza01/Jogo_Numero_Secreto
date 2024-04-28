let qtdNumero = 100;
let listaNumSorteado = [];
let numberAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numberAleatorio);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${qtdNumero}`);
}

mensagemInicial();

function verificarChute(){
    
    let chute = parseInt(document.querySelector('input').value);
     
    if(chute == numberAleatorio){
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mesagemTentativas = `Você Acertou o néumero Secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mesagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute < numberAleatorio){
            exibirTextoNaTela('p', 'O valor é maior!');
        }
        else{
            exibirTextoNaTela('p', 'O valor é menor!');
        }
    }     
    tentativas++;
    limparCampo 
}

function limparCampo(){
    chute = document.getSelection('inpit');
    chute.value = '';
}

function gerarNumeroAleatorio(){

    let numEscolhido =  parseInt(Math.random() * (qtdNumero + 1));
    let qtdElementosNaLista = listaNumSorteado.length;

    if(qtdElementosNaLista == qtdNumero){
        listaNumSorteado = [];
    }
    if(listaNumSorteado.includes(numEscolhido)){
        return gerarNumeroAleatorio()
    }else{
        listaNumSorteado.push(numEscolhido);
        return numEscolhido;
    } 
}

function novoJogo(){
     return gerarNumeroAleatorio();
}


function reiniciarJogo(){
    numberAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}