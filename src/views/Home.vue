<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { projects } from '../data/projects.js'
import { highlights } from '../data/highlights.js'
import ProjectCard from '../components/ProjectCard.vue'
import hero from '../assets/hero.png'
import cloud from '../assets/cloud.png'
import star from '../assets/star.png'

const featuredProjects = projects.slice(0, 4)

const workSteps = [
  { number: '01', title: 'Entender', text: 'Mergulho no problema e nas necessidades de quem vai usar.', icon: 'lni-search-1' },
  { number: '02', title: 'Planejar', text: 'Defino requisitos, prioridades e o melhor caminho.', icon: 'lni-target-user' },
  { number: '03', title: 'Desenvolver', text: 'Transformo a ideia em código claro, funcional e consistente.', icon: 'lni-code-1' },
  { number: '04', title: 'Entregar', text: 'Valido os detalhes e preparo uma solução pronta para evoluir.', icon: 'lni-check-circle-1' },
]

const focusAreas = ['Desenvolvimento web', 'APIs e integrações', 'Cloud e DevOps', 'Ciência de dados']

const studying = ['Computação em Nuvem', 'DevOps', 'Ciência de Dados', 'Arquitetura de Software']

const services = [
  { icon: 'lni-layout-9', title: 'Sistemas web', text: 'Aplicações responsivas e intuitivas, do layout ao deploy.' },
  { icon: 'lni-gears-3', title: 'APIs e integrações', text: 'APIs REST bem estruturadas que conectam sistemas e serviços.' },
  { icon: 'lni-bar-chart-4', title: 'Dados e automação', text: 'Organização de dados, relatórios e automações para decidir melhor.' },
]

// Tecnologias extraídas dos próprios projetos, sem repetição
const technologies = [...new Set(projects.flatMap((project) => project.tags.map((tag) => tag.trim())))]

const journey = [
  { year: '2023', text: 'Cloud e inteligência artificial' },
  { year: '2024', text: 'Fundamentos do desenvolvimento' },
  { year: '2025', text: 'Construção de sistemas' },
  { year: '2026', text: 'Ampliando minha visão' },
]

const stats = [
  { label: 'Projetos construídos', value: projects.length },
  { label: 'Áreas de conhecimento', value: 7 },
  { label: 'Formações', value: 2 },
]

// Contadores animados quando a faixa de números entra na tela
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const statsRef = ref(null)
const counts = ref(stats.map((stat) => (prefersReducedMotion ? stat.value : 0)))

function animateCounts() {
  if (prefersReducedMotion) return

  const duration = 1400
  const start = performance.now()

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    counts.value = stats.map((stat) => Math.round(stat.value * eased))
    if (progress < 1) requestAnimationFrame(frame)
  }

  requestAnimationFrame(frame)
}

