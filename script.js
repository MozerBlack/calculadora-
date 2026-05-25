const visor = document.getElementById('resultado');

function inserir(valor) {
    // Se tiver "Erro" na tela, limpa antes de digitar o novo número
    if (visor.value === 'Erro') {
        limparVisor();
    }
    visor.value += valor;
}

function limparVisor() {
    visor.value = '';
}

// Caso queira apagar de 1 em 1 (opcional, mas bom ter)
function deletarUltimo() {
    visor.value = visor.value.slice(0, -1);
}

function calcular() {
    try {
        if (visor.value !== '') {
            let expressao = visor.value;

            // Traduz o que está na tela para o padrão do Javascript
            expressao = expressao.replace(/×/g, '*');
            expressao = expressao.replace(/÷/g, '/');
            expressao = expressao.replace(/%/g, '/100');

            // Calcula o resultado
            let resultadoFinal = eval(expressao);

            // Se der um número quebrado muito longo, limita as casas decimais
            if (resultadoFinal % 1 !== 0) {
                resultadoFinal = Number(resultadoFinal.toFixed(6));
            }

            visor.value = resultadoFinal;
        }
    } catch (error) {
        visor.value = 'Erro';
    }
}
