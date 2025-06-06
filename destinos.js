// Função para obter todos os destinos do localStorage
function getDestinos() {
    const destinosSalvos = JSON.parse(localStorage.getItem('destinos')) || [];
    
    // Garante que todos os destinos iniciais estejam marcados como padrão
    const destinosPadrao = destinosIniciais.map(d => ({...d, isDefault: true}));
    
    // Cria um Set com os IDs dos destinos padrão para verificação rápida
    const idsPadrao = new Set(destinosPadrao.map(d => d.id));
    
    // Filtra os destinos salvos para remover qualquer destino padrão que possa ter sido salvo
    const destinosPersonalizados = destinosSalvos.filter(d => !idsPadrao.has(d.id));
    
    // Combina os destinos padrão com os personalizados
    return [...destinosPadrao, ...destinosPersonalizados];
}

// Função para salvar destinos no localStorage
function salvarDestinos(destinos) {
    // Filtra apenas os destinos não padrão antes de salvar
    const idsPadrao = new Set(destinosIniciais.map(d => d.id));
    const destinosPersonalizados = destinos.filter(d => !idsPadrao.has(d.id));
    localStorage.setItem('destinos', JSON.stringify(destinosPersonalizados));
}

// Dados iniciais (serão usados apenas se não houver dados no localStorage)
const destinosIniciais = [
    {
        id: 1,
        nome: "Fernando de Noronha",
        estado: "Pernambuco",
        tipo: "Praia",
        nota: 4.9,
        custo: 5000,
        isDefault: true,
        descricao: "Arquipélago paradisíaco com 21 ilhas vulcânicas, Fernando de Noronha é um santuário ecológico marinho. Suas praias de águas cristalinas como a Baía do Sancho, eleita várias vezes a mais bonita do mundo, oferecem experiências únicas de mergulho com tartarugas, golfinhos e diversas espécies de peixes. O local é perfeito para práticas de snorkeling, surf e trilhas ecológicas. A preservação ambiental rigorosa garante uma experiência natural única.",
        imagens: [
            "https://www.umviajante.com.br/wp-content/uploads/2024/07/noronha-onde-fica-como-chegar-1-3.jpg",
            "https://jujunatrip.com/wp-content/uploads/2019/05/Fernando-de-Noronha-praiss-mais-lindas.jpg",
            "https://assets.brasildefato.com.br/2024/09/image_processing20200201-29235-1rw23t6.jpg"
        ],
        atracoes: [
            "Baía do Sancho",
            "Praia do Leão",
            "Forte dos Remédios",
            "Mergulho com golfinhos",
            "Mirante dos Golfinhos"
        ],
        melhorEpoca: "Setembro a Março",
        tempoSugerido: "5 a 7 dias"
    },
    {
        id: 2,
        nome: "Chapada Diamantina",
        estado: "Bahia",
        tipo: "Parque Nacional",
        nota: 4.8,
        custo: 2500,
        descricao: "A Chapada Diamantina é um dos destinos mais impressionantes do Brasil, com suas formações rochosas milenares, cachoeiras espetaculares e grutas misteriosas. O Parque Nacional oferece dezenas de trilhas para todos os níveis de experiência, desde caminhadas leves até trekkings desafiadores. A região é famosa pela Cachoeira da Fumaça, uma das mais altas do Brasil, e pelo Poço Azul, com suas águas azul-turquesa cristalinas.",
        imagens: [
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/10/chapada-diamantina-capa2019-02.jpg",
            "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/t8ajo0n7vf1gc4wgn0de?_a=BACADKGT",
            "https://imgmd.net/images/v1/guia/1684111/chapadadiamantina-221-c.jpg"
        ],
        atracoes: [
            "Cachoeira da Fumaça",
            "Poço Azul",
            "Morro do Pai Inácio",
            "Gruta da Pratinha",
            "Vale do Pati"
        ],
        melhorEpoca: "Abril a Outubro",
        tempoSugerido: "4 a 6 dias"
    },
    {
        id: 3,
        nome: "Lençóis Maranhenses",
        estado: "Maranhão",
        tipo: "Parque Nacional",
        nota: 4.9,
        custo: 3000,
        isDefault: true,
        descricao: "Uma paisagem surreal de dunas brancas e lagoas de água doce cristalina forma o Parque Nacional dos Lençóis Maranhenses. Este fenômeno natural único ocorre devido às chuvas que formam piscinas naturais entre as dunas. As lagoas mais famosas, como a Lagoa Azul e a Lagoa do Peixe, proporcionam momentos inesquecíveis de banho em meio ao deserto brasileiro. A região também oferece passeios de 4x4, caminhadas nas dunas e visitas a comunidades locais.",
        imagens: [
            "https://caminhosmelevem.com/wp-content/uploads/2022/10/lagoa-bonita-lencois-maranhenses-edit-21-600x331.jpg",
            "https://s2-g1.glbimg.com/Vojnl2ONiHxgxkMXirrT-qr5dno=/0x0:1273x716/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/h/v/xRS87RSqK7S5VUtEjhFw/lencois.png",
            "https://aventourbr.com/wp-content/uploads/2021/05/c788ef31c40737cf6005bdf94ddc547c-1.jpg"
        ],
        atracoes: [
            "Lagoa Azul",
            "Lagoa do Peixe",
            "Lagoa Bonita",
            "Rio Preguiças",
            "Pequenos Lençóis"
        ],
        melhorEpoca: "Julho a Setembro",
        tempoSugerido: "3 a 5 dias"
    },
    {
        id: 4,
        nome: "Bonito",
        estado: "Mato Grosso do Sul",
        tipo: "Ecoturismo",
        nota: 4.8,
        custo: 2800,
        isDefault: true,
        descricao: "Bonito é um verdadeiro paraíso do ecoturismo, conhecido mundialmente por suas águas cristalinas e rica biodiversidade. A região oferece experiências únicas como flutuação em rios de águas transparentes, mergulho em cavernas inundadas, e observação de uma fauna diversificada. O Abismo Anhumas e a Gruta do Lago Azul são algumas das atrações mais impressionantes, além dos diversos rios com águas tão claras que permitem observar cardumes coloridos sem precisar mergulhar.",
        imagens: [
            "https://viajantes.net/uploads/default/original/2X/6/657feeaa614b40bd32804e8248a802990c03760b.webp",
            "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/10/Bonito-MS-O-que-Fazer-Capa.jpg",
            "https://edb931018340aeb3dd4b37a7e6ef7c9a.cdn.bubble.io/f1721249061607x797773909677701500/Qual%20%C3%A9%20o%20passeio%20mais%20barato%20de%20Bonito%20MS.jpg"
        ],
        atracoes: [
            "Gruta do Lago Azul",
            "Rio da Prata",
            "Abismo Anhumas",
            "Aquário Natural",
            "Boca da Onça"
        ],
        melhorEpoca: "Abril a Outubro",
        tempoSugerido: "4 a 6 dias"
    },
    {
        id: 5,
        nome: "Alter do Chão",
        estado: "Pará",
        tipo: "Praia",
        nota: 4.7,
        custo: 2000,
        isDefault: true,
        descricao: "Conhecida como o 'Caribe da Amazônia', Alter do Chão é um destino único que combina praias de água doce com a exuberância da floresta amazônica. Durante a seca, formam-se praias de areia branca às margens do Rio Tapajós, como a famosa Ilha do Amor. O local oferece experiências autênticas como passeios de barco, visitas a comunidades ribeirinhas, trilhas na floresta e pôr do sol inesquecível sobre as águas cristalinas do rio.",
        imagens: [
            "https://s2-g1.glbimg.com/vv-1jalZE7UXEE_KE9udFtwH59k=/0x0:1920x1080/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2016/11/05/vcg-051116-01.jpg",
            "https://santarem.pa.gov.br/storage/posts/September2021/capa-hnLpB9.jpg",
            "https://ateondeeupuderir.com/wp-content/uploads/2022/08/o-que-fazer-em-alter-do-chao-para-820x394.jpg"
        ],
        atracoes: [
            "Ilha do Amor",
            "Serra do Piroca",
            "Floresta Nacional do Tapajós",
            "Lago Verde",
            "Comunidades Ribeirinhas"
        ],
        melhorEpoca: "Julho a Janeiro",
        tempoSugerido: "3 a 5 dias"
    },
    {
        id: 6,
        nome: "Jalapão",
        estado: "Tocantins",
        tipo: "Aventura",
        nota: 4.8,
        custo: 2600,
        descricao: "O Jalapão é um verdadeiro paraíso para os amantes de aventura e natureza intocada. A região impressiona com suas dunas alaranjadas, cachoeiras cristalinas e fervedouros - nascentes que brotam da terra com tanta força que impedem que as pessoas afundem. As paisagens são de tirar o fôlego, com cerrado preservado e formações rochosas únicas. É possível praticar diversos esportes de aventura, como off-road, rafting e trekking.",
        imagens: [
            "https://blog.coris.com.br/wp-content/uploads/2022/08/582_shutterstock_13479258711-1.jpg",
            "https://blog.assistentedeviagem.com.br/wp-content/uploads/2023/12/jalapao_-onde-fica-como-chegar-o-que-conhecer-e-mais-2.jpg",
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2017/06/jalapao-o-que-e.jpg"
        ],
        atracoes: [
            "Dunas do Jalapão",
            "Fervedouros",
            "Cachoeira da Velha",
            "Serra do Espírito Santo",
            "Comunidades Quilombolas"
        ],
        melhorEpoca: "Maio a Setembro",
        tempoSugerido: "4 a 6 dias"
    },
    {
        "id": 7,
        "nome": "Gramado",
        "estado": "Rio Grande do Sul",
        "tipo": "Cidade",
        "nota": 4.8,
        "custo": 9000,
        "descricao": "Charmosa cidade serrana, famosa pelo Natal Luz, chocolates artesanais e arquitetura europeia.",
        "imagens": [
          "https://t4.ftcdn.net/jpg/02/60/74/35/360_F_260743579_slECtVXLtdgCBZc9uuLYI7Bi8z1l4kln.jpg",
          "https://minimundo.com.br/wp-content/uploads/2024/07/Gramado-1024x774.jpg",
          "https://portalgramado.s3.sa-east-1.amazonaws.com/the-city/HmH89c7ExHEgSz6ZAh7lXOSHFW9Co5bSBjYtZXR7.png"
        ],
        "atracoes": [
          "Lago Negro",
          "Rua Coberta",
          "Mini Mundo",
          "Semana de Natal",
          "Parque do Caracol"
        ],
        "melhorEpoca": "Novembro a Janeiro",
        "tempoSugerido": "3 a 4 dias"
      },
      {
        "id": 8,
        "nome": "Praia de Bertioga",
        "estado": "São Paulo",
        "tipo": "Praia",
        "nota": 4.4,
        "custo": 6000,
        "descricao": "Bertioga, situada no litoral norte de São Paulo, oferece praias calmas e infraestrutura acolhedora. A Praia da Enseada é perfeita para famílias, com águas tranquilas e quiosques ao longo do calçadão. A cidade também possui trilhas, fortalezas históricas e boa gastronomia praiana.",
        "imagens": [
          "https://t4.ftcdn.net/jpg/05/08/66/09/360_F_508660948_f4Z5wK56y9Cw5vwi2e4ubvaZUaSaW5Lg.jpg",
          "https://naturam.com.br/wp-content/uploads/2017/05/riviera-de-sao-lourenco-naturam-destacada.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWLpcn3rOF1DOG40mLmOLIZJWKQZT9Xo-kg&s"
        ],
        "atracoes": [
          "Praia da Enseada",
          "Forte São João",
          "Ilha de Santo Amaro",
          "Trilha do Morro do Elefante",
          "Feira de Artesanato"
        ],
        "melhorEpoca": "Outubro a Março",
        "tempoSugerido": "2 a 3 dias"
      },
      {
        "id": 9,
        "nome": "Florianópolis",
        "estado": "Santa Catarina",
        "tipo": "Praia & Ilha",
        "nota": 4.8,
        "custo": 2500,
        "descricao": "Capital de Santa Catarina, Florianópolis é conhecida como Ilha da Magia. Combina praias deslumbrantes, lagoas, dunas e centro histórico vibrante. Destacam-se locais como a Joaquina, Mole e Campeche, além de trilhas com mirantes espetaculares.",
        "imagens": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpY4xrce-sDLgy_nppmg-RRxR870W8xrSdqQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaxINyZZ5c-GLlNrU787MrAPaJsT2k34SMw&s",
          "https://images.squarespace-cdn.com/content/v1/587b4908cd0f68a2e5d09056/24864fca-c4de-4756-ad71-5e2987d66cc5/465050994_8534205303336034_8607894362045400024_n.jpg"
        ],
        "atracoes": [
          "Praia da Joaquina",
          "Praia Mole",
          "Praia do Campeche",
          "Lagoa da Conceição",
          "Ribeirão da Ilha"
        ],
        "melhorEpoca": "Outubro a Abril",
        "tempoSugerido": "4 a 6 dias"
      },
      {
        "id": 10,
        "nome": "Curitiba",
        "estado": "Paraná",
        "tipo": "Cidade",
        "nota": 4.5,
        "custo": 1800,
        "descricao": "Conhecida por seus parques, qualidade de vida e planejamento urbano, Curitiba oferece atrações como o Jardim Botânico, o Museu Oscar Niemeyer e o tradicional passeio de trem pela Serra do Mar.",
        "imagens": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJYnr--WfWJM2bg20z7wBtP2rhWiVSxvXA-A&s",
          "https://www.aen.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2022-11/externa_mon-4706.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpC_tfjnoAvKKFClHXaHLJgEXF2xY2AzCzuA&s"
        ],
        "atracoes": [
          "Jardim Botânico",
          "Museu Oscar Niemeyer",
          "Opera de Arame",
          "Passeio de trem pela Serra do Mar",
          "Feira do Largo da Ordem"
        ],
        "melhorEpoca": "Setembro a Dezembro",
        "tempoSugerido": "2 a 4 dias"
      }
      
      
];

