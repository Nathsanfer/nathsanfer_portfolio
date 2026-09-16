import ImageEpi from "../assets/images_cards/epis.png";
import ImageBlog from "../assets/images_cards/blog.png";
import ImageEnergia from "../assets/images_cards/energia.jpg";
import ImageEpi2 from "../assets/images_cards/epis2.png";
import ImageReceitas from "../assets/images_cards/receitas.png";
import ImagePedidos from "../assets/images_cards/pedidos.png";
import ImageCantina from "../assets/images_cards/cantina.png";
import ImageTurismo from "../assets/images_cards/turismo.png";
import ImagePedidosApi from "../assets/images_cards/api_pedidos.png";
import ImageReceitasApi from "../assets/images_cards/api_receitas.png";
import ImageTurismoApi from "../assets/images_cards/api_turismo.png";
import ImageToDo from "../assets/images_cards/todo.png";

import ImageEpiProject1 from "../assets/images_projects/epi4.png";
import ImageEpiProject2 from "../assets/images_projects/epi2.png";
import ImageEpiProject3 from "../assets/images_projects/epi3.png";
import ImageEpiProject4 from "../assets/images_projects/epi1.png";
import ImageBlogProject1 from "../assets/images_projects/blog1.png";
import ImageBlogProject2 from "../assets/images_projects/blog2.png";
import ImageBlogProject3 from "../assets/images_projects/blog3.png";
import ImageBlogProject4 from "../assets/images_projects/blog4.png";
import ImageEpiProject01 from "../assets/images_projects/epi04.png";
import ImageEpiProject02 from "../assets/images_projects/epi02.png";
import ImageEpiProject03 from "../assets/images_projects/epi03.png";
import ImageEpiProject04 from "../assets/images_projects/epi01.png";
import ImageReceitasProject1 from "../assets/images_projects/receita1.png";
import ImageReceitasProject2 from "../assets/images_projects/receita2.png";
import ImageReceitasProject3 from "../assets/images_projects/receita3.png";
import ImageReceitasProject4 from "../assets/images_projects/receita4.png";
import ImageEnergiaProject1 from "../assets/images_projects/energia1.png";
import ImageEnergiaProject2 from "../assets/images_projects/energia2.png";
import ImageEnergiaProject3 from "../assets/images_projects/energia3.png";
import ImageEnergiaProject4 from "../assets/images_projects/energia4.png";
import ImagePedidosProject1 from "../assets/images_projects/pedido1.png";
import ImagePedidosProject2 from "../assets/images_projects/pedido2.png";
import ImagePedidosProject3 from "../assets/images_projects/pedido3.png";
import ImagePedidosProject4 from "../assets/images_projects/pedido4.png";
import ImageTurismoProject1 from "../assets/images_projects/turismo1.png";
import ImageTurismoProject2 from "../assets/images_projects/turismo2.png";
import ImageTurismoProject3 from "../assets/images_projects/turismo3.png";
import ImageTurismoProject4 from "../assets/images_projects/turismo4.png";
import ImageCantinaProject1 from "../assets/images_projects/cantina1.png";
import ImageCantinaProject2 from "../assets/images_projects/cantina2.png";
import ImageCantinaProject3 from "../assets/images_projects/cantina3.png";
import ImageCantinaProject4 from "../assets/images_projects/cantina4.png";
import ImageToDoProject1 from "../assets/images_projects/todo1.png";
import ImageToDoProject2 from "../assets/images_projects/todo2.png";

