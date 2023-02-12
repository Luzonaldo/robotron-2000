//utilizar data-attribute

//1- botao ao ser acionado faz aparecer esta lista
//2- segundo botão ao ser acionado faz desapaerecer a lista

function mostraTintas(botao) {
    const lista = document.querySelector('[data-hiden]');
    console.log(lista);
    botao.onclick = () => {
        lista.removeAttribute('data-hiden');
    }
}