// Elementos do DOM
const buscaInput = document.getElementById('busca');
const estadoSelect = document.getElementById('filtro-estado');
const tiposContainer = document.querySelector('.checkbox-grupo');
const precoMaximo = document.getElementById('preco-maximo');
const precoValor = document.getElementById('preco-valor');
const starsFilter = document.querySelector('.stars-filter');
const notaMinima = document.getElementById('nota-minima');
const ordenarPor = document.getElementById('ordenar-por');
const totalDestinos = document.getElementById('total-destinos');
const cardsGrid = document.querySelector('.cards-grid');
const limparFiltrosBtn = document.getElementById('limpar-filtros');
const adicionarDestinoBtn = document.getElementById('adicionar-destino');
const modalContainer = document.getElementById('modal-container');

// Função para criar estrelas baseada na nota
function criarEstrelas(nota) {
    const estrelaCheia = '<i class="fas fa-star"></i>';
    const estrelaMetade = '<i class="fas fa-star-half-alt"></i>';
    const estrelaVazia = '<i class="far fa-star"></i>';
    
    let estrelas = '';
    const notaInteira = Math.floor(nota);
    const temMetade = nota % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= notaInteira) {
            estrelas += estrelaCheia;
        } else if (i === notaInteira + 1 && temMetade) {
            estrelas += estrelaMetade;
        } else {
            estrelas += estrelaVazia;
        }
    }
    
    return estrelas;
}

