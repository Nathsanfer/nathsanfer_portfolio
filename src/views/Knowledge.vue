<script setup>
const knowledgeAreas = [
  {
    number: '01',
    name: 'Frontend',
    icon: 'lni-layout-9',
    description: 'Interfaces responsivas que equilibram clareza, acessibilidade e personalidade visual.',
    focus: 'Criação de páginas, componentes reutilizáveis e experiências consistentes em diferentes telas.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'React', 'Figma', 'Next.js', 'SPA', 'Componentização', 'Responsividade'],
  },
  {
    number: '02',
    name: 'Backend',
    icon: 'lni-gears-3',
    description: 'Serviços e integrações bem estruturados para transformar regras de negócio em produto.',
    focus: 'Desenvolvimento de APIs, autenticação, validações e funcionalidades que conectam sistemas.',
    skills: ['Java', 'Python', 'Node.js', 'Prisma', 'APIs REST', 'Spring Boot', 'Express.js', 'Autenticação', 'Validações', 'Integração de sistemas'],
  },
  {
    number: '03',
    name: 'Banco de Dados',
    icon: 'lni-database-2',
    description: 'Dados organizados, acessíveis e consistentes para sustentar aplicações confiáveis.',
    focus: 'Modelagem de tabelas, consultas SQL, relacionamentos e organização das informações do sistema.',
    skills: ['Supabase', 'PostgreSQL', 'SQLite', 'Modelagem', 'Relacionamentos', 'Views', 'Functions', 'Triggers'],
  },
  {
    number: '04',
    name: 'Computação em Nuvem',
    icon: 'lni-cloud-2',
    description: 'Soluções preparadas para crescer com flexibilidade, segurança e eficiência operacional.',
    focus: 'Uso de serviços em nuvem, containers e ambientes escaláveis para hospedar aplicações.',
    skills: ['Google Cloud', 'BaaS', 'Vercel', 'Deploy', 'Azure', 'Docker', 'Cloud Computing'],
  },
  {
    number: '05',
    name: 'DevOps',
    icon: 'lni-git',
    description: 'Automação e colaboração para entregar software com mais velocidade e consistência.',
    focus: 'Versionamento, integração contínua e automação das etapas entre desenvolvimento e entrega.',
    skills: ['Git', 'GitHub', 'CI/CD', 'GitHub Actions', 'Pipelines', 'Containers', 'Docker'],
  },
  {
    number: '06',
    name: 'Ciência de Dados',
    icon: 'lni-bar-chart-4',
    description: 'Exploração de dados para encontrar padrões, gerar clareza e apoiar escolhas melhores.',
    focus: 'Limpeza, análise e visualização de dados para transformar informações em descobertas úteis.',
    skills: ['Python', 'Tratamento de Dados', 'Geração de Insights', 'Análise de Dados'],
  },
  {
    number: '07',
    name: 'Engenharia de Software',
    icon: 'lni-layers-1',
    description: 'Métodos e boas práticas para construir sistemas duráveis, testáveis e evolutivos.',
    focus: 'Planejamento, documentação, testes e escolhas de arquitetura ao longo do ciclo de vida do software.',
    skills: ['Git', 'UML', 'Scrum', 'Kanban', 'Arquitetura', 'Metodologias Ágeis', 'Testes', 'Documentação', 'Requisitos'],
  },
]

// Cards que ocupam duas colunas, para a grade fechar sem buracos
const WIDE_CARDS = ['01', '07']

const totalSkills = knowledgeAreas.reduce((sum, area) => sum + area.skills.length, 0)