export const projects = [
  {
    number: "01",
    type: "SISTEMA WEB",
    name: "Sistema de Gestão de EPI - 1",
    subtitle: "EPI Manager",
    description:
      "Sistema desenvolvido para digitalizar o controle de equipamentos de proteção individual, facilitando a gestão de estoque, movimentações, usuários e relatórios.",
    problem:
      "A gestão de EPIs era realizada por meio de planilhas e registros em papel, dificultando o acompanhamento do estoque, a rastreabilidade das entregas e devoluções e o controle da validade dos equipamentos.",
    solution:
      "Uma plataforma centralizada que permite cadastrar equipamentos, acompanhar o estoque, registrar entregas e devoluções, gerenciar usuários e receptores, identificar alertas de estoque e validade e gerar relatórios para acompanhamento da operação.",
    development: "Individual",
    github: {
      repository: "https://github.com/Nathsanfer/epi-management-system",
    },
    features: [
      "Gestão de equipamentos e estoque",
      "Alertas de estoque mínimo e validade",
      "Registro de entregas e devoluções",
      "Gestão de usuários e funções",
      "Dashboard com indicadores e movimentações",
      "Relatórios e comprovantes para impressão",
    ],
    gallery: [
      ImageEpiProject1,
      ImageEpiProject2,
      ImageEpiProject3,
      ImageEpiProject4,
    ],
    image: ImageEpi,
    imagePosition: "center",
    icon: "lni-shield-2-check",
    tags: ["Vue 3", "Supabase", "PostgreSQL", "Vue Router", "Vite"],
  },
  {
    number: "02",
    type: "SISTEMA WEB",
    name: "Blog Escolar",
    subtitle: "Antenados",
    description:
      "Plataforma para publicação e organização de artigos, jornais e projetos da comunidade escolar, com navegação dinâmica e conteúdo responsivo.",
    problem:
      "A comunidade escolar precisava de um espaço digital centralizado para divulgar conhecimentos, notícias, jornais e projetos realizados pelos alunos, facilitando o acesso aos conteúdos por estudantes, professores e famílias.",
    solution:
      "Uma plataforma web que centraliza conteúdos da comunidade escolar, permitindo consultar artigos, filtrar publicações por categorias, visualizar detalhes das postagens, acessar jornais em PDF, explorar uma galeria e organizar conteúdos por meio de uma integração com o Supabase.",
    development: "Dupla",
    github: { repository: "https://github.com/Nathsanfer/blog-antenados" },
    features: [
      "Publicação e visualização de artigos educativos",
      "Busca e filtragem de conteúdos por título, categoria e autor",
      "Visualização detalhada de artigos com imagens",
      "Publicação e leitura de jornais escolares em PDF",
      "Galeria de conteúdos e projetos da comunidade escolar",
      "Editor de conteúdo com formatação de texto",
    ],
    gallery: [
      ImageBlogProject1,
      ImageBlogProject2,
      ImageBlogProject3,
      ImageBlogProject4,
    ],
    image: ImageBlog,
    imagePosition: "70% center",
    icon: "lni-notebook-1",
    tags: ["Vue 3", "Supabase", "PostgreSQL", "Vue Router", "Vite"],
  },
  {
    number: "03",
    type: "SISTEMA WEB",
    name: "Sistema de Gestão de EPI - 2",
    subtitle: "PPE Manager",
    description:
      "Sistema para centralizar a gestão de equipamentos de proteção individual, facilitando o controle de estoque, movimentações, usuários e informações dos equipamentos.",
    problem:
      "A gestão de EPIs era realizada de forma manual e descentralizada, utilizando planilhas e registros em papel, o que dificultava o acesso às informações, o acompanhamento do estoque e a rastreabilidade das movimentações.",
    solution:
      "Uma plataforma centralizada para cadastrar e acompanhar equipamentos, controlar o estoque, registrar movimentações de entrega e devolução, consultar históricos, visualizar indicadores e gerar relatórios para apoiar a gestão dos EPIs.",
    development: "Grupo - 5 integrantes",
    github: {
      repository: "https://github.com/Nathsanfer/epi-management-system",
    },
    features: [
      "Cadastro e gerenciamento de equipamentos",
      "Controle e acompanhamento de estoque",
      "Registro de entregas e devoluções de EPIs",
      "Histórico de movimentações",
      "Dashboard com indicadores e gráficos",
      "Geração e visualização de relatórios",
      "Gerenciamento de perfil e acesso ao sistema",
    ],
    gallery: [
      ImageEpiProject01,
      ImageEpiProject02,
      ImageEpiProject03,
      ImageEpiProject04,
    ],

    image: ImageEpi2,
    imagePosition: "center",
    icon: "lni-shield-2",
    tags: ["Vue 3", "Supabase", "PostgreSQL"],
  },
  {
    number: "04",
    type: "APLICAÇÃO MOBILE",
    name: "Aplicativo de Receitas",
    subtitle: "Cookle",
    description:
      "Aplicativo mobile para explorar, buscar, criar e favoritar receitas, com navegação entre telas e integração com uma API de back-end.",
    problem:
      "Encontrar, organizar e manter receitas de diferentes fontes pode tornar a experiência pouco prática, especialmente quando não existe um espaço centralizado para consultar, criar e salvar receitas. ",
    solution:
      "Um aplicativo mobile que centraliza a experiência de receitas, permitindo pesquisar conteúdos, visualizar detalhes, criar novas receitas e gerenciar favoritos, utilizando uma API própria para armazenar e disponibilizar os dados.",
    development: "Grupo - 4 integrantes",
    github: {
      frontend: "https://github.com/Nathsanfer/cookle-app-front",
      api: "https://github.com/Nathsanfer/recipes-api",
    },
    features: [
      "Busca e filtragem de receitas",
      "Visualização detalhada das receitas",
      "Criação de novas receitas",
      "Favoritamento de receitas",
      "Listagem de receitas favoritas",
      "Perfil do usuário",
      "Seleção de imagens para receitas",
      "Navegação entre telas com Expo Router",
      "Gerenciamento de estado com Context API",
      "Integração com API REST própria",
    ],
    gallery: [
      ImageReceitasProject1,
      ImageReceitasProject2,
      ImageReceitasProject3,
      ImageReceitasProject4,
    ],
    image: ImageReceitas,
    imagePosition: "center",
    icon: "lni-hat-chef-3",
    hasApi: true,
    tags: [
      "React Native",
      "Expo",
      "Expo Router",
      "Context API",
      "AsyncStorage",
      "Node.js",
      "Express",
      "Prisma",
      "SQLite",
      "JWT",
    ],
  },
  {
    number: "05",
    type: "API REST",
    name: "API de Receitas Culinárias",
    description:
      "API REST para gerenciamento de receitas culinárias, permitindo o CRUD completo de receitas com informações necessárias para preparar e servir os pratos.",
    problem:
      "O aplicativo de receitas precisava de uma estrutura de back-end capaz de centralizar e disponibilizar os dados das receitas de forma organizada, permitindo que diferentes funcionalidades consumissem essas informações por meio de requisições HTTP.",
    solution:
      "Uma API REST estruturada com Node.js, Express e Prisma, responsável pelas operações de gerenciamento das receitas e pela persistência dos dados em banco de dados, fornecendo endpoints para comunicação com aplicações clientes.",
    development: "Individual",
    github: { repository: "https://github.com/Nathsanfer/recipes-api" },
    features: [
      "CRUD completo de receitas",
      "Criação de receitas",
      "Listagem de receitas",
      "Consulta de receita por identificador",
      "Atualização de receitas",
      "Exclusão de receitas",
      "Persistência de dados com Prisma",
      "Modelagem de dados com Prisma Schema",
      "Migrações do banco de dados",
      "Seed para inserção de receitas de exemplo",
      "Configuração por variáveis de ambiente",
      "Endpoints REST para comunicação com aplicações clientes",
    ],
    apiResponse: {
      id: 4,
      name: "Lasanha à Bolonhesa",
      category: "Prato Principal",
      time: 90,
      cuisine: "Italiana",
      servings: 8,
      rating: 4.9,
      description:
        "Camadas deliciosas de massa, molho bolonhesa e molho branco gratinadas no forno.",
      ingredients:
        "500g de massa para lasanha, 800g de carne moída, 2 latas de tomate pelado, 500ml de leite, 50g de manteiga, 50g de farinha de trigo, queijo parmesão, mussarela, alho, cebola, sal e pimenta",
      instructions:
        "Prepare o molho bolonhesa refogando carne com alho, cebola e tomate. Faça o molho branco com manteiga, farinha e leite. Monte camadas alternando massa, molho bolonhesa, molho branco e queijo. Asse por 40 minutos a 180°C.",
      imageUrl: "https://example.com/lasanha.jpg",
      createdAt: "2025-11-02T20:15:00.000Z",
      updatedAt: "2025-11-02T20:15:00.000Z",
    },
    image: ImageReceitasApi,
    imagePosition: "center",
    icon: "lni-code-1",
    tags: ["Node.js", "Express", "Prisma", "SQLite", "REST API"],
  },
  {
    number: "06",
    type: "APLICAÇÃO PYTHON",
    name: "Calculadora de Energia",
    subtitle: "SENAI Energy",
    description:
      "Aplicação para calcular o consumo diário e mensal de eletrodomésticos e visualizar os dados por meio de gráficos interativos.",
    problem:
      "Estimar o consumo de energia dos diferentes aparelhos de uma residência e compreender quais deles possuem maior impacto no consumo total não era uma tarefa simples sem realizar os cálculos individualmente.",
    solution:
      "Uma aplicação que automatiza os cálculos de consumo energético, transforma os dados de potência e tempo de uso em estimativas de consumo diário e mensal e apresenta os resultados de forma visual para facilitar a análise.",
    development: "Dupla",
    github: {
      repository: "https://github.com/Nathsanfer/energy-usage-calculator.git",
    },
    features: [
      "Cadastro e análise de eletrodomésticos",
      "Cálculo do consumo energético",
      "Estimativa de consumo diário",
      "Estimativa de consumo mensal",
      "Cálculo individual por aparelho",
      "Visualização dos resultados em gráficos",
      "Comparação do consumo entre aparelhos",
    ],
    gallery: [
      ImageEnergiaProject1,
      ImageEnergiaProject2,
      ImageEnergiaProject3,
      ImageEnergiaProject4,
    ],
    image: ImageEnergia,
    imagePosition: "30% center",
    icon: "lni-calculator-1",
    tags: ["Python", "Matplotlib", "NumPy", "Tkinter", "Análise de Dados"],
  },
  {
    number: "07",
    type: "SISTEMA WEB",
    name: "Sistema de Pedidos",
    subtitle: "Order Tech",
    description:
      "Sistema para consulta de cardápio, montagem de pedidos e acompanhamento do fluxo de atendimento, integrado a uma API de back-end.",
    problem:
      "O processo de atendimento precisava de uma forma mais organizada de conectar a escolha dos produtos, a criação dos pedidos e o acompanhamento das etapas de atendimento, reduzindo a dependência de processos manuais e melhorando a visualização do fluxo.",
    solution:
      "Uma aplicação web integrada a uma API REST que centraliza o cardápio, o carrinho e os pedidos, além de disponibilizar painéis para acompanhar o fluxo de atendimento e o gerenciamento das senhas.",
    development: "Grupo - 4 integrantes",
    github: {
      frontend: "https://github.com/Nathsanfer/order-tech-front",
      api: "https://github.com/Nathsanfer/order-tech-back",
    },
    features: [
      "Consulta e visualização do cardápio",
      "Visualização detalhada dos produtos",
      "Adição e gerenciamento de itens no carrinho",
      "Criação e envio de pedidos",
      "Cálculo automático do valor total do pedido",
      "Acompanhamento do status dos pedidos",
      "Painel para gerenciamento dos pedidos",
      "Gerenciamento de senhas para atendimento",
      "Integração entre frontend e API REST",
      "Interface responsiva e interativa",
    ],
    gallery: [
      ImagePedidosProject1,
      ImagePedidosProject2,
      ImagePedidosProject3,
      ImagePedidosProject4,
    ],
    image: ImagePedidos,
    imagePosition: "center",
    icon: "lni-cart-1",
    hasApi: true,
    tags: [
      "Next.js",
      "React",
      "JavaScript",
      "CSS Modules",
      "Node.js",
      "Express",
      "Prisma",
      "SQLite",
    ],
  },
  {
    number: "08",
    type: "API REST",
    name: "API de Gestão de Pedidos",
    description:
      "API REST para gerenciamento de cardápio, usuários e pedidos, com integração ao banco de dados e operações completas de cadastro e controle.",
    problem:
      "O sistema precisava de uma camada de back-end centralizada para organizar os dados do cardápio, usuários e pedidos, mantendo a comunicação entre as diferentes interfaces e garantindo que a criação e o gerenciamento dos pedidos fossem realizados de forma consistente.",
    solution:
      "Uma API REST desenvolvida em Node.js e Express, com Prisma como ORM e SQLite como banco de dados padrão, responsável por disponibilizar operações de gerenciamento do cardápio, usuários, pedidos e itens associados aos pedidos.",
    development: "Grupo - 4 integrantes",
    github: { repository: "https://github.com/Nathsanfer/order-tech-back" },
    features: [
      "CRUD completo do cardápio",
      "Cadastro e gerenciamento de usuários",
      "CRUD de pedidos",
      "Gerenciamento dos itens de cada pedido",
      "Criação de pedidos com múltiplos itens em uma única requisição",
      "Cálculo automático do valor total do pedido",
      "Controle do status dos pedidos",
      "Associação entre usuários, pedidos e itens do cardápio",
      "Hash de senhas dos usuários",
      "Endpoints REST organizados por recurso",
      "Seed para popular o banco com dados de exemplo",
      "Migrations e modelagem do banco utilizando Prisma",
    ],
    apiResponse: {
      id_order: 24,
      id_user: 7,
      status: "pending",
      password_panel: "1234",
      total_cost: 42.5,
      items: [
        {
          id_item: 3,
          quantity: 2,
          observation: null,
          menu: {
            id_item: 3,
            name: "Hambúrguer artesanal",
            type: "Lanche",
            description: "Hambúrguer artesanal com ingredientes selecionados",
            cost: 21.25,
            size: "Grande",
            imageUrl: "/img/hamburguer.jpg",
          },
        },
      ],
    },
    image: ImagePedidosApi,
    imagePosition: "center",
    icon: "lni-monitor-code",
    tags: ["Node.js", "Express", "Prisma", "SQLite", "REST API"],
  },
  {
    number: "09",
    type: "SISTEMA WEB",
    name: "Sistema de Gestão de Cantina",
    subtitle: "Cantina Escolar",
    description:
      "Sistema para gerenciamento de produtos, estoque e vendas de uma cantina escolar, com autenticação, dashboard e atualização automática do estoque.",
    problem:
      "A gestão da cantina precisava de uma forma mais organizada para controlar produtos, acompanhar a quantidade disponível em estoque e registrar as vendas realizadas, reduzindo a dependência de controles manuais e facilitando o acompanhamento da operação.",
    solution:
      "Uma aplicação web com autenticação de funcionários, gerenciamento de produtos, controle de estoque e registro de vendas. O sistema também consolida informações no dashboard e atualiza automaticamente o estoque após cada venda, mantendo os dados da operação sincronizados.",
    development: "Individual",
    github: {
      repository: "https://github.com/Nathsanfer/school-canteen-system",
    },
    features: [
      "Autenticação de funcionários por usuário e senha",
    "Controle de sessão e proteção das rotas internas",
    "Cadastro de novos produtos",
    "Edição de produtos e preços",
    "Exclusão de produtos com validação de vendas registradas",
    "Controle da quantidade disponível em estoque",
    "Busca e filtragem de produtos por nome",
    "Registro de vendas",
    "Validação de estoque disponível antes da venda",
    "Cálculo automático do valor total da venda",
    "Atualização automática do estoque após uma venda",
    "Histórico de vendas com produto, quantidade, valor, data e funcionário responsável",
    "Dashboard com total de produtos, total de vendas e alertas de estoque baixo",
    "Renderização de páginas dinâmicas com EJS",
    ],
    gallery: [
      ImageCantinaProject1,
      ImageCantinaProject2,
      ImageCantinaProject3,
      ImageCantinaProject4,
    ],
    image: ImageCantina,
    imagePosition: "center",
    icon: "lni-dashboard-square-1",
    tags: ["Node.js",
    "Express",
    "EJS",
    "PostgreSQL",
    "Express Session",],
  },
  {
    number: "10",
    type: "SISTEMA WEB",
    name: "Blog de Pontos Turísticos",
    subtitle: "Explorer's Paradise",
    description:
      "Plataforma para explorar pontos turísticos do Brasil por regiões, realizar buscas e consultar informações detalhadas de cada destino.",
    problem:
      "As informações sobre pontos turísticos estavam organizadas de forma pouco prática para exploração, dificultando a descoberta de destinos por região e o acesso às informações detalhadas de cada local.",
    solution:
      "Uma interface web que organiza os pontos turísticos por regiões do Brasil e integra uma API REST para buscar e apresentar os dados dos destinos de forma dinâmica, oferecendo navegação por regiões, pesquisa e páginas detalhadas.",
    development: "Individual",
    github: {
      frontend: "https://github.com/Nathsanfer/tourist-spot-front",
      api: "https://github.com/Nathsanfer/tourist-spot-back-relationship",
    },
    features: [
      "Exploração de pontos turísticos por regiões do Brasil",
    "Busca de destinos turísticos",
    "Listagem de pontos turísticos",
    "Visualização detalhada de cada destino",
    "Exibição de informações como descrição, localização, categoria e avaliação",
    "Navegação entre páginas utilizando Next.js App Router",
    "Componentes reutilizáveis para cards e listagens",
    "Interface responsiva",
    "Animações e transições com Framer Motion",
    "Componentes de interface com Ant Design",
    "Integração com API REST própria",
    ],
    gallery: [
      ImageTurismoProject1,
      ImageTurismoProject2,
      ImageTurismoProject3,
      ImageTurismoProject4,
    ],
    image: ImageTurismo,
    imagePosition: "center",
    icon: "lni-map-marker-5",
    hasApi: true,
    tags: ["Next.js",
    "React",
    "JavaScript",
    "CSS Modules",
    "Framer Motion",
    "Ant Design",
    "React Icons",
    "API REST",],
  },
  {
    number: "11",
    type: "API REST",
    name: "API de Pontos Turísticos",
    description:
      "API REST para gerenciamento de pontos turísticos, permitindo o CRUD completo de destinos turísticos com informações detalhadas sobre cada local.",
    problem:
      "Era necessário estruturar os dados dos pontos turísticos de forma organizada, permitindo armazenar não apenas as informações principais de cada destino, mas também diferentes conteúdos relacionados a ele, mantendo a integridade entre os registros.",
    solution:
      "Uma API REST estruturada com Node.js, Express e Prisma, utilizando uma modelagem relacional entre pontos turísticos e suas seções. A API permite realizar operações CRUD nos dois recursos, consultar informações relacionadas e utilizar exclusão em cascata para manter a integridade dos dados.",
    development: "Individual",
    github: {
      repository:
        "https://github.com/Nathsanfer/tourist-spot-back-relationship",
    },
    features: [
      "Cadastro de pontos turísticos",
    "Listagem de pontos turísticos",
    "Consulta de ponto turístico por ID",
    "Atualização de pontos turísticos",
    "Exclusão de pontos turísticos",
    "Cadastro e gerenciamento de seções dos destinos",
    "Relacionamento entre pontos turísticos e seções",
    "Consulta de seções por ponto turístico",
    "Paginação das seções",
    "Filtros por ponto turístico",
    "Exclusão em cascata das seções relacionadas",
    "Validação básica dos dados recebidos",
    "Tratamento de erros HTTP",
    "Persistência dos dados utilizando Prisma ORM",
    "Migrações para gerenciamento da estrutura do banco",
    ],
    apiResponse: {
    id: 1,
    name: "Foz do Iguaçu",
    region: "Sul",
    rating: 4.5,
    imageUrl: "https://exemplo.com/foz.jpg",
    sections: [
      {
        id: 1,
        title: "Visão Geral",
        text: "Foz do Iguaçu é uma cidade incrível localizada no Paraná, famosa por suas cataratas e pela diversidade cultural.",
        imageUrl: "https://exemplo.com/foz-geral.jpg",
      },
      {
        id: 2,
        title: "O que fazer",
        text: "Você pode visitar as Cataratas do Iguaçu, o Parque Nacional do Iguaçu, a Usina de Itaipu e o Parque das Aves.",
        imageUrl: "https://exemplo.com/foz-cataratas.jpg",
      },
      {
        id: 3,
        title: "História",
        text: "Foz do Iguaçu se desenvolveu a partir do cruzamento dos rios Iguaçu e Paraná, sendo estratégica para a economia e o turismo.",
        imageUrl: "https://exemplo.com/foz-historia.jpg",
      },
      {
        id: 4,
        title: "Melhor momento para ir",
        text: "A melhor época para visitar é entre março e setembro, quando a cidade recebe menos chuvas.",
        imageUrl: "https://exemplo.com/foz-tempo.jpg",
      },
    ],
  },
    image: ImageTurismoApi,
    imagePosition: "center",
    icon: "lni-map-pin-5",
    tags: ["Node.js",
    "Express",
    "JavaScript",
    "Prisma",
    "SQLite",
    "REST API",
    "MVC",],
  },
  {
    number: "12",
    type: "APLICAÇÃO MOBILE",
    name: "To-do List",
    description:
      "Aplicativo mobile para organização de tarefas, permitindo criar, editar e excluir atividades, além de armazenar os dados localmente para mantê-los disponíveis entre as sessões.",
    problem:
      "A organização das tarefas do dia a dia precisava de uma solução simples que permitisse registrar atividades, associar horários e consultar as informações posteriormente sem depender de anotações dispersas.",
    solution:
      "Um aplicativo mobile que centraliza a organização das tarefas em uma lista interativa, permitindo cadastrar atividades com título, descrição e horário, editar informações existentes, excluir tarefas individualmente ou em conjunto e persistir os dados localmente no dispositivo.",
    development: "Individual",
    github: { repository: "https://github.com/Nathsanfer/to-do-list-app" },
    features: [
      "Criação de tarefas",
    "Definição de título e descrição",
    "Definição de horário com hora, minuto e período",
    "Edição de tarefas existentes",
    "Exclusão individual de tarefas",
    "Exclusão de todas as tarefas",
    "Listagem das tarefas em interface de rolagem",
    "Validação do título antes do cadastro",
    "Persistência automática das tarefas com AsyncStorage",
    "Recuperação das tarefas ao iniciar o aplicativo",
    "Modal para criação e edição de tarefas",
    "Interface personalizada com fontes e ícones",
    ],
    gallery: [ImageToDoProject1, ImageToDoProject2],
    image: ImageToDo,
    imagePosition: "center",
    icon: "lni-check-square-2",
    tags: ["React Native",
    "Expo",
    "JavaScript",
    "AsyncStorage",
    "DateTimePicker",],
  }
];