// Função para excluir um destino
function excluirDestino(id) {
    const destinos = getDestinos();
    const destino = destinos.find(d => d.id === id);
    
    if (!destino) return;
    
    // Verifica se é um destino padrão (incluindo verificação por ID)
    if (destino.isDefault || destinosIniciais.some(d => d.id === id)) {
        showError('Operação não permitida', 'Não é possível excluir destinos padrão do sistema.');
        return;
    }
    
    if (confirm(`Tem certeza que deseja excluir o destino "${destino.nome}"?`)) {
        const novosDestinos = destinos.filter(d => d.id !== id);
        salvarDestinos(novosDestinos);
        filtrarDestinos(); // Atualizar a lista
        showSuccess('Destino Excluído', `O destino "${destino.nome}" foi excluído com sucesso.`);
    }
}

// Função para criar um card de destino
function criarCardDestino(destino) {
    // Verifica se o destino é padrão (incluindo verificação por ID)
    const isPadrao = destino.isDefault || destinosIniciais.some(d => d.id === destino.id);

    return `
        <div class="card" data-id="${destino.id}" onclick="abrirDetalhesDestino(${destino.id})">
            <img src="${destino.imagens[0]}" alt="${destino.nome}">
            <div class="card-content">
                <h3>${destino.nome}</h3>
                <div class="card-info">
                    <span><i class="fas fa-map-marker-alt"></i> ${destino.estado}</span>
                    <span class="card-tipo"><i class="fas fa-tag"></i> ${destino.tipo}</span>
                </div>
                <div class="card-details">
                    <span><i class="far fa-clock"></i> ${destino.tempoSugerido}</span>
                    <span><i class="fas fa-sun"></i> ${destino.melhorEpoca}</span>
                </div>
                <div class="card-nota">
                    ${criarEstrelas(destino.nota)}
                    <span>(${destino.nota})</span>
                </div>
                <div class="card-price">
                    <span><i class="fas fa-money-bill-wave"></i> A partir de R$ ${destino.custo.toLocaleString()}</span>
                </div>
                <div class="card-actions" onclick="event.stopPropagation()">
                    <button class="btn-adicionar" onclick="adicionarAoRoteiro(${destino.id})">
                        <i class="fas fa-plus"></i> Adicionar ao Roteiro
                    </button>
                    ${!isPadrao ? `
                        <button class="btn-excluir" onclick="excluirDestino(${destino.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Função para adicionar destino ao roteiro
function adicionarAoRoteiro(id) {
    let roteiro = JSON.parse(localStorage.getItem('roteiro')) || [];
    const destinos = getDestinos();
    const destino = destinos.find(d => d.id === id);
    
    if (!roteiro.some(d => d.id === id)) {
        roteiro.push(destino);
        localStorage.setItem('roteiro', JSON.stringify(roteiro));
        showSuccess('Destino Adicionado', `${destino.nome} foi adicionado ao seu roteiro!`);
    } else {
        showWarning('Destino já Adicionado', `${destino.nome} já está no seu roteiro!`);
    }
}

// Função para popular o select de estados
function popularEstados() {
    const destinos = getDestinos();
    const estados = [...new Set(destinos.map(d => d.estado))].sort();
    estados.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado;
        option.textContent = estado;
        estadoSelect.appendChild(option);
    });
}

