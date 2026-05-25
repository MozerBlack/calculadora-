const visor = document.getElementById('resultado');

function inserir(valor) {
    if (visor.value === 'Erro') {
        limparVisor();
    }
    visor.value += valor;
}

function limparVisor() {
    visor.value = '';
}

function deletarUltimo() {
    visor.value = visor.value.slice(0, -1);
}

function calcular() {
    try {
        if (visor.value !== '') {
            let expressao = visor.value;

            // Substitui os símbolos visuais pelos operadores do JavaScript
            expressao = expressao.replace(/×/g, '*');
            expressao = expressao.replace(/÷/g, '/');
            expressao = expressao.replace(/%/g, '/100');

            // Calcula o resultado final
            visor.value = eval(expressao);
        }
    } catch (error) {
        visor.value = 'Erro';
    }
}
