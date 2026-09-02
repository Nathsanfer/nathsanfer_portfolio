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
import ImageBeleza from "../assets/images_cards/beleza.png";
import ImagePlanilha from "../assets/images_cards/planilha.png";
import ImagePlanilha2 from "../assets/images_cards/planilha2.png";

import ImageEpiProject1 from "../assets/images_projects/epi4.png";
import ImageEpiProject2 from "../assets/images_projects/epi2.png";
import ImageEpiProject3 from "../assets/images_projects/epi3.png";
import ImageEpiProject4 from "../assets/images_projects/epi1.png";
import ImageBlogProject1 from "../assets/images_projects/blog1.png";
import ImageBlogProject2 from "../assets/images_projects/blog2.png";
import ImageBlogProject3 from "../assets/images_projects/blog3.png";
import ImageBlogProject4 from "../assets/images_projects/blog4.png";

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
    gallery: [ImageEpiProject1, ImageEpiProject2, ImageEpiProject3, ImageEpiProject4  ],
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
    "Editor de conteúdo com formatação de texto"
    ],
    gallery: [ImageBlogProject1, ImageBlogProject2, ImageBlogProject3, ImageBlogProject4  ],
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
      "A falta de centralização dificultava o acesso às informações dos equipamentos e o acompanhamento de suas movimentações.",
    solution:
      "Um sistema para organizar equipamentos, estoque, usuários e históricos de forma rápida e confiável.",
    development: "Individual",
    github: {
      repository: "https://github.com/Nathsanfer/epi-management-system",
    },
    features: [
      "Cadastro de equipamentos",
      "Controle de estoque",
      "Gestão de usuários",
      "Histórico de movimentações",
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
      "Encontrar, organizar e guardar receitas favoritas em diferentes lugares tornava a experiência pouco prática.",
    solution:
      "Um aplicativo mobile que reúne busca, criação e favoritos, conectado a uma API para manter os dados organizados.",
    development: "Individual",
    github: {
      frontend: "https://github.com/Nathsanfer/cookle-app-front",
      api: "https://github.com/Nathsanfer/recipes-api",
    },
    features: [
      "Busca de receitas",
      "Criação de receitas",
      "Favoritos",
      "Integração com API",
    ],
    gallery: [ImageReceitas, ImageReceitasApi],
    image: ImageReceitas,
    imagePosition: "center",
    icon: "lni-hat-chef-3",
    hasApi: true,
    tags: ["React Native", "Expo", "Context API"],
  },
  {
    number: "05",
    type: "API REST",
    name: "API de Receitas Culinárias",
    description:
      "API REST para gerenciamento de receitas culinárias, permitindo o CRUD completo de receitas com informações necessárias para preparar e servir os pratos.",
    problem:
      "Era necessário disponibilizar uma estrutura confiável para cadastrar, consultar, atualizar e remover receitas.",
    solution:
      "Uma API REST com operações CRUD e persistência dos dados essenciais para o preparo dos pratos.",
    development: "Individual",
    github: { repository: "https://github.com/Nathsanfer/recipes-api" },
    features: [
      "CRUD de receitas",
      "Validação de dados",
      "Persistência no banco",
      "Endpoints REST",
    ],
    image: ImageReceitasApi,
    imagePosition: "center",
    icon: "lni-code-1",
    tags: ["Next.js", "Express", "Prisma"],
  },
  {
    number: "06",
    type: "APLICAÇÃO PYTHON",
    name: "Calculadora de Energia",
    subtitle: "SENAI Energy",
    description:
      "Aplicação para calcular o consumo diário e mensal de eletrodomésticos e visualizar os dados por meio de gráficos interativos.",
    problem:
      "Estimar o consumo de energia de cada aparelho e entender seu impacto mensal não era uma tarefa simples.",
    solution:
      "Uma calculadora que transforma os dados de uso em estimativas diárias, mensais e gráficos fáceis de interpretar.",
    development: "Individual",
    github: {
      repository: "https://github.com/Nathsanfer/energy-usage-calculator",
    },
    features: [
      "Cálculo de consumo",
      "Estimativa mensal",
      "Gráficos interativos",
      "Análise por aparelho",
    ],
    image: ImageEnergia,
    imagePosition: "30% center",
    icon: "lni-calculator-1",
    tags: ["Python", "Matplotlib", "Análise de Dados"],
  },
  {
    number: "07",
    type: "SISTEMA WEB",
    name: "Sistema de Pedidos",
    subtitle: "Order Tech",
    description:
      "Sistema para consulta de cardápio, montagem de pedidos e acompanhamento do fluxo de atendimento, integrado a uma API de back-end.",
    problem:
      "O atendimento precisava de mais clareza no fluxo de pedidos, desde a escolha do cardápio até a entrega.",
    solution:
      "Uma interface para consultar o cardápio, montar pedidos e acompanhar cada etapa do atendimento integrada à API.",
    development: "Individual",
    github: {
      frontend: "https://github.com/Nathsanfer/order-tech-front",
      api: "https://github.com/Nathsanfer/order-tech-back",
    },
    features: [
      "Consulta de cardápio",
      "Montagem de pedidos",
      "Acompanhamento do atendimento",
      "Integração com API",
    ],
    gallery: [ImagePedidos, ImagePedidosApi],
    image: ImagePedidos,
    imagePosition: "center",
    icon: "lni-cart-1",
    hasApi: true,
    tags: ["Next.js", "React", "CSS Modules "],
  },
  {
    number: "08",
    type: "API REST",
    name: "API de Gestão de Pedidos",
    description:
      "API REST para gerenciamento de cardápio, usuários e pedidos, com integração ao banco de dados e operações completas de cadastro e controle.",
    problem:
      "O sistema precisava de uma base consistente para administrar cardápio, usuários e pedidos.",
    solution:
      "Uma API REST que organiza os dados e oferece operações completas de cadastro, consulta, atualização e controle.",
    development: "Individual",
    github: { repository: "https://github.com/Nathsanfer/order-tech-back" },
    features: [
      "Gestão de cardápio",
      "Cadastro de usuários",
      "Controle de pedidos",
      "Operações CRUD",
    ],
    image: ImagePedidosApi,
    imagePosition: "center",
    icon: "lni-monitor-code",
    tags: ["Noje.js", "Express", "Prisma"],
  },
  {
    number: "09",
    type: "SISTEMA WEB",
    name: "Sistema de Gestão de Cantina",
    subtitle: "Cantina Escolar",
    description:
      "Sistema para gerenciamento de produtos, estoque e vendas de uma cantina escolar, com autenticação, dashboard e atualização automática do estoque.",
    problem:
      "A gestão da cantina exigia acompanhar produtos, estoque e vendas com mais agilidade e segurança.",
    solution:
      "Um sistema com autenticação, dashboard e atualização automática para centralizar a operação da cantina.",
    development: "Individual",
    github: {
      repository: "https://github.com/Nathsanfer/school-canteen-system",
    },
    features: [
      "Cadastro de produtos",
      "Controle de estoque",
      "Registro de vendas",
      "Dashboard",
    ],
    image: ImageCantina,
    imagePosition: "center",
    icon: "lni-dashboard-square-1",
    tags: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    number: "10",
    type: "SISTEMA WEB",
    name: "Blog de Pontos Turísticos",
    subtitle: "Explorer's Paradise",
    description:
      "Plataforma para explorar pontos turísticos do Brasil por regiões, realizar buscas e consultar informações detalhadas de cada destino.",
    problem:
      "As informações sobre destinos turísticos estavam dispersas e não eram fáceis de explorar por região.",
    solution:
      "Uma plataforma que organiza os destinos por regiões e oferece busca e detalhes integrados à API.",
    development: "Individual",
    github: {
      frontend: "https://github.com/Nathsanfer/tourist-spot-front",
      api: "https://github.com/Nathsanfer/tourist-spot-back-relationship",
    },
    features: [
      "Exploração por regiões",
      "Busca de destinos",
      "Detalhes dos locais",
      "Integração com API",
    ],
    gallery: [ImageTurismo, ImageTurismoApi],
    image: ImageTurismo,
    imagePosition: "center",
    icon: "lni-map-marker-5",
    hasApi: true,
    tags: ["Next.js", "React", "API REST"],
  },
  {
    number: "11",
    type: "API REST",
    name: "API de Pontos Turísticos",
    description:
      "API REST para gerenciamento de pontos turísticos, permitindo o CRUD completo de destinos turísticos com informações detalhadas sobre cada local.",
    problem:
      "Era necessário estruturar informações turísticas para que pudessem ser consultadas e mantidas de forma consistente.",
    solution:
      "Uma API REST para cadastrar, consultar, atualizar e remover destinos com seus detalhes turísticos.",
    development: "Individual",
    github: {
      repository:
        "https://github.com/Nathsanfer/tourist-spot-back-relationship",
    },
    features: [
      "Cadastro de destinos",
      "Detalhes turísticos",
      "Busca de locais",
      "Operações CRUD",
    ],
    image: ImageTurismoApi,
    imagePosition: "center",
    icon: "lni-map-pin-5",
    tags: ["Node.js", "Express", "Prisma"],
  },
  {
    number: "12",
    type: "APLICAÇÃO WEB",
    name: "Sistema de Insights Dados - 1",
    subtitle: "DataVision",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    problem:
      "A análise de dados precisava de uma visualização mais clara para apoiar a interpretação das informações.",
    solution:
      "Uma aplicação que organiza os dados e apresenta indicadores para facilitar a leitura e a tomada de decisões.",
    development: "Individual",
    github: { repository: "https://github.com/Nathsanfer/datavision_insights" },
    features: [
      "Organização de dados",
      "Indicadores visuais",
      "Análise de informações",
      "Visão centralizada",
    ],
    image: ImagePlanilha,
    imagePosition: "center",
    icon: "lni-pie-chart-2",
    tags: ["Vue 3", "Spring Boot", "Ciência de Dados"],
  },
  {
    number: "13",
    type: "APLICAÇÃO MOBILE",
    name: "To-do List",
    description:
      "Aplicativo mobile para organização de tarefas, permitindo criar, editar e excluir atividades, além de armazenar os dados localmente para mantê-los disponíveis entre as sessões.",
    problem:
      "As tarefas do dia a dia precisavam ser registradas e acompanhadas sem depender de anotações dispersas.",
    solution:
      "Um aplicativo mobile simples para criar, editar, excluir e manter tarefas salvas localmente.",
    development: "Individual",
    github: { repository: "https://github.com/Nathsanfer/to-do-list-app" },
    features: [
      "Criação de tarefas",
      "Edição e exclusão",
      "Armazenamento local",
      "Organização da rotina",
    ],
    image: ImageToDo,
    imagePosition: "center",
    icon: "lni-check-square-2",
    tags: ["React Native", "Expo", "JavaScript"],
  },
  {
    number: "14",
    type: "APLICAÇÃO WEB",
    name: "Sistema de Cuidados Pessoais",
    subtitle: "Clean",
    description:
      "Plataforma voltada para cuidados pessoais e beleza, com funcionalidades de autenticação, conta de usuário, curtidas, comentários e contato.",
    problem:
      "Faltava um espaço centralizado para compartilhar conteúdos de beleza e permitir interações entre usuários.",
    solution:
      "Uma plataforma com autenticação, perfis e recursos sociais para explorar conteúdos e interagir com a comunidade.",
    development: "Individual",
    github: {
      repository:
        "https://github.com/Nathsanfer/Acessibilidade-UXUI---Perfume---Atividade",
    },
    features: [
      "Autenticação",
      "Perfil de usuário",
      "Curtidas e comentários",
      "Formulário de contato",
    ],
    image: ImageBeleza,
    imagePosition: "center",
    icon: "lni-flower-2",
    tags: ["Next.js", "React", "Axios"],
  },
  {
    number: "15",
    type: "APLICAÇÃO WEB",
    name: "Sistema de Insights Dados - 2",
    subtitle: "DataFlow",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    problem:
      "Era necessário acompanhar métricas e fluxos de dados com uma visão mais organizada e objetiva.",
    solution:
      "Uma aplicação voltada à visualização de métricas e ao acompanhamento de dados relevantes em um só lugar.",
    development: "Individual",
    github: {
      repository: "https://github.com/Nathsanfer/user-management-front",
    },
    features: [
      "Fluxo de dados",
      "Indicadores visuais",
      "Relatórios analíticos",
      "Acompanhamento de métricas",
    ],
    image: ImagePlanilha2,
    imagePosition: "center",
    icon: "lni-bar-chart-4",
    tags: ["Vue 3", "Spring Boot", "Ciência de Dados"],
  },
];