// Função para popular os checkboxes de tipos
function popularTipos() {
    const destinos = getDestinos();
    const tipos = [...new Set(destinos.map(d => d.tipo))].sort();
    tipos.forEach(tipo => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="checkbox" value="${tipo}">
            ${tipo}
        `;
        tiposContainer.appendChild(label);
    });
}

// Função para filtrar destinos
function filtrarDestinos() {
    const destinos = getDestinos();
    console.log('Destinos carregados:', destinos); // Debug

    const busca = buscaInput.value.toLowerCase();
    const estadoSelecionado = estadoSelect.value;
    const tiposSelecionados = Array.from(tiposContainer.querySelectorAll('input:checked')).map(cb => cb.value);
    const precoMax = parseInt(precoMaximo.value);
    const nota = parseFloat(notaMinima.value);
    const ordem = ordenarPor.value;

    const destinosFiltrados = destinos.filter(destino => {
        const passaBusca = destino.nome.toLowerCase().includes(busca) || 
                          destino.estado.toLowerCase().includes(busca) ||
                          destino.descricao.toLowerCase().includes(busca);
        const passaEstado = !estadoSelecionado || destino.estado === estadoSelecionado;
        const passaTipo = tiposSelecionados.length === 0 || tiposSelecionados.includes(destino.tipo);
        const passaPreco = !precoMax || destino.custo <= precoMax;
        const passaNota = !nota || destino.nota >= nota;

        return passaBusca && passaEstado && passaTipo && passaPreco && passaNota;
    });

    console.log('Destinos filtrados:', destinosFiltrados); // Debug

    // Ordenação
    destinosFiltrados.sort((a, b) => {
        switch (ordem) {
            case 'nome':
                return a.nome.localeCompare(b.nome);
            case 'nome-desc':
                return b.nome.localeCompare(a.nome);
            case 'nota':
                return a.nota - b.nota;
            case 'nota-desc':
                return b.nota - a.nota;
            case 'preco':
                return a.custo - b.custo;
            case 'preco-desc':
                return b.custo - a.custo;
            default:
                return 0;
        }
    });

    renderizarDestinos(destinosFiltrados);
}

// Função para renderizar destinos
function renderizarDestinos(destinos) {
    console.log('Renderizando destinos:', destinos); // Debug
    
    if (!cardsGrid) {
        console.error('Elemento cardsGrid não encontrado!');
        return;
    }

    if (destinos.length === 0) {
        cardsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Nenhum destino encontrado</h3>
                <p>Tente ajustar os filtros ou adicione um novo destino.</p>
            </div>
        `;
    } else {
        cardsGrid.innerHTML = destinos.map(destino => criarCardDestino(destino)).join('');
    }

    if (totalDestinos) {
        totalDestinos.textContent = `${destinos.length} destinos encontrados`;
    }
}

