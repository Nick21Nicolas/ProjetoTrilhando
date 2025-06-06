// Elementos do DOM
const roteiroTimeline = document.querySelector('.roteiro-timeline');
const totalDestinosSpan = document.getElementById('total-destinos');
const totalDestinosResumo = document.getElementById('total-destinos-resumo');
const duracaoTotal = document.getElementById('duracao-total');
const custoTotal = document.getElementById('custo-total');
const limparRoteiroBtn = document.getElementById('limpar-roteiro');
const exportarPdfBtn = document.getElementById('exportar-pdf');
const modalContainer = document.getElementById('modal-container');

// Funções de gerenciamento de dados
function getRoteiro() {
    return JSON.parse(localStorage.getItem('roteiro')) || [];
}

function getDatasDestinos() {
    return JSON.parse(localStorage.getItem('datas_destinos')) || {};
}

function salvarRoteiro(roteiro) {
    localStorage.setItem('roteiro', JSON.stringify(roteiro));
}

function salvarDatasDestinos(datas) {
    localStorage.setItem('datas_destinos', JSON.stringify(datas));
}

// Funções de formatação
function formatarData(data) {
    if (!data) return '';
    return new Date(data).toLocaleDateString('pt-BR');
}

function calcularDuracao(dataInicio, dataFim) {
    if (!dataInicio || !dataFim) return 0;
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);
    const diff = Math.abs(fim - inicio);
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function formatarDinheiro(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Funções de renderização
function renderizarRoteiro() {
    const roteiro = getRoteiro();
    const datasDestinos = getDatasDestinos();

    if (roteiro.length === 0) {
        roteiroTimeline.innerHTML = `
            <div class="roteiro-vazio">
                <i class="fas fa-suitcase-rolling"></i>
                <p>Seu roteiro está vazio!</p>
                <a href="destinos.html" class="btn-primario">
                    <i class="fas fa-plus"></i> Adicionar Destinos
                </a>
            </div>
        `;
    } else {
        roteiroTimeline.innerHTML = roteiro.map((destino, index) => {
            const datas = datasDestinos[destino.id] || {};
            const duracao = calcularDuracao(datas.inicio, datas.fim);

            return `
                <div class="timeline-item">
                    <div class="timeline-header">
                        <div class="timeline-destino">
                            <h3>${destino.nome}</h3>
                            <div class="timeline-local">
                                <i class="fas fa-map-marker-alt"></i>
                                ${destino.estado}
                            </div>
                        </div>
                        <div class="timeline-datas">
                            ${datas.inicio ? `
                                <div class="timeline-data">
                                    ${formatarData(datas.inicio)} - ${formatarData(datas.fim)}
                                </div>
                                <div class="timeline-duracao">
                                    ${duracao} ${duracao === 1 ? 'dia' : 'dias'}
                                </div>
                            ` : `
                                <button class="btn-secundario" onclick="abrirModalDatas(${destino.id})">
                                    <i class="fas fa-calendar-alt"></i> Definir Datas
                                </button>
                            `}
                        </div>
                    </div>

                    <div class="timeline-content">
                        <div class="timeline-info">
                            <i class="fas fa-tag"></i>
                            <span class="info-label">Tipo</span>
                            <span class="info-value">${destino.tipo}</span>
                        </div>
                        <div class="timeline-info">
                            <i class="fas fa-star"></i>
                            <span class="info-label">Avaliação</span>
                            <span class="info-value">${destino.nota}</span>
                        </div>
                        <div class="timeline-info">
                            <i class="fas fa-dollar-sign"></i>
                            <span class="info-label">Custo Estimado</span>
                            <span class="info-value">${formatarDinheiro(destino.custo)}</span>
                        </div>
                    </div>

                    <div class="timeline-acoes">
                        ${index > 0 ? `
                            <button class="btn-secundario" onclick="moverDestino(${index}, -1)">
                                <i class="fas fa-arrow-up"></i> Subir
                            </button>
                        ` : ''}
                        ${index < roteiro.length - 1 ? `
                            <button class="btn-secundario" onclick="moverDestino(${index}, 1)">
                                <i class="fas fa-arrow-down"></i> Descer
                            </button>
                        ` : ''}
                        <button class="btn-secundario" onclick="removerDestino(${destino.id})">
                            <i class="fas fa-trash"></i> Remover
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    atualizarResumo();
}

function atualizarResumo() {
    const roteiro = getRoteiro();
    const datasDestinos = getDatasDestinos();

    const totalDestinos = roteiro.length;
    let duracaoTotalDias = 0;
    let custoTotalValor = 0;

    roteiro.forEach(destino => {
        const datas = datasDestinos[destino.id] || {};
        duracaoTotalDias += calcularDuracao(datas.inicio, datas.fim);
        custoTotalValor += destino.custo;
    });

    totalDestinosSpan.textContent = `${totalDestinos} ${totalDestinos === 1 ? 'destino planejado' : 'destinos planejados'}`;
    totalDestinosResumo.textContent = totalDestinos;
    duracaoTotal.textContent = `${duracaoTotalDias} ${duracaoTotalDias === 1 ? 'dia' : 'dias'}`;
    custoTotal.textContent = formatarDinheiro(custoTotalValor);
}

// Funções de ação
function moverDestino(index, direcao) {
    const roteiro = getRoteiro();
    const novoIndex = index + direcao;

    if (novoIndex >= 0 && novoIndex < roteiro.length) {
        const temp = roteiro[index];
        roteiro[index] = roteiro[novoIndex];
        roteiro[novoIndex] = temp;
        salvarRoteiro(roteiro);
        renderizarRoteiro();
        showSuccess('Destino Movido', 'A ordem do roteiro foi atualizada com sucesso!');
    }
}

function removerDestino(id) {
    const roteiro = getRoteiro();
    const destino = roteiro.find(d => d.id === id);
    if (!destino) return;

    const confirmacao = showWarning(
        'Confirmar Remoção',
        `Tem certeza que deseja remover ${destino.nome} do roteiro?`,
        10000
    );

    // Adicionar botões de confirmação na notificação
    const notification = document.getElementById(confirmacao);
    if (notification) {
        const acoes = document.createElement('div');
        acoes.className = 'notification-actions';
        acoes.style.marginTop = '10px';
        acoes.innerHTML = `
            <button class="btn-primario" onclick="confirmarRemocao(${id}, '${confirmacao}')">
                Confirmar
            </button>
            <button class="btn-secundario" onclick="closeNotification('${confirmacao}')">
                Cancelar
            </button>
        `;
        notification.querySelector('.notification-content').appendChild(acoes);
    }
}

function confirmarRemocao(id, notificationId) {
    const roteiro = getRoteiro();
    const datasDestinos = getDatasDestinos();
    const destino = roteiro.find(d => d.id === id);

    const novoRoteiro = roteiro.filter(d => d.id !== id);
    delete datasDestinos[id];

    salvarRoteiro(novoRoteiro);
    salvarDatasDestinos(datasDestinos);
    closeNotification(notificationId);
    showSuccess('Destino Removido', `${destino.nome} foi removido do roteiro com sucesso!`);
    renderizarRoteiro();
}

function limparRoteiro() {
    const confirmacao = showWarning(
        'Confirmar Limpeza',
        'Tem certeza que deseja limpar todo o roteiro? Esta ação não pode ser desfeita.',
        10000
    );

    // Adicionar botões de confirmação na notificação
    const notification = document.getElementById(confirmacao);
    if (notification) {
        const acoes = document.createElement('div');
        acoes.className = 'notification-actions';
        acoes.style.marginTop = '10px';
        acoes.innerHTML = `
            <button class="btn-primario" onclick="confirmarLimpeza('${confirmacao}')">
                Confirmar
            </button>
            <button class="btn-secundario" onclick="closeNotification('${confirmacao}')">
                Cancelar
            </button>
        `;
        notification.querySelector('.notification-content').appendChild(acoes);
    }
}

function confirmarLimpeza(notificationId) {
    localStorage.removeItem('roteiro');
    localStorage.removeItem('datas_destinos');
    closeNotification(notificationId);
    showSuccess('Roteiro Limpo', 'Seu roteiro foi limpo com sucesso!');
    renderizarRoteiro();
}

// Funções do modal
function abrirModalDatas(id) {
    const destino = getRoteiro().find(d => d.id === id);
    const datasDestinos = getDatasDestinos();
    const datas = datasDestinos[id] || {};

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Definir Datas - ${destino.nome}</h2>
                <span class="modal-close" onclick="fecharModal()">&times;</span>
            </div>
            <div class="modal-body">
                <form id="form-datas" onsubmit="salvarDatas(event, ${id})">
                    <div class="form-grupo">
                        <label for="data-inicio">Data de Início</label>
                        <input type="date" id="data-inicio" name="data-inicio" 
                               value="${datas.inicio || ''}" required>
                    </div>
                    <div class="form-grupo">
                        <label for="data-fim">Data de Fim</label>
                        <input type="date" id="data-fim" name="data-fim" 
                               value="${datas.fim || ''}" required>
                    </div>
                    <button type="submit" class="btn-primario">
                        <i class="fas fa-save"></i> Salvar
                    </button>
                </form>
            </div>
        </div>
    `;

    modalContainer.innerHTML = '';
    modalContainer.appendChild(modal);
}

function fecharModal() {
    modalContainer.innerHTML = '';
}

function salvarDatas(event, id) {
    event.preventDefault();

    const dataInicio = document.getElementById('data-inicio').value;
    const dataFim = document.getElementById('data-fim').value;

    if (new Date(dataFim) < new Date(dataInicio)) {
        showError('Erro nas Datas', 'A data de fim não pode ser anterior à data de início!');
        return;
    }

    const roteiro = getRoteiro();
    const destino = roteiro.find(d => d.id === id);
    const datasDestinos = getDatasDestinos();
    datasDestinos[id] = { inicio: dataInicio, fim: dataFim };
    salvarDatasDestinos(datasDestinos);

    fecharModal();
    showSuccess('Datas Salvas', `As datas para ${destino.nome} foram salvas com sucesso!`);
    renderizarRoteiro();
}

// Função para exportar PDF
async function exportarPDF() {
    const roteiro = getRoteiro();
    
    if (roteiro.length === 0) {
        showWarning('Roteiro Vazio', 'Adicione destinos ao roteiro antes de exportar o PDF!');
        return;
    }

    try {
        showInfo('Gerando PDF', 'Gerando seu roteiro em PDF... Aguarde!');
        
        // Criar nova instância do jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        const datasDestinos = getDatasDestinos();
        let yPosition = 20;
        
        // Configurar cores
        const corPrimaria = [46, 204, 113]; // #2ECC71
        const corSecundaria = [44, 62, 80];  // #2c3e50
        const corTexto = [127, 140, 141];    // #7f8c8d
        const corAcento = [231, 76, 60];     // #e74c3c
        const corFundo = [248, 249, 250];    // #f8f9fa
        
        // ========== CAPA DO ROTEIRO ==========
        doc.setFillColor(...corPrimaria);
        doc.rect(0, 0, 210, 297, 'F');
        
        // Título principal
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(32);
        doc.setFont('helvetica', 'bold');
        doc.text('ROTEIRO DE VIAGEM', 105, 80, { align: 'center' });
        
        // Subtítulo
        doc.setFontSize(18);
        doc.setFont('helvetica', 'normal');
        doc.text('Planejamento Completo da Sua Aventura', 105, 100, { align: 'center' });
        
        // Informações da capa
        const dataAtual = new Date();
        const mesAtual = dataAtual.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
        
        doc.setFontSize(14);
        doc.text(`${roteiro.length} Destinos Selecionados`, 105, 140, { align: 'center' });
        doc.text(`Gerado em ${mesAtual}`, 105, 155, { align: 'center' });
        
        // Decoração da capa
        doc.setDrawColor(255, 255, 255);
        doc.setLineWidth(2);
        doc.rect(30, 60, 150, 120, 'S');
        
        // Logo/texto no rodapé da capa
        doc.setFontSize(12);
        doc.text('TRILHANDO', 105, 250, { align: 'center' });
        doc.setFontSize(10);
        doc.text('Seu companheiro de viagem', 105, 260, { align: 'center' });
        
        // ========== NOVA PÁGINA - ÍNDICE ==========
        doc.addPage();
        yPosition = 30;
        
        // Cabeçalho do índice
        doc.setFillColor(...corSecundaria);
        doc.rect(0, 0, 210, 25, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('ÍNDICE', 105, 17, { align: 'center' });
        
        doc.setTextColor(...corSecundaria);
        doc.setFontSize(14);
        doc.text('1. Resumo Executivo', 20, yPosition);
        yPosition += 10;
        doc.text('2. Cronograma Detalhado', 20, yPosition);
        yPosition += 10;
        doc.text('3. Análise de Custos', 20, yPosition);
        yPosition += 10;
        doc.text('4. Checklist de Preparação', 20, yPosition);
        yPosition += 10;
        doc.text('5. Informações Importantes', 20, yPosition);
        yPosition += 10;
        doc.text('6. Contatos de Emergência', 20, yPosition);
        
        // ========== NOVA PÁGINA - RESUMO EXECUTIVO ==========
        doc.addPage();
        yPosition = 30;
        
        // Cabeçalho da seção
        adicionarCabecalhoSecao(doc, 'RESUMO EXECUTIVO', corPrimaria);
        
        // Calcular estatísticas
        let duracaoTotalDias = 0;
        let custoTotalValor = 0;
        let destinosComDatas = 0;
        const estados = new Set();
        const tipos = {};
        
        roteiro.forEach(destino => {
            const datas = datasDestinos[destino.id] || {};
            if (datas.inicio && datas.fim) {
                duracaoTotalDias += calcularDuracao(datas.inicio, datas.fim);
                destinosComDatas++;
            }
            custoTotalValor += destino.custo;
            estados.add(destino.estado);
            tipos[destino.tipo] = (tipos[destino.tipo] || 0) + 1;
        });
        
        // Cards de estatísticas
        adicionarCardEstatistica(doc, 20, yPosition, 'DESTINOS', roteiro.length.toString(), corPrimaria);
        adicionarCardEstatistica(doc, 75, yPosition, 'ESTADOS', estados.size.toString(), corAcento);
        adicionarCardEstatistica(doc, 130, yPosition, 'DIAS', duracaoTotalDias.toString(), [52, 152, 219]);
        yPosition += 40;
        
        // Custo total destacado
        doc.setFillColor(...corFundo);
        doc.rect(15, yPosition, 180, 25, 'F');
        doc.setTextColor(...corSecundaria);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('INVESTIMENTO TOTAL ESTIMADO', 20, yPosition + 10);
        doc.setFontSize(20);
        doc.setTextColor(...corAcento);
        doc.text(formatarDinheiro(custoTotalValor), 20, yPosition + 20);
        yPosition += 40;
        
        // Distribuição por tipo
        doc.setTextColor(...corSecundaria);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('DISTRIBUIÇÃO POR CATEGORIA:', 20, yPosition);
        yPosition += 15;
        
        Object.entries(tipos).forEach(([tipo, quantidade]) => {
            const porcentagem = ((quantidade / roteiro.length) * 100).toFixed(1);
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...corTexto);
            doc.text(`• ${tipo}: ${quantidade} destinos (${porcentagem}%)`, 25, yPosition);
            yPosition += 8;
        });
        
        // ========== NOVA PÁGINA - CRONOGRAMA DETALHADO ==========
        doc.addPage();
        yPosition = 30;
        
        adicionarCabecalhoSecao(doc, 'CRONOGRAMA DETALHADO', corPrimaria);
        
        // Timeline dos destinos
        roteiro.forEach((destino, index) => {
            if (yPosition > 240) {
                doc.addPage();
                yPosition = 20;
            }
            
            const datas = datasDestinos[destino.id] || {};
            const duracao = calcularDuracao(datas.inicio, datas.fim);
            
            // Card do destino
            doc.setFillColor(255, 255, 255);
            doc.rect(15, yPosition - 5, 180, 50, 'F');
            doc.setDrawColor(...corTexto);
            doc.setLineWidth(0.5);
            doc.rect(15, yPosition - 5, 180, 50, 'S');
            
            // Número sequencial
            doc.setFillColor(...corPrimaria);
            doc.circle(25, yPosition + 10, 8, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text(`${index + 1}`, 25, yPosition + 13, { align: 'center' });
            
            // Nome do destino
            doc.setTextColor(...corSecundaria);
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.text(destino.nome, 40, yPosition + 5);
            
            // Localização
            doc.setFontSize(10);
            doc.setTextColor(...corTexto);
            doc.text(`📍 ${destino.estado}`, 40, yPosition + 12);
            
            // Datas
            if (datas.inicio && datas.fim) {
                doc.text(`📅 ${formatarData(datas.inicio)} até ${formatarData(datas.fim)} (${duracao} dias)`, 40, yPosition + 20);
            } else {
                doc.setTextColor(...corAcento);
                doc.text('⚠️ Datas não definidas', 40, yPosition + 20);
            }
            
            // Informações adicionais
            doc.setTextColor(...corTexto);
            doc.text(`🏷️ ${destino.tipo}`, 40, yPosition + 28);
            doc.text(`⭐ ${destino.nota}/5`, 110, yPosition + 28);
            doc.text(`💰 ${formatarDinheiro(destino.custo)}`, 40, yPosition + 36);
            
            yPosition += 60;
        });
        
        // ========== NOVA PÁGINA - ANÁLISE DE CUSTOS ==========
        doc.addPage();
        yPosition = 30;
        
        adicionarCabecalhoSecao(doc, 'ANÁLISE DE CUSTOS', corAcento);
        
        // Tabela de custos
        doc.setFillColor(...corFundo);
        doc.rect(15, yPosition, 180, 15, 'F');
        doc.setTextColor(...corSecundaria);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('DESTINO', 20, yPosition + 10);
        doc.text('CATEGORIA', 80, yPosition + 10);
        doc.text('VALOR', 140, yPosition + 10);
        yPosition += 20;
        
        roteiro.forEach((destino, index) => {
            if (index % 2 === 0) {
                doc.setFillColor(250, 250, 250);
                doc.rect(15, yPosition - 5, 180, 12, 'F');
            }
            
            doc.setTextColor(...corTexto);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text(destino.nome.substring(0, 25), 20, yPosition + 3);
            doc.text(destino.tipo, 80, yPosition + 3);
            doc.text(formatarDinheiro(destino.custo), 140, yPosition + 3);
            yPosition += 12;
        });
        
        // Total
        doc.setFillColor(...corAcento);
        doc.rect(15, yPosition, 180, 15, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('TOTAL GERAL', 20, yPosition + 10);
        doc.text(formatarDinheiro(custoTotalValor), 140, yPosition + 10);
        yPosition += 30;
        
        // Dicas de economia
        doc.setTextColor(...corSecundaria);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('💡 DICAS DE ECONOMIA:', 20, yPosition);
        yPosition += 15;
        
        const dicasEconomia = [
            'Reserve com antecedência para conseguir melhores preços',
            'Compare preços em diferentes plataformas',
            'Considere viajar em períodos de baixa temporada',
            'Procure por pacotes promocionais',
            'Use aplicativos de desconto e cashback'
        ];
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...corTexto);
        dicasEconomia.forEach(dica => {
            doc.text(`• ${dica}`, 25, yPosition);
            yPosition += 8;
        });
        
        // ========== NOVA PÁGINA - CHECKLIST ==========
        doc.addPage();
        yPosition = 30;
        
        adicionarCabecalhoSecao(doc, 'CHECKLIST DE PREPARAÇÃO', [155, 89, 182]);
        
        const checklist = {
            'DOCUMENTAÇÃO': [
                '□ RG ou CNH válidos',
                '□ CPF',
                '□ Comprovante de vacinação',
                '□ Seguro viagem',
                '□ Reservas de hotéis',
                '□ Passagens (impressas e digitais)'
            ],
            'BAGAGEM': [
                '□ Roupas adequadas ao clima',
                '□ Calçados confortáveis',
                '□ Kit de higiene pessoal',
                '□ Medicamentos essenciais',
                '□ Carregadores e adaptadores',
                '□ Câmera fotográfica'
            ],
            'FINANCEIRO': [
                '□ Dinheiro em espécie',
                '□ Cartões de crédito/débito',
                '□ Avisar banco sobre viagem',
                '□ Conferir limites dos cartões'
            ],
            'TECNOLOGIA': [
                '□ Aplicativos de viagem instalados',
                '□ Mapas offline baixados',
                '□ Números de emergência salvos',
                '□ Backup de documentos na nuvem'
            ]
        };
        
        Object.entries(checklist).forEach(([categoria, itens]) => {
            if (yPosition > 220) {
                doc.addPage();
                yPosition = 20;
            }
            
            doc.setFillColor(...corFundo);
            doc.rect(15, yPosition - 5, 180, 15, 'F');
            doc.setTextColor(...corSecundaria);
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text(categoria, 20, yPosition + 5);
            yPosition += 20;
            
            itens.forEach(item => {
                doc.setFontSize(10);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(...corTexto);
                doc.text(item, 25, yPosition);
                yPosition += 8;
            });
            yPosition += 10;
        });
        
        // ========== NOVA PÁGINA - INFORMAÇÕES IMPORTANTES ==========
        doc.addPage();
        yPosition = 30;
        
        adicionarCabecalhoSecao(doc, 'INFORMAÇÕES IMPORTANTES', [230, 126, 34]);
        
        // Contatos de emergência
        doc.setTextColor(...corSecundaria);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('📞 CONTATOS DE EMERGÊNCIA:', 20, yPosition);
        yPosition += 15;
        
        const emergencias = [
            'SAMU: 192',
            'Polícia Militar: 190',
            'Bombeiros: 193',
            'Polícia Rodoviária Federal: 191',
            'Defesa Civil: 199'
        ];
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...corTexto);
        emergencias.forEach(contato => {
            doc.text(`• ${contato}`, 25, yPosition);
            yPosition += 10;
        });
        
        yPosition += 15;
        
        // Dicas finais
        doc.setTextColor(...corSecundaria);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('🎯 DICAS FINAIS PARA UMA VIAGEM PERFEITA:', 20, yPosition);
        yPosition += 15;
        
        const dicasFinais = [
            'Chegue nos aeroportos com pelo menos 2 horas de antecedência',
            'Mantenha sempre uma cópia digital de seus documentos',
            'Verifique as condições climáticas antes de sair',
            'Tenha sempre um plano B para atividades ao ar livre',
            'Respeite a cultura local e seja um viajante responsável',
            'Mantenha familiares informados sobre seu paradeiro',
            'Contrate um seguro viagem adequado ao seu destino',
            'Leve sempre um kit de primeiros socorros básico'
        ];
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...corTexto);
        dicasFinais.forEach(dica => {
            const linhas = doc.splitTextToSize(`• ${dica}`, 170);
            linhas.forEach(linha => {
                if (yPosition > 270) {
                    doc.addPage();
                    yPosition = 20;
                }
                doc.text(linha, 25, yPosition);
                yPosition += 6;
            });
            yPosition += 2;
        });
        
        // Footer em todas as páginas
        const totalPages = doc.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            if (i > 1) { // Não adicionar footer na capa
                doc.setFontSize(8);
                doc.setTextColor(...corTexto);
                doc.text(`Página ${i-1} de ${totalPages-1}`, 105, 285, { align: 'center' });
                doc.text('Gerado por Trilhando - Seu Companheiro de Viagem', 105, 290, { align: 'center' });
            }
        }
        
        // Salvar o PDF
        const nomeArquivo = `roteiro-completo-${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(nomeArquivo);
        
        showSuccess('PDF Gerado com Sucesso!', `Roteiro completo exportado como ${nomeArquivo}`);
        
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        showError('Erro na Exportação', 'Ocorreu um erro ao gerar o PDF. Tente novamente!');
    }
}

// Funções auxiliares para o PDF
function adicionarCabecalhoSecao(doc, titulo, cor) {
    doc.setFillColor(...cor);
    doc.rect(0, 0, 210, 25, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(titulo, 105, 17, { align: 'center' });
}

function adicionarCardEstatistica(doc, x, y, label, valor, cor) {
    doc.setFillColor(...cor);
    doc.rect(x, y, 45, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(valor, x + 22.5, y + 15, { align: 'center' });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(label, x + 22.5, y + 25, { align: 'center' });
}

// Event listeners
limparRoteiroBtn.addEventListener('click', limparRoteiro);
exportarPdfBtn.addEventListener('click', exportarPDF);

// Inicialização
document.addEventListener('DOMContentLoaded', renderizarRoteiro);