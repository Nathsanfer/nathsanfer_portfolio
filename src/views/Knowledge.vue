<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const knowledgeAreas = [
  {
    number: "01",
    name: "Frontend",
    description: "Interfaces responsivas que equilibram clareza, acessibilidade e personalidade visual.",
    focus: "Criação de páginas, componentes reutilizáveis e experiências consistentes em diferentes telas.",
    skills: ["HTML", "CSS", "JavaScript", "Vue.js", "React", "Figma", "Next.js", "SPA", "Componentização", "Responsividade"],
  },
  {
    number: "02",
    name: "Backend",
    description: "Serviços e integrações bem estruturados para transformar regras de negócio em produto.",
    focus: "Desenvolvimento de APIs, autenticação, validações e funcionalidades que conectam sistemas.",
    skills: ["Java", "Python", "Node.js", "Prisma", "APIs REST", "Spring Boot", "Express.js", "Autenticação", "Validações", "Integração de sistemas"],
  },
  {
    number: "03",
    name: "Banco de Dados",
    description: "Dados organizados, acessíveis e consistentes para sustentar aplicações confiáveis.",
    focus: "Modelagem de tabelas, consultas SQL, relacionamentos e organização das informações do sistema.",
    skills: ["Supabase", "PostgreSQL", "SQLite", "Modelagem", "Relacionamentos", "Views", "Functions", "Triggers"],
  },
  {
    number: "04",
    name: "Computação em Nuvem",
    description: "Soluções preparadas para crescer com flexibilidade, segurança e eficiência operacional.",
    focus: "Uso de serviços em nuvem, containers e ambientes escaláveis para hospedar aplicações.",
    skills: ["Google Cloud", "BaaS", "Vercel", "Deploy", "Azure", "Docker", "Cloud Computing"],
  },
  {
    number: "05",
    name: "DevOps",
    description: "Automação e colaboração para entregar software com mais velocidade e consistência.",
    focus: "Versionamento, integração contínua e automação das etapas entre desenvolvimento e entrega.",
    skills: ["Git", "GitHub", "CI/CD", "GitHub Actions", "Pipelines", "Containers", "Docker"],
  },
  {
    number: "06",
    name: "Ciência de Dados",
    description: "Exploração de dados para encontrar padrões, gerar clareza e apoiar escolhas melhores.",
    focus: "Limpeza, análise e visualização de dados para transformar informações em descobertas úteis.",
    skills: ["Python", "Tratamento de Dados", "Geração de Insights", "Análise de Dados"],
  },
  {
    number: "07",
    name: "Engenharia de Software",
    description: "Métodos e boas práticas para construir sistemas duráveis, testáveis e evolutivos.",
    focus: "Planejamento, documentação, testes e escolhas de arquitetura ao longo do ciclo de vida do software.",
    skills: ["Git", "UML", "Scrum", "Kanban", "Arquitetura", "Metodologias Ágeis", "Testes", "Documentação", "Requisitos"],
  },
];
</script>

<template>
  <Header />
  <main class="knowledge-page">
    <section class="knowledge-hero" aria-labelledby="knowledge-title">
      <div class="hero-copy">
        <p class="eyebrow">O QUE EU SEI FAZER</p>
        <h1 id="knowledge-title">
          Conhecimento que vira<br />
          <em>solução.</em>
        </h1>
        <p class="hero-description">
          Uma visão das tecnologias, ferramentas e práticas que fazem parte da minha forma de criar produtos digitais.
        </p>
      </div>
      <div class="hero-index" aria-label="Sete áreas de conhecimento">
        <span class="index-number">07</span>
        <span class="index-label">áreas de<br />conhecimento</span>
        <span class="index-line" aria-hidden="true"></span>
      </div>
    </section>

    <section class="knowledge-grid" aria-label="Áreas de conhecimento">
      <article
        v-for="(area, index) in knowledgeAreas"
        :key="area.number"
        class="knowledge-card"
        :class="{ 'knowledge-card-featured': index === 0 }"
      >
        <div class="card-topline">
          <span class="card-number">{{ area.number }}</span>
          <span class="card-mark" aria-hidden="true">+</span>
        </div>
        <div class="card-content">
          <h2>{{ area.name }}</h2>
          <p>{{ area.description }}</p>
        </div>
        <div class="card-detail">
          <span>NA PRÁTICA</span>
          <p>{{ area.focus }}</p>
        </div>
        <div class="skill-list" :aria-label="`Tecnologias de ${area.name}`">
          <span v-for="skill in area.skills" :key="skill">{{ skill }}</span>
        </div>
      </article>
    </section>
  </main>
  <Footer />