// Função para limpar filtros
function limparFiltros() {
    buscaInput.value = '';
    estadoSelect.value = '';
    tiposContainer.querySelectorAll('input').forEach(cb => cb.checked = false);
    precoMaximo.value = 10000;
    precoValor.textContent = 'R$ 10.000';
    notaMinima.value = '0';
    starsFilter.querySelectorAll('i').forEach(star => star.className = 'far fa-star');
    ordenarPor.value = 'nome';
    filtrarDestinos();
}

// Event listeners
buscaInput.addEventListener('input', filtrarDestinos);
estadoSelect.addEventListener('change', filtrarDestinos);
tiposContainer.addEventListener('change', filtrarDestinos);
precoMaximo.addEventListener('input', (e) => {
    precoValor.textContent = `R$ ${parseInt(e.target.value).toLocaleString()}`;
    filtrarDestinos();
});
ordenarPor.addEventListener('change', filtrarDestinos);
limparFiltrosBtn.addEventListener('click', limparFiltros);

adicionarDestinoBtn.addEventListener('click', () => {
    window.location.href = 'adicionar-destino.html';
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada, inicializando...'); // Debug
    
    // Limpar e reinicializar os dados se necessário
    const destinos = getDestinos();
    const idsPadrao = new Set(destinosIniciais.map(d => d.id));
    const temDestinosDuplicados = destinos.filter(d => idsPadrao.has(d.id)).length > destinosIniciais.length;
    
    if (temDestinosDuplicados) {
        console.log('Detectados destinos duplicados, reinicializando dados...'); // Debug
        localStorage.removeItem('destinos');
        location.reload();
        return;
    }
    
    console.log('Destinos iniciais:', destinos); // Debug

    // Carregar valores máximos/mínimos
    if (precoMaximo) {
        const maxPreco = Math.max(...destinos.map(d => d.custo));
        precoMaximo.max = maxPreco;
        precoMaximo.value = maxPreco;
        if (precoValor) precoValor.textContent = maxPreco;
    }

    // Inicializar filtros
    if (estadoSelect) {
        const estados = [...new Set(destinos.map(d => d.estado))].sort();
        estados.forEach(estado => {
            const option = document.createElement('option');
            option.value = estado;
            option.textContent = estado;
            estadoSelect.appendChild(option);
        });
    }

    if (tiposContainer) {
        const tipos = [...new Set(destinos.map(d => d.tipo))].sort();
        tiposContainer.innerHTML = tipos.map(tipo => `
            <label class="checkbox-item">
                <input type="checkbox" value="${tipo}">
                <span>${tipo}</span>
            </label>
        `).join('');
    }

    // Adicionar event listeners
    if (buscaInput) buscaInput.addEventListener('input', filtrarDestinos);
    if (estadoSelect) estadoSelect.addEventListener('change', filtrarDestinos);
    if (tiposContainer) {
        tiposContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', filtrarDestinos);
        });
    }
    if (precoMaximo) precoMaximo.addEventListener('input', filtrarDestinos);
    if (notaMinima) notaMinima.addEventListener('input', filtrarDestinos);
    if (ordenarPor) ordenarPor.addEventListener('change', filtrarDestinos);
    if (limparFiltrosBtn) limparFiltrosBtn.addEventListener('click', limparFiltros);
    if (adicionarDestinoBtn) {
        adicionarDestinoBtn.addEventListener('click', () => {
            window.location.href = 'adicionar-destino.html';
        });
    }

    // Carregar destinos iniciais
    filtrarDestinos();
});