let observer = null

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    animateCounts()
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      animateCounts()
      observer.disconnect()
    },
    { threshold: 0.5 },
  )
  observer.observe(statsRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div class="home">
  <!-- HERO -->
  <section class="hero container">
    <div class="hero-copy" v-reveal>
      <p class="status">
        <span class="status-dot" aria-hidden="true"></span>
        Disponível para conversar
      </p>
      <p class="eyebrow">Olá! Eu sou Nathalia</p>
      <h1 class="display-title hero-title">
        Desenvolvo soluções digitais que geram <em>valor real.</em>
      </h1>
      <p class="lead hero-text">
        Transformo ideias em sistemas web eficientes, combinando design, código
        e dados para entregar experiências úteis, intuitivas e escaláveis.
      </p>
      <div class="hero-actions">
        <RouterLink to="/projects" class="btn btn-primary">
          Ver meus projetos
          <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
        </RouterLink>
        <RouterLink to="/about" class="btn btn-ghost">Conhecer minha jornada</RouterLink>
      </div>
    </div>

    <div class="hero-visual" v-reveal="150">
      <div class="arch">
        <img :src="hero" alt="Retrato de Nathalia" />
      </div>

      <article class="float-card focus-card">
        <p class="float-label">Foco</p>
        <p>Construir sistemas úteis, escaláveis e que fazem a diferença.</p>
        <RouterLink to="/about" class="float-link" aria-label="Conheça minha abordagem">
          <i class="lni lni-arrow-right" aria-hidden="true"></i>
        </RouterLink>
      </article>

      <article class="float-card study-card">
        <p class="float-label">Atualmente estudando</p>
        <ul>
          <li v-for="item in studying" :key="item">{{ item }}</li>
        </ul>
        <img :src="cloud" alt="" class="study-cloud" aria-hidden="true" />
      </article>

      <div class="badge" aria-hidden="true">
        <svg viewBox="0 0 120 120" class="badge-ring">
          <defs>
            <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
          </defs>
          <text>
            <textPath href="#badge-circle">APRENDER • CRIAR • EVOLUIR •</textPath>
          </text>
        </svg>
        <img :src="star" alt="" class="badge-star" />
      </div>
    </div>
  </section>

  <!-- ÁREAS EM MARQUEE -->
  <section class="marquee" aria-label="Áreas de atuação">
    <div class="marquee-track">
      <template v-for="copy in [0, 1]" :key="copy">
        <div class="marquee-group" :aria-hidden="copy === 1 ? 'true' : undefined">
          <span v-for="area in focusAreas" :key="area + copy">
            {{ area }}
            <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
          </span>
        </div>
      </template>
    </div>
  </section>

  <!-- NÚMEROS -->
  <section ref="statsRef" class="container stats" aria-label="Resumo">
    <div v-for="(stat, index) in stats" :key="stat.label" class="stat" v-reveal="index * 100">
      <strong>{{ String(counts[index]).padStart(2, '0') }}</strong>
      <span>{{ stat.label }}</span>
    </div>
  </section>

  <!-- SERVIÇOS -->
  <section class="section container" aria-labelledby="services-title">
    <div class="section-head" v-reveal>
      <div>
        <p class="eyebrow">Como posso ajudar</p>
        <h2 id="services-title" class="display-title section-title">
          Do problema ao <em>sistema que funciona.</em>
        </h2>
      </div>
    </div>

    <div class="services-grid">
      <article
        v-for="(service, index) in services"
        :key="service.title"
        class="service-card"
        v-reveal="index * 120"
      >
        <span class="service-index" aria-hidden="true">0{{ index + 1 }}</span>
        <span class="service-icon"><i class="lni" :class="service.icon" aria-hidden="true"></i></span>
        <h3>{{ service.title }}</h3>
        <p>{{ service.text }}</p>
      </article>
    </div>
  </section>

  <!-- DESTAQUES -->
  <section v-if="highlights.length" class="section container" aria-labelledby="highlights-title">
    <div class="section-head" v-reveal>
      <div>
        <p class="eyebrow">Destaques</p>
        <h2 id="highlights-title" class="display-title section-title">
          Conquistas que <em>merecem atenção.</em>
        </h2>
      </div>
    </div>

    <div class="highlights">
      <article
        v-for="(item, index) in highlights"
        :key="item.title"
        class="highlight-card"
        v-reveal="index * 120"
      >
        <figure class="highlight-media">
          <img v-if="item.image" :src="item.image" :alt="item.title" loading="lazy" />
          <div v-else class="highlight-placeholder" aria-hidden="true">
            <i class="lni lni-certificate-badge-1"></i>
          </div>
        </figure>

        <div class="highlight-body">
          <p class="highlight-kind">{{ item.kind }}</p>
          <h3>{{ item.title }}</h3>
          <p v-if="item.issuer || item.date" class="highlight-meta">
            {{ item.issuer }}<span v-if="item.issuer && item.date"> · </span>{{ item.date }}
          </p>
          <p class="highlight-desc">{{ item.description }}</p>
          <a
            v-if="item.link"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="link-arrow"
          >
            Ver certificado
            <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
          </a>
        </div>
      </article>
    </div>
  </section>

  <!-- PROJETOS EM DESTAQUE -->
  <section class="section container" aria-labelledby="featured-title">
    <div class="section-head" v-reveal>
      <div>
        <p class="eyebrow">Projetos em destaque</p>
        <h2 id="featured-title" class="display-title section-title">
          Ideias que ganharam <em>forma.</em>
        </h2>
      </div>
      <RouterLink to="/projects" class="link-arrow">
        Ver todos os projetos
        <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
      </RouterLink>
    </div>

    <div class="featured-grid">
      <div v-for="(project, index) in featuredProjects" :key="project.number" v-reveal="index * 110">
        <ProjectCard :project="project" />
      </div>
    </div>
  </section>

  <!-- TECNOLOGIAS -->
  <section class="section container" aria-labelledby="stack-title">
    <div class="stack-layout">
      <div class="stack-copy" v-reveal>
        <p class="eyebrow">Stack</p>
        <h2 id="stack-title" class="display-title section-title">
          Tecnologias que <em>aparecem nos projetos.</em>
        </h2>
        <p class="lead">
          Ferramentas que uso na prática, dos projetos acadêmicos aos estudos
          em andamento.
        </p>
        <RouterLink to="/knowledge" class="link-arrow">
          Ver todas as áreas
          <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
        </RouterLink>
      </div>

      <ul class="tech-cloud" v-reveal="120" aria-label="Tecnologias usadas nos projetos">
        <li
          v-for="(tech, index) in technologies"
          :key="tech"
          class="tech-chip"
          :style="{ '--i': index }"
        >
          {{ tech }}
        </li>
      </ul>
    </div>
  </section>

  <!-- PROCESSO -->
  <section class="section container" aria-labelledby="process-title">
    <div class="process-intro" v-reveal>
      <p class="eyebrow">Como eu trabalho</p>
      <h2 id="process-title" class="display-title section-title">
        Do problema à solução, com <em>intenção.</em>
      </h2>
      <p class="lead">
        Uma forma de construir que combina curiosidade, organização e atenção ao
        que realmente faz diferença.
      </p>
    </div>

    <ol class="process-grid">
      <li v-for="(step, index) in workSteps" :key="step.number" class="process-step" v-reveal="index * 120">
        <div class="step-top">
          <span class="step-icon"><i class="lni" :class="step.icon" aria-hidden="true"></i></span>
          <span class="step-number">{{ step.number }}</span>
        </div>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </li>
    </ol>
  </section>

  <!-- JORNADA (PRÉVIA) -->
  <section class="section container" aria-labelledby="journey-teaser-title">
    <div class="section-head" v-reveal>
      <div>
        <p class="eyebrow">Minha jornada</p>
        <h2 id="journey-teaser-title" class="display-title section-title">
          Um aprendizado que <em>não para.</em>
        </h2>
      </div>
      <RouterLink to="/about" class="link-arrow">
        Ver jornada completa
        <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
      </RouterLink>
    </div>

    <ol class="journey-track">
      <li v-for="(step, index) in journey" :key="step.year" class="journey-step" v-reveal="index * 120">
        <span class="journey-dot" aria-hidden="true"></span>
        <span class="journey-year">{{ step.year }}</span>
        <p>{{ step.text }}</p>
      </li>
    </ol>
  </section>

  <!-- SOBRE -->
  <section class="section container about-preview" aria-labelledby="about-preview-title">
    <div class="about-mark" v-reveal aria-hidden="true">N</div>
    <div class="about-copy" v-reveal="120">
      <p class="eyebrow">Sobre mim</p>
      <h2 id="about-preview-title" class="display-title section-title">
        Curiosidade que se transforma em <em>código.</em>
      </h2>
      <p class="lead">
        Sou desenvolvedora de sistemas em formação e gosto de transformar ideias
        em experiências digitais úteis, combinando design, código e dados.
      </p>
      <RouterLink to="/about" class="link-arrow about-link">
        Conheça minha jornada
        <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
      </RouterLink>
    </div>
    <dl class="facts" v-reveal="200">
      <div class="fact">
        <dt>Projetos construídos</dt>
        <dd>12</dd>
      </div>
      <div class="fact">
        <dt>Áreas de conhecimento</dt>
        <dd>07</dd>
      </div>
    </dl>
  </section>

  <!-- CHAMADA FINAL -->
  <section class="container cta-section" aria-labelledby="contact-preview-title" v-reveal>
    <div class="cta-band">
      <div class="cta-copy">
        <p class="eyebrow">Vamos conversar</p>
        <h2 id="contact-preview-title" class="display-title section-title">
          Tem uma ideia? Vamos criar algo <em>que importa.</em>
        </h2>
      </div>
      <RouterLink to="/contact" class="btn btn-cta">
        Entrar em contato
        <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
      </RouterLink>
    </div>
  </section>
  </div>
</template>

<style scoped>
/* Raiz única para a transição de página */
.home {
  display: block;
}
</style>

<style scoped>
/* ================= HERO ================= */
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(2.5rem, 5vw, 5rem);
  min-height: calc(100vh - var(--header-h));
  padding-block: clamp(2.5rem, 6vw, 5rem);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text-light);
  font-size: 0.76rem;
  box-shadow: var(--shadow-sm);
}

