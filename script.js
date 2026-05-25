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

function calcular() {
    try {
        if (visor.value !== '') {
            let expressao = visor.value;

            // Transforma os caracteres visuais em operadores matemáticos reais
            expressao = expressao.replace(/×/g, '*');
            expressao = expressao.replace(/÷/g, '/');
            expressao = expressao.replace(/%/g, '/100');

            let resultadoFinal = eval(expressao);

            // Evita dízimas periódicas gigantescas na tela
            if (resultadoFinal % 1 !== 0) {
                resultadoFinal = Number(resultadoFinal.toFixed(6));
            }

            visor.value = resultadoFinal;
        }
    } catch (error) {
        visor.value = 'Erro';
    }
}