// Variáveis para o carrossel
let slideAtual = 0;
let slides = null;

// Função para inicializar o carrossel
function inicializarCarrossel() {
    slideAtual = 0;
    slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        atualizarCarrossel();
        atualizarIndicadores();
        
        // Adicionar event listeners para as teclas de seta
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                moverCarrossel(-1);
            } else if (e.key === 'ArrowRight') {
                moverCarrossel(1);
            }
        });
    }
}

// Função para mover o carrossel
function moverCarrossel(direcao) {
    if (!slides || slides.length === 0) return;
    
    const totalSlides = slides.length;
    slideAtual = (slideAtual + direcao + totalSlides) % totalSlides;
    atualizarCarrossel();
    atualizarIndicadores();
}

// Função para atualizar a posição do carrossel
function atualizarCarrossel() {
    const container = document.querySelector('.carousel-container');
    if (container && slides) {
        container.style.transform = `translateX(-${slideAtual * 100}%)`;
    }
}

// Função para ir para um slide específico
function irParaSlide(index) {
    if (!slides || slides.length === 0) return;
    
    slideAtual = index;
    atualizarCarrossel();
    atualizarIndicadores();
}

// Função para atualizar os indicadores do carrossel
function atualizarIndicadores() {
    const indicadores = document.querySelectorAll('.carousel-indicators .indicator');
    indicadores.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === slideAtual);
    });
}

// Função para fechar o modal
function fecharModal(elemento) {
    if (!elemento) return;
    elemento.remove();
    
    // Remover event listeners quando o modal é fechado
    document.removeEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            moverCarrossel(-1);
        } else if (e.key === 'ArrowRight') {
            moverCarrossel(1);
        }
    });
}