.status-dot {
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #4fbf8b;
}

.status-dot::after {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: inherit;
  content: '';
  animation: ping 2.2s var(--ease-out) infinite;
}

.hero-title {
  font-size: clamp(2.6rem, 5.6vw, 4.6rem);
  margin-bottom: 1.5rem;
}

.hero-text {
  margin-bottom: 2.4rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
}

/* Composição visual */
.hero-visual {
  position: relative;
  height: clamp(30rem, 44vw, 38rem);
}

.arch {
  position: absolute;
  top: 0;
  right: 6%;
  bottom: 0;
  left: 16%;
  overflow: hidden;
  border-radius: 999px 999px var(--radius-lg) var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.arch img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.4s var(--ease-out);
}

.hero-visual:hover .arch img {
  transform: scale(1.09);
}

.float-card {
  position: absolute;
  z-index: 2;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-surface) 92%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--shadow-md);
  animation: float 7s ease-in-out infinite;
}

.focus-card {
  top: 10%;
  left: 0;
  width: 13.5rem;
  padding: 1.2rem 1.3rem;
  animation-delay: -1s;
}

.focus-card p:not(.float-label) {
  margin-bottom: 1rem;
  color: var(--color-text);
  font-size: 0.82rem;
  line-height: 1.55;
}

.float-label {
  margin-bottom: 0.6rem;
  color: var(--color-principal);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.float-link {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-principal);
  color: #fff;
  transition: transform 0.4s var(--ease-out), background-color 0.3s ease;
}

