

const controle = document.querySelectorAll('[data-controle]')


controle.forEach( (elemento) => {
    elemento.addEventListener ('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        
    })
})
    

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');
        
    if(operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

//texto - textContent
//input - value
//data-attribute ex data-controle = '-'; data-contador = 'esta string'; permite criar atributos personalizados nas tags
// acesso ao data atributes do tipo data-controle ex: evt.target.dataset.controle