// Função para salvar as datas de um destino específico
function salvarDataDestino(id) {
    const dataInicio = document.getElementById(`data-inicio-${id}`).value;
    const dataFim = document.getElementById(`data-fim-${id}`).value;
    
    let datasDestinos = JSON.parse(localStorage.getItem('datas_destinos')) || {};
    datasDestinos[id] = { inicio: dataInicio, fim: dataFim };
    localStorage.setItem('datas_destinos', JSON.stringify(datasDestinos));
}

// Função para carregar as datas de um destino específico
function carregarDatasDestino(id) {
    const datasDestinos = JSON.parse(localStorage.getItem('datas_destinos')) || {};
    const datas = datasDestinos[id] || {};
    
    if (datas.inicio) document.getElementById(`data-inicio-${id}`).value = datas.inicio;
    if (datas.fim) document.getElementById(`data-fim-${id}`).value = datas.fim;
}

// Filtro de estrelas
starsFilter.querySelectorAll('i').forEach(star => {
    star.addEventListener('click', () => {
        const valor = parseInt(star.dataset.valor);
        notaMinima.value = valor;
        
        starsFilter.querySelectorAll('i').forEach(s => {
            const sValor = parseInt(s.dataset.valor);
            s.className = sValor <= valor ? 'fas fa-star' : 'far fa-star';
        });
        
        filtrarDestinos();
    });

    star.addEventListener('mouseover', () => {
        const valor = parseInt(star.dataset.valor);
        starsFilter.querySelectorAll('i').forEach(s => {
            const sValor = parseInt(s.dataset.valor);
            s.className = sValor <= valor ? 'fas fa-star' : 'far fa-star';
        });
    });

    star.addEventListener('mouseout', () => {
        const valorAtual = parseInt(notaMinima.value);
        starsFilter.querySelectorAll('i').forEach(s => {
            const sValor = parseInt(s.dataset.valor);
            s.className = sValor <= valorAtual ? 'fas fa-star' : 'far fa-star';
        });
    });
});

// Função para salvar datas
function salvarDatas(event, id) {
    event.preventDefault();

    const dataInicio = document.getElementById('data-inicio').value;
    const dataFim = document.getElementById('data-fim').value;

    if (new Date(dataFim) < new Date(dataInicio)) {
        showError('Erro nas Datas', 'A data de fim não pode ser anterior à data de início!');
        return;
    }

    const datasDestinos = getDatasDestinos();
    datasDestinos[id] = { inicio: dataInicio, fim: dataFim };
    salvarDatasDestinos(datasDestinos);

    fecharModal();
    showSuccess('Datas Salvas', 'As datas foram salvas com sucesso!');
    renderizarRoteiro();
}