.float-link:hover {
  transform: translateX(3px);
  background: var(--color-principal-strong);
}

.study-card {
  right: 0;
  bottom: 3%;
  width: 17.5rem;
  overflow: hidden;
  padding: 1.3rem 1.4rem;
  background: var(--color-cta-bg);
  border-color: transparent;
  color: #f1edf5;
  animation-delay: -3s;
}

.study-card .float-label {
  color: var(--color-cta-accent);
}

.study-card ul {
  display: grid;
  gap: 0.35rem;
  list-style: none;
  font-size: 0.82rem;
  color: rgba(241, 237, 245, 0.86);
}

.study-card li::before {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.6rem;
  border-radius: 50%;
  background: var(--color-principal);
  content: '';
  vertical-align: middle;
}

.study-cloud {
  position: absolute;
  right: -2.5rem;
  bottom: -2rem;
  width: 9rem;
  opacity: 0.28;
  pointer-events: none;
}

/* Selo giratório */
.badge {
  position: absolute;
  z-index: 3;
  top: 46%;
  left: 2%;
  display: grid;
  width: 6rem;
  height: 6rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-bg);
  box-shadow: var(--shadow-sm);
}

.badge-ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  animation: spin 22s linear infinite;
}

.badge-ring text {
  fill: var(--color-principal);
  font-size: 13.3px;
  font-weight: 600;
  letter-spacing: 2.4px;
}

