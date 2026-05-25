// Captura o elemento do visor
const visor = document.getElementById('resultado');

// Insere os números e operadores no visor
function inserir(valor) {
    if (visor.value === 'Erro') {
        limparVisor();
    }
    visor.value += valor;
}

// Limpa tudo (Botão C)
function limparVisor() {
    visor.value = '';
}

// Apaga apenas o último caractere inserido (Botão ⌫)
function deletarUltimo() {
    visor.value = visor.value.slice(0, -1);
}

// Executa o cálculo matemático
function calcular() {
    try {
        // Se o visor não estiver vazio, calcula o resultado
        if (visor.value !== '') {
            visor.value = eval(visor.value);
        }
    } catch (error) {
        // Se houver algum erro de sintaxe (ex: "++" ou "//") mostra erro
        visor.value = 'Erro';
    }
}