// Função para abrir o modal com detalhes do destino
function abrirDetalhesDestino(id) {
    const destino = getDestinos().find(d => d.id === id);
    if (!destino) return;

    // Verifica se o destino é padrão (incluindo verificação por ID)
    const isPadrao = destino.isDefault || destinosIniciais.some(d => d.id === destino.id);

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${destino.nome}</h2>
                <div class="modal-actions">
                    <button class="btn-exportar" onclick="exportarPDF(${id})">
                        <i class="fas fa-file-pdf"></i> Exportar PDF
                    </button>
                    <button class="modal-close" onclick="fecharModal(this.closest('.modal'))">&times;</button>
                </div>
            </div>
            <div class="modal-body">
                <div class="destino-carousel">
                    <div class="carousel-container">
                        ${destino.imagens.map((img, index) => `
                            <div class="carousel-slide">
                                <img src="${img}" alt="${destino.nome} - Imagem ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                    ${destino.imagens.length > 1 ? `
                        <button class="carousel-btn prev" onclick="moverCarrossel(-1)">❮</button>
                        <button class="carousel-btn next" onclick="moverCarrossel(1)">❯</button>
                        <div class="carousel-indicators">
                            ${destino.imagens.map((_, index) => `
                                <button class="indicator${index === 0 ? ' active' : ''}" onclick="irParaSlide(${index})"></button>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                
                <div class="destino-info">
                    <div class="info-header">
                        <div class="info-principal">
                            <span class="destino-local">
                                <i class="fas fa-map-marker-alt"></i> ${destino.estado}
                            </span>
                            <span class="destino-tipo">
                                <i class="fas fa-tag"></i> ${destino.tipo}
                            </span>
                            <div class="destino-nota">
                                ${criarEstrelas(destino.nota)}
                                <span>(${destino.nota})</span>
                            </div>
                        </div>
                        <div class="info-custo">
                            <i class="fas fa-money-bill-wave"></i>
                            <span>A partir de R$ ${destino.custo.toLocaleString()}</span>
                        </div>
                    </div>

                    <div class="info-detalhes">
                        <div class="info-item">
                            <i class="far fa-clock"></i>
                            <span>Tempo Sugerido: ${destino.tempoSugerido}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-sun"></i>
                            <span>Melhor Época: ${destino.melhorEpoca}</span>
                        </div>
                    </div>

                    <div class="destino-descricao">
                        <h3>Sobre o Destino</h3>
                        <p>${destino.descricao}</p>
                    </div>

                    <div class="destino-atracoes">
                        <h3>Principais Atrações</h3>
                        <ul>
                            ${destino.atracoes.map(atracao => `
                                <li><i class="fas fa-check"></i> ${atracao}</li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="destino-acoes">
                        <button class="btn-adicionar" onclick="adicionarAoRoteiro(${destino.id})">
                            <i class="fas fa-plus"></i> Adicionar ao Roteiro
                        </button>
                        ${!isPadrao ? `
                            <button class="btn-excluir" onclick="excluirDestino(${destino.id}); fecharModal(this.closest('.modal'))">
                                <i class="fas fa-trash"></i> Excluir Destino
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;

    modalContainer.innerHTML = '';
    modalContainer.appendChild(modal);
    inicializarCarrossel();
}

// Função para exportar destino como PDF
async function exportarPDF(id) {
    try {
        const destino = getDestinos().find(d => d.id === id);
        if (!destino) {
            throw new Error('Destino não encontrado');
        }

        // Criar elemento temporário para o PDF
        const tempElement = document.createElement('div');
        tempElement.className = 'pdf-container';
        tempElement.style.width = '595px'; // Largura A4
        tempElement.style.padding = '40px';
        tempElement.style.backgroundColor = 'white';
        tempElement.innerHTML = `
            <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #333;">
                <h1 style="font-size: 24px; color: #333; margin-bottom: 10px;">${destino.nome}</h1>
                <p style="color: #666;">${destino.estado} - ${destino.tipo}</p>
            </div>
            
            <div style="margin-bottom: 30px;">
                <img src="${destino.imagens[0]}" alt="${destino.nome}" style="width: 100%; max-height: 300px; object-fit: cover;">
            </div>
            
            <div style="margin-bottom: 20px;">
                <h2 style="color: #2c3e50; font-size: 18px; margin-bottom: 10px;">Informações Gerais</h2>
                <p style="margin: 5px 0;"><strong>Avaliação:</strong> ${destino.nota}/5</p>
                <p style="margin: 5px 0;"><strong>Custo Estimado:</strong> R$ ${destino.custo.toLocaleString()}</p>
                <p style="margin: 5px 0;"><strong>Melhor Época:</strong> ${destino.melhorEpoca}</p>
                <p style="margin: 5px 0;"><strong>Tempo Sugerido:</strong> ${destino.tempoSugerido}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h2 style="color: #2c3e50; font-size: 18px; margin-bottom: 10px;">Sobre o Destino</h2>
                <p style="text-align: justify; line-height: 1.5;">${destino.descricao}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h2 style="color: #2c3e50; font-size: 18px; margin-bottom: 10px;">Principais Atrações</h2>
                <ul style="list-style-type: none; padding: 0;">
                    ${destino.atracoes.map(atracao => `
                        <li style="margin: 5px 0; padding-left: 20px; position: relative;">
                            • ${atracao}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-size: 12px; color: #666;">
                <p>Gerado por Trilhando - www.trilhando.com.br</p>
                <p>Data: ${new Date().toLocaleDateString()}</p>
            </div>
        `;

        document.body.appendChild(tempElement);

        try {
            // Gerar PDF
            const pdf = new window.jspdf.jsPDF();
            
            // Configurar fonte
            pdf.setFont('helvetica');
            
            // Capturar o elemento como imagem
            const canvas = await html2canvas(tempElement, {
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true,
                backgroundColor: '#ffffff'
            });

            // Adicionar a imagem ao PDF
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 0;

            pdf.addImage(imgData, 'JPEG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);

            // Salvar o PDF
            const fileName = `${destino.nome.toLowerCase().replace(/[^a-z0-9]/g, '-')}.pdf`;
            pdf.save(fileName);
            
            showSuccess('PDF Gerado', 'O PDF foi gerado com sucesso!');
        } finally {
            // Remover elemento temporário
            document.body.removeChild(tempElement);
        }
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        showError('Erro', 'Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.');
    }
} 