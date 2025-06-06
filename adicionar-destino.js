// Elementos do DOM
const formDestino = document.getElementById('form-destino');
const notaInput = document.getElementById('nota');
const notaValor = document.getElementById('nota-valor');

// Função para gerar um ID único
function gerarId() {
    return Math.floor(Math.random() * 1000000);
}

// Função para obter todos os destinos
function getDestinos() {
    return JSON.parse(localStorage.getItem('destinos')) || [];
}

// Função para salvar todos os destinos
function salvarDestinos(destinos) {
    localStorage.setItem('destinos', JSON.stringify(destinos));
}

// Função para adicionar ao roteiro
function adicionarAoRoteiro(destino) {
    let roteiro = JSON.parse(localStorage.getItem('roteiro')) || [];
    
    // Verificar se o destino já existe no roteiro
    if (!roteiro.some(d => d.id === destino.id)) {
        roteiro.push(destino);
        localStorage.setItem('roteiro', JSON.stringify(roteiro));
        console.log(`Destino ${destino.nome} adicionado ao roteiro`);
    } else {
        console.log(`Destino ${destino.nome} já existe no roteiro`);
    }
}

// Atualizar o valor da nota conforme o usuário move o slider
if (notaInput && notaValor) {
    notaInput.addEventListener('input', (e) => {
        notaValor.textContent = e.target.value;
    });
}

// Manipular o envio do formulário
if (formDestino) {
    formDestino.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validar campos obrigatórios
        const camposObrigatorios = ['nome', 'estado', 'tipo', 'descricao', 'custo', 'imagens'];
        for (const campo of camposObrigatorios) {
            if (!formDestino[campo].value.trim()) {
                showError('Campo Obrigatório', `Por favor, preencha o campo ${campo}.`);
                formDestino[campo].focus();
                return;
            }
        }

        // Processar imagens (separar por linhas e remover espaços)
        const imagens = formDestino.imagens.value
            .split('\n')
            .map(url => url.trim())
            .filter(url => url.length > 0);

        if (imagens.length === 0) {
            showError('Campo Obrigatório', 'Por favor, adicione pelo menos uma imagem.');
            formDestino.imagens.focus();
            return;
        }

        const destino = {
            id: gerarId(),
            nome: formDestino.nome.value.trim(),
            estado: formDestino.estado.value.trim(),
            tipo: formDestino.tipo.value.trim(),
            descricao: formDestino.descricao.value.trim(),
            imagens: imagens,
            custo: parseFloat(formDestino.custo.value) || 0,
            nota: parseFloat(formDestino.nota.value) || 3,
            melhorEpoca: 'Ano todo', // Valor padrão
            tempoSugerido: '2-3 dias', // Valor padrão
            atracoes: [], // Inicialmente vazio
            isDefault: false // Garantindo que novos destinos sejam marcados como não padrão
        };

        try {
            const destinos = getDestinos();
            destinos.push(destino);
            salvarDestinos(destinos);

            // Mostrar mensagem de sucesso
            showSuccess('Destino Criado', `${destino.nome} foi criado com sucesso!`);

            // Redirecionar para a página de destinos
            setTimeout(() => {
                window.location.href = 'destinos.html';
            }, 1500);
        } catch (error) {
            console.error('Erro ao salvar destino:', error);
            showError('Erro', 'Ocorreu um erro ao salvar o destino. Por favor, tente novamente.');
        }
    });
}