</template>

<style scoped>
/* --- ESTRUTURA PRINCIPAL --- */
.knowledge-page {
  width: min(90rem, 100%);
  margin: 0 auto;
  padding: clamp(2rem, 4vw, 4.5rem) 1.5rem 6rem;
  box-sizing: border-box;
}

/* --- HERO SECTION --- */
.knowledge-hero {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #ddd7e0;
}

.hero-copy {
  width: 100%;
}

.eyebrow {
  margin-bottom: 0.85rem;
  color: var(--color-principal);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
}

.knowledge-hero h1 {
  color: #17131a;
  font-size: clamp(2.2rem, 5vw, 4.2rem);
  font-weight: 400;
  line-height: 1.06;
}

.knowledge-hero h1 em {
  display: inline-block;
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: 0.88em; /* Proporcional ao título */
  font-weight: 420;
  font-style: italic;
  transform: skewX(-12deg);
}

.hero-description {
  max-width: 32rem;
  margin-top: 1.5rem;
  color: #68636c;
  font-size: clamp(0.88rem, 1.2vw, 0.98rem);
  line-height: 1.7;
}

.hero-index {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 0.5rem 0.85rem;
  align-self: flex-start;
}

.index-number {
  grid-row: span 2;
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: clamp(3.5rem, 6vw, 4.5rem);
  font-weight: 400;
  line-height: 0.85;
}

.index-label {
  color: #68636c;
  font-size: 0.7rem;
  line-height: 1.35;
  text-transform: uppercase;
}

.index-line {
  display: block;
  width: 4rem;
  height: 1px;
  background: #cfc1d6;
}

/* --- GRID DE CONHECIMENTOS --- */
.knowledge-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding-top: 3rem;
}

/* --- CARDS --- */
.knowledge-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #e5dfe8;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 0.8rem 2rem rgba(55, 33, 66, 0.04);
  padding: 1.5rem;
  box-sizing: border-box;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.knowledge-card:hover {
  transform: translateY(-0.3rem);
  box-shadow: 0 1.2rem 2.5rem rgba(55, 33, 66, 0.1);
}

.knowledge-card-featured {
  border-color: var(--color-principal);
  background: #2a1930;
  color: #fff;
}

.card-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eeeaf0;
}

.knowledge-card-featured .card-topline {
  border-color: rgba(255, 255, 255, 0.18);
}

.card-number {
  color: var(--color-principal);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
}

.knowledge-card-featured .card-number {
  color: #d9a9e8;
}

.card-mark {
  color: #b2aab5;
  font-family: var(--font-cursive);
  font-size: 1.5rem;
  line-height: 1;
}

.knowledge-card-featured .card-mark {
  color: #d9a9e8;
}

.card-content {
  flex: 1;
  padding: 1.5rem 0;
}

.card-content h2 {
  margin-bottom: 0.6rem;
  color: #19151c;
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  font-weight: 500;
}

.knowledge-card-featured .card-content h2 {
  color: #fff;
}

.card-content p {
  color: #716b74;
  font-size: 0.82rem;
  line-height: 1.65;
}

.knowledge-card-featured .card-content p {
  color: #d6cbd9;
}

.card-detail {
  margin-bottom: 1.25rem;
  padding-left: 0.75rem;
  border-left: 2px solid #d8c6df;
}

.card-detail span {
  display: block;
  margin-bottom: 0.25rem;
  color: var(--color-principal);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
}

.card-detail p {
  color: #827a85;
  font-size: 0.75rem;
  line-height: 1.5;
}

.knowledge-card-featured .card-detail {
  border-color: #a46bb5;
}

.knowledge-card-featured .card-detail span {
  color: #d9a9e8;
}

.knowledge-card-featured .card-detail p {
  color: #d6cbd9;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: auto; /* Empurra os tags para o fundo do card uniformemente */
}

.skill-list span {
  padding: 0.45rem 0.65rem;
  border-radius: 999px;
  background: #f2eaf6;
  color: #76508a;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1;
}

.knowledge-card-featured .skill-list span {
  background: rgba(255, 255, 255, 0.12);
  color: #f4e7f7;
}

/* ================= BREAKPOINTS RESPONSIVOS ================= */

/* Tablets em pé e Laptops Médios (>= 640px) */
@media (min-width: 640px) {
  .knowledge-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Telas Grandes e Desktops (>= 1024px) */
@media (min-width: 1024px) {
  .knowledge-hero {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  .hero-index {
    align-self: flex-end;
  }

  .knowledge-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>