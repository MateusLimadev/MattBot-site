var cordofundo = "branca";

function mudartema() {
    var body = document.body;
    var elementosDeTexto = document.querySelectorAll('h1, h2, p');
    var elementosDoHeader = document.querySelectorAll('header *'); // Seleciona todos os elementos dentro do header
    var divisao = document.querySelector('.divisao'); // Seleciona a linha de divisão

    if (cordofundo === 'branca') {
        body.style.background = '#0C0F33';
        cordofundo = 'roxa';

        // Altere a cor do texto para branco
        elementosDeTexto.forEach(function(elemento) {
            elemento.style.color = 'white';
        });

        // Altere a cor do texto dos elementos dentro do header para branco
        elementosDoHeader.forEach(function(elemento) {
            elemento.style.color = 'white';
        });

        // Altere a cor da linha de divisão para branco
        divisao.style.backgroundColor = 'white';
    } else {
        body.style.background = 'white';
        cordofundo = 'branca';

        // Reset a cor do texto para roxo
        elementosDeTexto.forEach(function(elemento) {
            elemento.style.color = 'purple';
        });

        // Reset a cor do texto dos elementos dentro do header para roxo
        elementosDoHeader.forEach(function(elemento) {
            elemento.style.color = 'purple';
        });

        // Reset a cor da linha de divisão para roxo
        divisao.style.backgroundColor = 'purple';
    }
}
