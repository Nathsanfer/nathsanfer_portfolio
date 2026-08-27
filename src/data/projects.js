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

export const projects = [
  {
    number: "01",
    type: "SISTEMA WEB",
    name: "Sistema de Gestão de EPI - 1",
    description:
      "Sistema desenvolvido para digitalizar o controle de equipamentos de proteção individual, facilitando a gestão de estoque, movimentações, usuários e relatórios.",
    image: ImageEpi,
    imagePosition: "center",
    icon: "lni-shield-2-check",
    tags: ["Vue 3", "Supabase", "PostgreSQL"],
  },
  {
    number: "02",
    type: "SISTEMA WEB",
    name: "Blog Escolar",
    description:
      "Plataforma para publicação e organização de artigos, jornais e projetos da comunidade escolar, com navegação dinâmica e conteúdo responsivo.",
    image: ImageBlog,
    imagePosition: "70% center",
    icon: "lni-notebook-1",
    tags: ["Vue 3", "Supabase", "PostgreSQL"],
  },
  {
    number: "03",
    type: "SISTEMA WEB",
    name: "Sistema de Gestão de EPI - 2",
    description:
      "Sistema para centralizar a gestão de equipamentos de proteção individual, facilitando o controle de estoque, movimentações, usuários e informações dos equipamentos.",
    image: ImageEpi2,
    imagePosition: "center",
    icon: "lni-shield-2",
    tags: ["Vue 3", "Supabase", "PostgreSQL"],
  },
  {
    number: "04",
    type: "APLICAÇÃO MOBILE",
    name: "Aplicativo de Receitas",
    description:
      "Aplicativo mobile para explorar, buscar, criar e favoritar receitas, com navegação entre telas e integração com uma API de back-end.",
    image: ImageReceitas,
    imagePosition: "center",
    icon: "lni-hat-chef-3",
    tags: ["React Native", "Expo", "Context API"],
  },
  {
    number: "05",
    type: "API REST",
    name: "API de Receitas Culinárias",
    description:
      "API REST para gerenciamento de receitas culinárias, permitindo o CRUD completo de receitas com informações necessárias para preparar e servir os pratos.",
    image: ImageReceitasApi,
    imagePosition: "center",
    icon: "lni-code-1",
    tags: ["Next.js", "Express", "Prisma"],
  },
  {
    number: "06",
    type: "APLICAÇÃO PYTHON",
    name: "Calculadora de Energia",
    description:
      "Aplicação para calcular o consumo diário e mensal de eletrodomésticos e visualizar os dados por meio de gráficos interativos.",
    image: ImageEnergia,
    imagePosition: "30% center",
    icon: "lni-calculator-1",
    tags: ["Python", "Matplotlib", "Análise de Dados"],
  },
  {
    number: "07",
    type: "SISTEMA WEB",
    name: "Sistema de Pedidos",
    description:
      "Sistema para consulta de cardápio, montagem de pedidos e acompanhamento do fluxo de atendimento, integrado a uma API de back-end.",
    image: ImagePedidos,
    imagePosition: "center",
    icon: "lni-cart-1",
    tags: ["Next.js", "React", "CSS Modules "],
  },
  {
    number: "08",
    type: "API REST",
    name: "API de Gestão de Pedidos",
    description:
      "API REST para gerenciamento de cardápio, usuários e pedidos, com integração ao banco de dados e operações completas de cadastro e controle.",
    image: ImagePedidosApi,
    imagePosition: "center",
    icon: "lni-monitor-code",
    tags: ["Noje.js", "Express", "Prisma"],
  },
  {
    number: "09",
    type: "SISTEMA WEB",
    name: "Sistema de Gestão de Cantina",
    description:
      "Sistema para gerenciamento de produtos, estoque e vendas de uma cantina escolar, com autenticação, dashboard e atualização automática do estoque.",
    image: ImageCantina,
    imagePosition: "center",
    icon: "lni-dashboard-square-1",
    tags: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    number: "10",
    type: "SISTEMA WEB",
    name: "Blog de Pontos Turísticos",
    description:
      "Plataforma para explorar pontos turísticos do Brasil por regiões, realizar buscas e consultar informações detalhadas de cada destino.",
    image: ImageTurismo,
    imagePosition: "center",
    icon: "lni-map-marker-5",
    tags: ["Next.js", "React", "API REST"],
  },
  {
    number: "11",
    type: "API REST",
    name: "API de Pontos Turísticos",
    description:
      "API REST para gerenciamento de pontos turísticos, permitindo o CRUD completo de destinos turísticos com informações detalhadas sobre cada local.",
    image: ImageTurismoApi,
    imagePosition: "center",
    icon: "lni-map-pin-5",
    tags: ["Node.js", "Express", "Prisma"],
  },
  {
    number: "12",
    type: "APLICAÇÃO WEB",
    name: "Sistema de Insights - 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
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
    image: ImageToDo,
    imagePosition: "center",
    icon: "lni-check-square-2",
    tags: ["React Native", "Expo", "JavaScript"],
  },
  {
    number: "14",
    type: "APLICAÇÃO WEB",
    name: "Sistema de Cuidados Pessoais",
    description:
      "Plataforma voltada para cuidados pessoais e beleza, com funcionalidades de autenticação, conta de usuário, curtidas, comentários e contato.",
    image: ImageBeleza,
    imagePosition: "center",
    icon: "lni-flower-2",
    tags: ["Next.js", "React", "Axios"],
  },
  {
    number: "15",
    type: "APLICAÇÃO WEB",
    name: "Sistema de Insights - 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    image: ImagePlanilha2,
    imagePosition: "center",
    icon: "lni-bar-chart-4",
    tags: ["Vue 3", "Spring Boot", "Ciência de Dados"],
  },
];