.badge-star {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
}

/* ================= MARQUEE ================= */
.marquee {
  overflow: hidden;
  border-block: 1px solid var(--color-border);
  background: var(--color-bg-alt);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 38s linear infinite;
}

.marquee-group {
  display: flex;
  flex-shrink: 0;
}

.marquee-group span {
  display: inline-flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.35rem 1.6rem;
  color: var(--color-text);
  font-family: var(--font-cursive);
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  font-style: italic;
  white-space: nowrap;
}

.marquee-group i {
  color: var(--color-principal);
  font-size: 0.7em;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

/* ================= SEÇÕES ================= */
.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
}

.section-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
}

.featured-grid > div {
  display: flex;
}

.featured-grid > div > :deep(a) {
  width: 100%;
}

/* ================= PROCESSO ================= */
.process-intro {
  max-width: 44rem;
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
}

.process-intro .section-title,
.process-intro h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
}

.process-intro .lead {
  margin-top: 1.2rem;
}

.process-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
  list-style: none;
}

.process-step {
  position: relative;
  padding: 1.8rem 1.6rem 2rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  transition: transform 0.5s var(--ease-out), border-color 0.4s ease, box-shadow 0.5s var(--ease-out);
}

.process-step:hover {
  transform: translateY(-4px);
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-md);
}

.step-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
}

.step-icon {
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

.process-step:hover .step-icon {
  background: var(--color-principal);
  color: #fff;
  transform: rotate(-8deg);
}

.step-number {
  color: var(--color-border-strong);
  font-family: var(--font-cursive);
  font-size: 2rem;
  font-style: italic;
  line-height: 1;
}

.process-step h3 {
  margin-bottom: 0.6rem;
  font-size: 1.1rem;
  font-weight: 500;
}

.process-step p {
  color: var(--color-text-light);
  font-size: 0.86rem;
  line-height: 1.65;
}

/* ================= SOBRE (PREVIEW) ================= */
.about-preview {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: clamp(2rem, 4vw, 4rem);
}

.about-mark {
  display: grid;
  width: clamp(7rem, 12vw, 9.5rem);
  height: clamp(7rem, 12vw, 9.5rem);
  place-items: center;
  border: 1px solid var(--color-border-strong);
  border-radius: 50%;
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: clamp(4rem, 7vw, 5.5rem);
  font-style: italic;
  background: radial-gradient(circle at 30% 20%, var(--color-principal-soft), transparent 70%);
}

.about-copy .section-title {
  margin-bottom: 0.4rem;
}

.about-copy .lead {
  margin-bottom: 1.6rem;
}

.about-link {
  display: inline-flex;
}

.facts {
  display: flex;
  gap: 2.5rem;
  padding-left: 2.5rem;
  border-left: 1px solid var(--color-border);
}

.fact dt {
  margin-bottom: 0.3rem;
  color: var(--color-text-light);
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.fact dd {
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: clamp(2.6rem, 4.5vw, 3.6rem);
  font-style: italic;
  line-height: 1;
}

/* ================= CTA ================= */
.cta-section {
  padding-bottom: clamp(4rem, 8vw, 6rem);
}

.cta-band {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  overflow: hidden;
  padding: clamp(2.5rem, 6vw, 4.5rem);
  border-radius: var(--radius-lg);
  background: var(--color-cta-bg);
  color: var(--color-cta-text);
  box-shadow: var(--shadow-lg);
  isolation: isolate;
}

.cta-band::before {
  position: absolute;
  top: -40%;
  right: -10%;
  z-index: -1;
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--color-principal) 45%, transparent), transparent 65%);
  content: '';
  animation: drift 12s ease-in-out infinite alternate;
}

