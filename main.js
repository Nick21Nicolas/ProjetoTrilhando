// Dados completos dos destinos (mesmos do destinos.js)
const destinosIniciais = [
    {
        id: 1,
        nome: "Fernando de Noronha",
        estado: "Pernambuco",
        tipo: "Praia",
        nota: 4.9,
        custo: 5000,
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

// Função para obter todos os destinos
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
    localStorage.setItem('destinos', JSON.stringify(destinos));
}

// Função para criar estrelas baseado na nota
function criarEstrelas(nota) {
    const estrelaCheia = '<i class="fas fa-star"></i>';
    const estrelaMeia = '<i class="fas fa-star-half-alt"></i>';
    const estrelaVazia = '<i class="far fa-star"></i>';
    
    const estrelasInteiras = Math.floor(nota);
    const temMeia = nota % 1 >= 0.5;
    const totalEstrelas = 5;
    
    let estrelas = '';
    
    for (let i = 0; i < estrelasInteiras; i++) {
        estrelas += estrelaCheia;
    }
    
    if (temMeia) {
        estrelas += estrelaMeia;
    }
    
    const estrelasVazias = totalEstrelas - Math.ceil(nota);
    for (let i = 0; i < estrelasVazias; i++) {
        estrelas += estrelaVazia;
    }
    
    return estrelas;
}

// Função para criar um card de destino
function criarCardDestino(destino) {
    return `
        <div class="card" onclick="window.location.href='destinos.html'">
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
            </div>
        </div>
    `;
}

// Função para adicionar destino ao roteiro
function adicionarAoRoteiro(id) {
    let roteiro = JSON.parse(localStorage.getItem('roteiro')) || [];
    const destinos = getDestinos();
    const destino = destinos.find(d => d.id === id);
    
    if (!destino) {
        showError('Erro', 'Destino não encontrado!');
        return;
    }
    
    if (!roteiro.some(d => d.id === id)) {
        roteiro.push(destino);
        localStorage.setItem('roteiro', JSON.stringify(roteiro));
        showSuccess('Destino Adicionado', `${destino.nome} foi adicionado ao seu roteiro!`);
    } else {
        showWarning('Destino já Adicionado', `${destino.nome} já está no seu roteiro!`);
    }
}

// Carregar os cards de destinos em destaque
function carregarDestinosDestaque() {
    const container = document.querySelector('.cards-container');
    if (container) {
        const destinos = getDestinos();
        // Pegar os 3 destinos com as melhores notas
        const destinosDestaque = destinos
            .sort((a, b) => b.nota - a.nota)
            .slice(0, 3);

        // Adicionar animação AOS aos cards
        container.innerHTML = `
            <div class="cards-grid" data-aos="fade-up" data-aos-delay="200">
                ${destinosDestaque.map(destino => criarCardDestino(destino)).join('')}
            </div>
        `;
    }
}

// Inicializar os destinos no localStorage se não existirem
function inicializarDestinos() {
    if (!localStorage.getItem('destinos')) {
        salvarDestinos(destinosIniciais);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    inicializarDestinos();
    carregarDestinosDestaque();
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');
    const body = document.body;

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (menu.classList.contains('active') && 
                !menu.contains(event.target) && 
                !menuToggle.contains(event.target)) {
                toggleMenu();
            }
        });

        // Close menu when clicking on a link
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (menu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 768 && menu.classList.contains('active')) {
                    toggleMenu();
                }
            }, 250);
        });

        // Handle escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && menu.classList.contains('active')) {
                toggleMenu();
            }
        });

        // Prevent body scroll when menu is open
        menu.addEventListener('touchmove', function(event) {
            if (menu.classList.contains('active')) {
                event.preventDefault();
            }
        }, { passive: false });
    }
});