// Rola suavemente até a área escolhida (sem alterar a URL, para não disputar com o scrollBehavior do router)
function jumpTo(number) {
  const target = document.getElementById(`area-${number}`)
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <main class="knowledge container">
    <!-- CABEÇALHO -->
    <section class="knowledge-head">
      <div class="head-copy" v-reveal>
        <p class="eyebrow">O que eu sei fazer</p>
        <h1 class="display-title">
          Conhecimento que vira <br />
          <em>solução.</em>
        </h1>
        <p class="lead">
          Uma visão das tecnologias, ferramentas e práticas que fazem parte da
          minha forma de criar produtos digitais.
        </p>
      </div>

      <dl class="head-stats" v-reveal="150">
        <div>
          <dt>Áreas</dt>
          <dd>{{ String(knowledgeAreas.length).padStart(2, '0') }}</dd>
        </div>
        <div>
          <dt>Tecnologias</dt>
          <dd>{{ totalSkills }}</dd>
        </div>
      </dl>
    </section>

    <!-- ÍNDICE RÁPIDO -->
    <nav class="jump" aria-label="Ir para uma área de conhecimento" v-reveal>
      <button
        v-for="area in knowledgeAreas"
        :key="area.number"
        type="button"
        class="jump-chip"
        @click="jumpTo(area.number)"
      >
        <span class="jump-number">{{ area.number }}</span>
        {{ area.name }}
      </button>
    </nav>

    <!-- GRADE -->
    <section class="grid" aria-label="Áreas de conhecimento">
      <article
        v-for="(area, index) in knowledgeAreas"
        :id="`area-${area.number}`"
        :key="area.number"
        class="card"
        :class="{ 'card-wide': WIDE_CARDS.includes(area.number) }"
        v-reveal="(index % 3) * 100"
      >
        <header class="card-top">
          <span class="card-icon" aria-hidden="true"><i class="lni" :class="area.icon"></i></span>
          <span class="card-number">{{ area.number }}</span>
        </header>

        <h2>{{ area.name }}</h2>
        <p class="card-desc">{{ area.description }}</p>

        <div class="card-focus">
          <span class="focus-label">Na prática</span>
          <p>{{ area.focus }}</p>
        </div>

        <footer class="card-foot">
          <span class="skill-count">{{ area.skills.length }} tecnologias</span>
          <ul class="skills" :aria-label="`Tecnologias de ${area.name}`">
            <li v-for="skill in area.skills" :key="skill" class="tag">{{ skill }}</li>
          </ul>
        </footer>
      </article>
    </section>

    <!-- CHAMADA -->
    <section class="cta-band" aria-labelledby="knowledge-cta-title" v-reveal>
      <div>
        <p class="eyebrow">Próximo passo</p>
        <h2 id="knowledge-cta-title" class="display-title cta-title">
          Quer ver o conhecimento <em>em ação?</em>
        </h2>
      </div>
      <div class="cta-actions">
        <RouterLink to="/projects" class="btn btn-cta">
          Ver projetos
          <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
        </RouterLink>
        <RouterLink to="/contact" class="btn btn-ghost-light">Entrar em contato</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.knowledge {
  padding-top: clamp(2.5rem, 6vw, 5rem);
  padding-bottom: clamp(3rem, 6vw, 5rem);
}

/* ===== CABEÇALHO ===== */
.knowledge-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.head-copy {
  max-width: 44rem;
}

.head-copy .display-title {
  margin-bottom: 1.4rem;
  font-size: clamp(2.5rem, 5.2vw, 4.4rem);
}

.head-stats {
  display: flex;
  gap: 2.5rem;
  padding-bottom: 0.6rem;
}

.head-stats dt {
  margin-bottom: 0.2rem;
  color: var(--color-text-light);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.head-stats dd {
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-style: italic;
  line-height: 0.9;
}

/* ===== ÍNDICE RÁPIDO ===== */
.jump {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.jump-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.95rem;
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text-light);
  font-size: 0.8rem;
  font-weight: 500;
  transition: border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease, transform 0.35s var(--ease-out);
}

.jump-chip:hover {
  border-color: var(--color-principal);
  background: var(--color-principal-soft);
  color: var(--color-text);
  transform: translateY(-2px);
}

.jump-number {
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-style: italic;
  font-size: 0.85rem;
}

/* ===== GRADE ===== */
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.card {
  display: flex;
  flex-direction: column;
  scroll-margin-top: 7rem;
  padding: clamp(1.6rem, 3vw, 2.1rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.55s var(--ease-out),
    box-shadow 0.55s var(--ease-out),
    border-color 0.4s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-md);
}

.card-wide {
  grid-column: span 2;
  background: linear-gradient(135deg, var(--color-principal-soft), var(--color-surface) 65%);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
}

.card-icon {
  display: grid;
  width: 3rem;
  height: 3rem;
  place-items: center;
  border-radius: 14px;
  background: var(--color-principal-soft);
  color: var(--color-principal);
  font-size: 1.25rem;
  transition: background-color 0.4s ease, color 0.4s ease, transform 0.5s var(--ease-out);
}

.card:hover .card-icon {
  background: var(--color-principal);
  color: #fff;
  transform: rotate(-8deg);
}

.card-number {
  color: var(--color-border-strong);
  font-family: var(--font-cursive);
  font-size: 2rem;
  font-style: italic;
  line-height: 1;
}

.card h2 {
  margin-bottom: 0.7rem;
  font-size: 1.4rem;
  font-weight: 500;
}

.card-desc {
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.65;
}

.card-focus {
  margin-top: 1.4rem;
  padding: 1rem 1.2rem;
  border-left: 2px solid var(--color-principal);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  background: var(--color-bg-alt);
}

.focus-label {
  display: block;
  margin-bottom: 0.3rem;
  color: var(--color-principal);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.card-focus p {
  color: var(--color-text);
  font-size: 0.84rem;
  line-height: 1.6;
}

.card-foot {
  margin-top: auto;
  padding-top: 1.4rem;
}

.skill-count {
  display: block;
  margin-bottom: 0.7rem;
  color: var(--color-text-light);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  list-style: none;
}

/* ===== CHAMADA ===== */
.cta-band {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: clamp(4rem, 8vw, 6rem);
  padding: clamp(2.2rem, 5vw, 3.8rem);
  border-radius: var(--radius-lg);
  background: var(--color-cta-bg);
  color: var(--color-cta-text);
  box-shadow: var(--shadow-lg);
}

.cta-band .eyebrow {
  color: var(--color-cta-accent);
}

.cta-title {
  color: var(--color-cta-text);
  font-size: clamp(1.9rem, 3.6vw, 2.8rem);
}

.cta-title em {
  color: var(--color-cta-accent);
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.btn-cta {
  background: var(--color-cta-text);
  border-color: var(--color-cta-text);
  color: var(--color-cta-bg);
}

.btn-cta:hover {
  background: var(--color-cta-accent);
  border-color: var(--color-cta-accent);
  color: var(--color-cta-bg);
}

.btn-ghost-light {
  border-color: rgba(255, 255, 255, 0.3);
  color: var(--color-cta-text);
}

.btn-ghost-light:hover {
  border-color: var(--color-cta-accent);
  background: rgba(255, 255, 255, 0.06);
  color: var(--color-cta-text);
}

/* ===== RESPONSIVO ===== */
@media (max-width: 960px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .card-wide {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .card-wide {
    grid-column: auto;
  }

  .head-stats {
    gap: 1.8rem;
  }

  .cta-actions {
    width: 100%;
  }

  .cta-actions .btn {
    flex: 1;
  }
}
</style>