.cta-copy .eyebrow {
  color: var(--color-cta-accent);
}

.cta-copy .section-title {
  max-width: 36rem;
  color: var(--color-cta-text);
  font-size: clamp(1.9rem, 3.6vw, 2.9rem);
}

.cta-copy .section-title em {
  color: var(--color-cta-accent);
}

.btn-cta {
  background: #fff;
  color: #2a2530;
  border-color: #fff;
}

.btn-cta:hover {
  background: var(--color-cta-accent);
  border-color: var(--color-cta-accent);
  box-shadow: 0 14px 30px -10px rgba(0, 0, 0, 0.5);
}

/* ================= DESTAQUES ================= */
.highlights {
  display: grid;
  gap: 1.5rem;
}

.highlight-card {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-md);
  transition:
    transform 0.55s var(--ease-out),
    box-shadow 0.55s var(--ease-out),
    border-color 0.4s ease;
}

.highlight-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-lg);
}

.highlight-media {
  display: grid;
  min-height: 20rem;
  margin: 0;
  place-items: center;
  overflow: hidden;
  background: var(--color-surface-2);
}

.highlight-media img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1.5rem;
  transition: transform 0.9s var(--ease-out);
}

.highlight-card:hover .highlight-media img {
  transform: scale(1.03);
}

.highlight-placeholder {
  display: grid;
  width: 6rem;
  height: 6rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-principal-soft);
  color: var(--color-principal);
  font-size: 2.6rem;
}

.highlight-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  padding: clamp(1.8rem, 4vw, 3rem);
}

.highlight-kind {
  color: var(--color-principal);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.highlight-body h3 {
  font-family: var(--font-cursive);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-style: italic;
  font-weight: 400;
  line-height: 1.15;
}

.highlight-meta {
  color: var(--color-text);
  font-size: 0.86rem;
  font-weight: 500;
}

.highlight-desc {
  color: var(--color-text-light);
  font-size: 0.92rem;
  line-height: 1.7;
}

.highlight-body .link-arrow {
  align-self: flex-start;
  margin-top: 0.4rem;
}

@media (max-width: 800px) {
  .highlight-card {
    grid-template-columns: 1fr;
  }

  .highlight-media {
    min-height: 14rem;
  }
}

/* ================= NÚMEROS ================= */
.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: clamp(3rem, 6vw, 4.5rem);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
  text-align: center;
}

.stat strong {
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-style: italic;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.stat span {
  margin-top: 0.6rem;
  color: var(--color-text-light);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ================= SERVIÇOS ================= */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.service-card {
  position: relative;
  overflow: hidden;
  padding: 2.2rem 2rem 2.4rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.55s var(--ease-out),
    box-shadow 0.55s var(--ease-out),
    border-color 0.4s ease;
}

.service-card::after {
  position: absolute;
  right: -4rem;
  bottom: -4rem;
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  background: radial-gradient(circle, var(--color-principal-soft), transparent 70%);
  content: '';
  pointer-events: none;
  transition: transform 0.8s var(--ease-out);
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-md);
}

.service-card:hover::after {
  transform: scale(1.35);
}

.service-index {
  position: absolute;
  top: 1.5rem;
  right: 1.8rem;
  color: var(--color-border-strong);
  font-family: var(--font-cursive);
  font-size: 1.6rem;
  font-style: italic;
  line-height: 1;
}

.service-icon {
  display: grid;
  width: 3.2rem;
  height: 3.2rem;
  margin-bottom: 1.6rem;
  place-items: center;
  border-radius: 16px;
  background: var(--color-principal-soft);
  color: var(--color-principal);
  font-size: 1.35rem;
  transition: background-color 0.4s ease, color 0.4s ease, transform 0.5s var(--ease-out);
}

.service-card:hover .service-icon {
  background: var(--color-principal);
  color: #fff;
  transform: rotate(-8deg);
}

.service-card h3 {
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
  font-weight: 500;
}

.service-card p {
  max-width: 22rem;
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.7;
}

/* ================= TECNOLOGIAS ================= */
.stack-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  gap: clamp(2.5rem, 5vw, 5rem);
}

.stack-copy .lead {
  margin: 1.2rem 0 1.8rem;
}

.tech-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  list-style: none;
}

.tech-chip {
  padding: 0.6rem 1.1rem;
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 0.84rem;
  box-shadow: var(--shadow-sm);
  animation: chip-in 0.6s var(--ease-out) both;
  animation-delay: calc(var(--i) * 30ms);
  transition:
    transform 0.45s var(--ease-out),
    border-color 0.3s ease,
    color 0.3s ease,
    background-color 0.3s ease;
}

.tech-chip:hover {
  transform: translateY(-3px);
  border-color: var(--color-principal);
  background: var(--color-principal-soft);
  color: var(--color-principal);
}

/* ================= JORNADA (PRÉVIA) ================= */
.journey-track {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  list-style: none;
}

.journey-track::before {
  position: absolute;
  top: calc(0.45rem - 1px);
  right: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-principal), var(--color-border));
  content: '';
}

.journey-step {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding-right: 1.5rem;
}

.journey-dot {
  position: relative;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background: var(--color-principal);
  box-shadow: 0 0 0 6px var(--color-bg);
}

.journey-year {
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: 1.8rem;
  font-style: italic;
  line-height: 1;
}

.journey-step p {
  color: var(--color-text-light);
  font-size: 0.88rem;
  line-height: 1.6;
}

@keyframes chip-in {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
}

/* ================= ANIMAÇÕES ================= */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(2.8);
    opacity: 0;
  }
}

@keyframes drift {
  to {
    transform: translate(-4rem, 3rem);
  }
}

/* ================= RESPONSIVO ================= */
@media (max-width: 1100px) {
  .featured-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .process-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 960px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero-visual {
    height: clamp(28rem, 90vw, 36rem);
    max-width: 38rem;
    width: 100%;
    margin-inline: auto;
  }

  .about-preview {
    grid-template-columns: 1fr;
    justify-items: start;
  }

  .facts {
    padding-left: 0;
    border-left: none;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
    width: 100%;
  }
}

@media (max-width: 640px) {
  .featured-grid,
  .process-grid {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    height: 30rem;
  }

  .arch {
    left: 8%;
    right: 8%;
  }

  .focus-card {
    top: 32%;
    width: 11.5rem;
    padding: 0.9rem 1rem;
  }

  .focus-card p:not(.float-label) {
    font-size: 0.72rem;
  }

  .study-card {
    width: 15.5rem;
    right: 0;
    bottom: 2%;
    padding: 1rem 1.1rem;
  }

  .study-card ul {
    font-size: 0.72rem;
  }

  .badge {
    width: 5.2rem;
    height: 5.2rem;
    left: 0;
    top: 69%;
  }

  .badge-star {
    width: 1.7rem;
    height: 1.7rem;
  }

  .cta-band {
    padding: 2rem 1.5rem;
  }

  .btn-cta {
    width: 100%;
  }
}

@media (max-width: 960px) {
  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stack-layout {
    grid-template-columns: 1fr;
  }

  .journey-track {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 2.5rem;
  }

  .journey-track::before {
    display: none;
  }
}

@media (max-width: 640px) {
  .stats,
  .services-grid,
  .journey-track {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tech-chip {
    animation: none;
  }

  .float-card,
  .marquee-track,
  .badge-ring,
  .cta-band::before,
  .status-dot::after {
    animation: none;
  }
}
</style>
