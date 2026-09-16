<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { projects } from "../data/projects.js";

const featuredProjects = projects.slice(0, 4);

const workSteps = [
  { number: "01", title: "Entender", text: "Mergulho no problema e nas necessidades de quem vai usar." },
  { number: "02", title: "Planejar", text: "Defino requisitos, prioridades e o melhor caminho." },
  { number: "03", title: "Desenvolver", text: "Transformo a ideia em código claro, funcional e consistente." },
  { number: "04", title: "Entregar", text: "Valido os detalhes e preparo uma solução pronta para evoluir." },
];

const focusAreas = ["Desenvolvimento web", "APIs e integrações", "Cloud e DevOps", "Ciência de dados"];
</script>

<template>
  <Header />
  <section class="hero">
    <div class="hero-content">
      <p class="apresentation">OLÁ! EU SOU NATHALIA</p>
      <h1 class="title">DESENVOLVO SOLUÇÕES</h1>
      <h1 class="title">DIGITAIS QUE GERAM</h1>
      <h1 class="title-cursive">valor real.</h1>
      <p class="text">
        Transformo ideias em sistemas web eficientes, combinando design, código
        e dados para entregar experiência úteis, intuitivas e escaláves.
      </p>
      <div class="buttons">
        <RouterLink to="/projects" class="button-projects">
          VER MEUS PROJETOS
          <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
        </RouterLink>
        <RouterLink to="/about" class="button-about">
          CONHECER MINHA JORNADA
          <i class="lni lni-arrow-upward" aria-hidden="true"></i>
        </RouterLink>
      </div>
    </div>
    
    <div class="hero-image">
      <img src="../assets/hero.png" alt="Hero Image" />
      
      <article class="focus-card">
        <h2>FOCO</h2>
        <p>Construir sistemas úteis, escaláveis e que fazem a diferença.</p>
        <RouterLink
          to="/about"
          class="focus-link"
          aria-label="Conheça minha abordagem"
        >
          <i class="lni lni-arrow-right" aria-hidden="true"></i>
        </RouterLink>
      </article>

      <article class="study-card">
        <div class="study-card-content">
          <p class="study-label">ATUALMENTE</p>
          <h2>Estudando</h2>
          <ul>
            <li>Computação em Nuvem</li>
            <li>DevOps</li>
            <li>Ciência de Dados</li>
            <li>Arquitetura de Software</li>
          </ul>
          <RouterLink to="/knowledge" class="study-link">
            VER MAIS
            <span aria-hidden="true">&#8594;</span>
          </RouterLink>
        </div>
        <div class="study-cloud" aria-hidden="true">
          <img src="../assets/cloud.png" alt="Nuvem" />
        </div>
      </article>
    </div>
  </section>

  <main class="home-content">
    <section class="areas-strip" aria-label="Áreas de atuação">
      <div class="section-marker"><span>✳</span><strong>MINHAS ÁREAS</strong></div>
      <div class="area-list">
        <span v-for="area in focusAreas" :key="area">{{ area }}</span>
      </div>
      <RouterLink to="/knowledge" class="inline-link">
        VER CONHECIMENTOS
        <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
      </RouterLink>
    </section>

    <section class="home-section projects-preview" aria-labelledby="featured-title">
      <div class="section-heading-row">
        <div>
          <p class="section-kicker">PROJETOS EM DESTAQUE</p>
          <h2 id="featured-title">Ideias que ganharam <em>forma.</em></h2>
        </div>
        <RouterLink to="/projects" class="inline-link">
          VER TODOS OS PROJETOS
          <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
        </RouterLink>
      </div>

      <div class="featured-grid">
        <RouterLink
          v-for="project in featuredProjects"
          :key="project.number"
          :to="`/projects/${project.number}`"
          class="featured-card"
        >
          <div class="featured-image">
            <img :src="project.image" :alt="`Imagem do projeto ${project.name}`" :style="{ objectPosition: project.imagePosition }" />
            <span>{{ project.number }}</span>
            <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
          </div>
          <div class="featured-info">
            <p>{{ project.type }}</p>
            <h3>{{ project.name }}</h3>
            <div class="tag-row">
              <span v-for="tag in project.tags.slice(0, 3)" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="home-section process-section" aria-labelledby="process-title">
      <div class="process-intro">
        <p class="section-kicker">COMO EU TRABALHO</p>
        <h2 id="process-title">Do problema à solução, com <em>intenção.</em></h2>
        <p>Uma forma de construir que combina curiosidade, organização e atenção ao que realmente faz diferença.</p>
      </div>
      <div class="process-grid">
        <article v-for="(step, index) in workSteps" :key="step.number" class="process-step">
          <div class="step-icon"><i class="lni" :class="['lni-search-1', 'lni-target-user', 'lni-code-1', 'lni-check-circle-1'][index]" aria-hidden="true"></i></div>
          <span>{{ step.number }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </section>

    <section class="home-section about-preview" aria-labelledby="about-preview-title">
      <div class="about-preview-mark">N</div>
      <div class="about-preview-copy">
        <p class="section-kicker">SOBRE MIM</p>
        <h2 id="about-preview-title">Curiosidade que se transforma em <em>código.</em></h2>
        <p>Sou desenvolvedora de sistemas em formação e gosto de transformar ideias em experiências digitais úteis, combinando design, código e dados.</p>
        <RouterLink to="/about" class="text-link">CONHEÇA MINHA JORNADA <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i></RouterLink>
      </div>
      <div class="about-facts">
        <div class="fact-item">
          <strong>12</strong><span>projetos<br />construídos</span>
        </div>
        <div class="fact-item">
          <strong>07</strong><span>áreas de<br />conhecimento</span>
        </div>
      </div>
    </section>

    <section class="contact-preview" aria-labelledby="contact-preview-title">
      <div>
        <p class="section-kicker">VAMOS CONVERSAR</p>
        <h2 id="contact-preview-title">Tem uma ideia? Vamos criar algo <em>que importa.</em></h2>
      </div>
      <RouterLink to="/contact" class="contact-preview-link">
        ENTRAR EM CONTATO
        <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
      </RouterLink>
    </section>
  </main>
  <Footer />
</template>

<style scoped>
/* ================= HERO (INTACTA - SEM ALTERAÇÕES) ================= */
.hero {
  min-height: 42rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2.5rem;
  overflow-x: hidden;
}

.hero-content {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.apresentation {
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 600;
  color: var(--color-principal);
  margin-bottom: 0.5rem;
}

.title {
  font-size: clamp(2.2rem, 4vw, 3.3rem);
  font-weight: 400;
  margin-bottom: -0.7rem;
  line-height: 1.1;
}

.title-cursive {
  font-size: clamp(3rem, 5vw, 4.3rem);
  font-weight: 420;
  font-style: italic;
  transform: skewX(-18deg);
  transform-origin: left center;
  color: var(--color-principal);
  width: 100%;
  margin-top: -0.5rem;
  font-family: var(--font-cursive);
}

.text {
  font-size: clamp(0.95rem, 1.5vw, 1.04rem);
  max-width: 35rem;
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.button-projects, .button-about {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.button-projects {
  background-color: #000;
  color: #fff;
}

.button-about {
  border: 1px solid var(--color-principal);
  color: var(--color-principal);
  background-color: transparent;
}

.button-projects:hover, .button-about:hover {
  background-color: var(--color-principal);
  color: #fff;
}

.buttons .lni {
  flex-shrink: 0;
  font-size: 1rem;
}

.hero-image {
  width: 55%;
  height: 100%;
  min-height: 35rem;
  padding: 1rem 0;
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.hero-image img {
  width: 85%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.focus-card {
  position: absolute;
  top: 2rem;
  left: 0;
  width: 12rem;
  padding: 1.35rem;
  background: #fdfcfc;
  border: 1px solid #e7e3e9;
  border-radius: 10px;
  box-shadow: 0 0.4rem 1rem rgba(36, 20, 47, 0.09);
  z-index: 2;
}

.focus-card h2 {
  margin-bottom: 0.9rem;
  color: var(--color-principal);
  font-size: 0.8rem;
  font-weight: 600;
}

.focus-card p {
  color: #29272b;
  font-size: 0.7rem;
  line-height: 1.55;
  margin-bottom: 1.5rem;
}

.focus-link {
  position: absolute;
  right: 1.1rem;
  bottom: 1.1rem;
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-principal);
  color: #fff;
  text-decoration: none;
  transition: background 0.3s;
}

.focus-link:hover {
  background: #000;
}

.study-card {
  position: absolute;
  right: -2rem;
  bottom: 2rem;
  width: 20rem;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  background: #08080a;
  border-radius: 10px;
  color: #fff;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.study-card-content {
  position: relative;
  z-index: 2;
}

.study-label {
  margin-bottom: 0.3rem;
  color: #b38bd0;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 1px;
}

.study-card h2 {
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  font-weight: 400;
}

.study-card ul {
  display: grid;
  gap: 0.2rem;
  padding: 0;
  list-style: none;
  color: #d8d8dc;
  font-size: 0.8rem;
}

.study-card li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.study-card li::before {
  content: "•";
  color: var(--color-principal);
  font-size: 1.2rem;
}

.study-link {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1.2rem;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}

.study-link:hover {
  color: var(--color-principal);
}

.study-cloud {
  position: absolute;
  bottom: -1rem;
  right: -3rem;
  width: 15rem;
  opacity: 0.4;
  z-index: 1;
}

.study-cloud img {
  width: 100%;
  height: auto;
}

/* ================= CONTEÚDO DA HOME (AJUSTADO E RESPONSIVO) ================= */
.home-content {
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2.5rem 6rem;
  box-sizing: border-box;
}

/* --- ÁREAS DE ATUAÇÃO --- */
.areas-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 5rem;
  padding: 1.2rem 0;
  border-top: 1px solid #e2dce5;
  border-bottom: 1px solid #e2dce5;
}

.section-marker,
.area-list,
.inline-link,
.section-heading-row,
.about-facts,
.contact-preview-link {
  display: flex;
  align-items: center;
}

.section-marker {
  gap: 0.7rem;
  flex-shrink: 0;
  color: #1b171d;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
}

.section-marker span {
  color: var(--color-principal);
  font-size: 1rem;
}

.area-list {
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 0.75rem 1.25rem;
  color: #625c65;
  font-size: 0.8rem;
  font-weight: 500;
}

.inline-link,
.text-link {
  gap: 0.55rem;
  color: var(--color-principal);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.inline-link:hover,
.text-link:hover {
  color: #17131a;
}

/* --- SEÇÕES GERAIS --- */
.home-section {
  padding: 5rem 0;
}

.section-heading-row {
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.section-kicker {
  margin-bottom: 0.6rem;
  color: var(--color-principal);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.section-heading-row h2,
.process-intro h2,
.about-preview h2,
.contact-preview h2 {
  color: #17131a;
  font-size: clamp(1.8rem, 3.5vw, 3.1rem);
  font-weight: 400;
  line-height: 1.08;
}

.section-heading-row h2 em,
.process-intro h2 em,
.about-preview h2 em,
.contact-preview h2 em {
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-style: italic;
  font-weight: 420;
}

/* --- PROJETOS EM DESTAQUE --- */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.featured-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e5dfe8;
  border-radius: 12px;
  background: #fff;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 0.8rem 1.8rem rgba(55, 33, 66, 0.05);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.featured-card:hover {
  transform: translateY(-0.35rem);
  box-shadow: 0 1.2rem 2.5rem rgba(55, 33, 66, 0.12);
}

.featured-image {
  position: relative;
  height: 12rem;
  overflow: hidden;
  background: #eeeaf0;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease;
}

.featured-card:hover .featured-image img { 
  transform: scale(1.04); 
}

.featured-image span {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  color: #fff;
  font-family: var(--font-cursive);
  font-size: 1.25rem;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
}

.featured-image i {
  position: absolute;
  right: 0.8rem;
  bottom: 0.8rem;
  display: grid;
  width: 2.2rem;
  height: 2.2rem;
  place-items: center;
  border-radius: 50%;
  background: #fff;
  color: var(--color-principal);
  font-size: 0.9rem;
}

.featured-info { 
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.2rem; 
}

.featured-info > p { 
  margin-bottom: 0.45rem; 
  color: var(--color-principal); 
  font-size: 0.68rem; 
  font-weight: 600; 
  letter-spacing: 0.1em; 
}

.featured-info h3 { 
  margin-bottom: 0.8rem;
  color: #19151c; 
  font-size: 1.05rem; 
  font-weight: 500; 
  line-height: 1.3; 
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
}

.tag-row span {
  padding: 0.3rem 0.55rem;
  border-radius: 4px;
  background: #f0e9f3;
  color: #70577c;
  font-size: 0.65rem;
  font-weight: 500;
}

/* --- PROCESSO DE TRABALHO --- */
.process-section {
  display: grid;
  grid-template-columns: minmax(15rem, 0.8fr) 1.7fr;
  gap: 4rem;
  border-top: 1px solid #e2dce5;
  border-bottom: 1px solid #e2dce5;
}

.process-intro > p:last-child,
.about-preview-copy > p:not(.section-kicker) {
  max-width: 28rem;
  margin-top: 1.2rem;
  color: #68636c;
  font-size: 0.88rem;
  line-height: 1.7;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.process-step { 
  position: relative; 
  border-top: 1px solid #cfc1d6; 
  padding-top: 1.5rem; 
}

.process-step::before { 
  position: absolute; 
  top: -0.25rem; 
  left: 0; 
  width: 0.45rem; 
  height: 0.45rem; 
  border-radius: 50%; 
  background: var(--color-principal); 
  content: ""; 
}

.step-icon { 
  display: grid; 
  width: 2.8rem; 
  height: 2.8rem; 
  margin-bottom: 1.2rem; 
  place-items: center; 
  border-radius: 50%; 
  background: #f0e5f5; 
  color: var(--color-principal); 
  font-size: 1.2rem; 
}

.process-step > span { 
  color: var(--color-principal); 
  font-size: 0.7rem; 
  font-weight: 600; 
}

.process-step h3 { 
  margin: 0.35rem 0 0.65rem; 
  color: #19151c; 
  font-size: 1.05rem; 
  font-weight: 500; 
}

.process-step p { 
  color: #77717a; 
  font-size: 0.78rem; 
  line-height: 1.6; 
}

/* --- ABOUT PREVIEW --- */
.about-preview {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 3.5rem;
}

.about-preview-mark {
  display: grid;
  width: 7.5rem;
  height: 7.5rem;
  flex-shrink: 0;
  place-items: center;
  border: 1px solid #d9c8df;
  border-radius: 50%;
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: 4.8rem;
  font-style: italic;
}

.about-preview-copy h2 { 
  max-width: 36rem; 
}

.text-link { 
  display: inline-flex; 
  align-items: center;
  margin-top: 1.5rem; 
}

.about-facts { 
  display: flex;
  gap: 2rem; 
  border-left: 1px solid #d9d1dd; 
  padding-left: 2.5rem; 
}

.fact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.about-facts strong { 
  color: var(--color-principal); 
  font-family: var(--font-cursive); 
  font-size: clamp(2.5rem, 4vw, 3.2rem); 
  font-weight: 400; 
  line-height: 1; 
}

.about-facts span { 
  color: #68636c; 
  font-size: 0.7rem; 
  line-height: 1.35; 
  text-transform: uppercase; 
}

/* --- CONTACT PREVIEW --- */
.contact-preview {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 3.5rem 4rem;
  border-radius: 12px;
  background: #0b0a0d;
  color: #fff;
}

.contact-preview h2 { 
  max-width: 42rem; 
  color: #fff; 
}

.contact-preview-link { 
  display: inline-flex;
  align-items: center;
  gap: 0.8rem; 
  flex-shrink: 0; 
  padding: 0.9rem 1.4rem; 
  border: 1px solid #a980bd; 
  border-radius: 6px; 
  color: #fff; 
  font-size: 0.75rem; 
  font-weight: 600; 
  letter-spacing: 0.05em;
  text-decoration: none; 
  transition: all 0.2s ease;
}

.contact-preview-link:hover { 
  background: var(--color-principal); 
  border-color: var(--color-principal); 
}

/* ================= BREAKPOINTS RESPONSIVOS (HOME CONTENT) ================= */

/* Desktops Médios e Laptops (<= 1200px) */
@media (max-width: 1200px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-preview {
    grid-template-columns: auto 1fr;
  }

  .about-facts {
    grid-column: span 2;
    border-left: none;
    border-top: 1px solid #d9d1dd;
    padding-left: 0;
    padding-top: 1.5rem;
  }
}

/* Tablets e Telas Médias (<= 1024px) */
@media (max-width: 1024px) {
  /* Regras originais da Hero mantidas */
  .hero {
    flex-direction: column;
    padding: 3rem 2rem;
    gap: 3rem;
  }
  
  .hero-content, .hero-image {
    width: 100%;
  }

  .hero-image {
    justify-content: center;
    min-height: 40rem;
  }
  
  .hero-image img {
    width: 100%;
    max-width: 600px;
  }

  .focus-card {
    left: 2rem;
    top: 1rem;
  }

  .study-card {
    right: 2rem;
    bottom: -1rem;
    width: 22rem;
  }

  /* Ajustes da Home Content para Tablet */
  .process-section { 
    grid-template-columns: 1fr; 
    gap: 2.5rem; 
  }

  .process-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1.5rem;
  }
}

/* Tablets Intermediários (<= 800px) */
@media (max-width: 800px) {
  .about-preview {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-preview-mark {
    display: none; /* Oculta a marca d'água no tablet/mobile para economizar espaço */
  }

  .about-facts {
    grid-column: span 1;
  }

  .contact-preview {
    padding: 2.5rem 2rem;
  }
}

/* Mobile (<= 600px) */
@media (max-width: 600px) {
  /* Regras originais da Hero mantidas */
  .hero {
    padding: 2rem 1.25rem;
    gap: 2rem;
  }

  .title {
    font-size: clamp(2rem, 8vw, 2.8rem);
    margin-bottom: 0;
  }
  
  .title-cursive {
    font-size: clamp(2.8rem, 10vw, 3.5rem);
    margin-top: 0;
  }

  .buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .button-projects, .button-about {
    width: 100%;
  }

  .hero-image {
    min-height: 35rem;
    padding-bottom: 2rem;
  }

  .focus-card {
    top: -1rem;
    left: 0;
    width: 11rem;
    max-width: 11rem;
    min-height: auto;
    padding: 0.8rem;
  }

  .focus-card h2 {
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
  }

  .focus-card p {
    margin-bottom: 1rem;
    font-size: 0.68rem;
    line-height: 1.4;
  }

  .focus-link {
    right: 0.65rem;
    bottom: 0.65rem;
    width: 1.8rem;
    height: 1.8rem;
  }

  .study-card {
    right: 50%;
    transform: translateX(50%);
    bottom: -1rem;
    width: 16rem;
    max-width: 16rem;
    padding: 0.85rem;
  }

  .study-label {
    margin-bottom: 0.3rem;
    font-size: 0.58rem;
  }

  .study-card h2 {
    margin-bottom: 0.65rem;
    font-size: 1rem;
  }

  .study-card ul {
    gap: 0.25rem;
    font-size: 0.62rem;
  }

  .study-card li {
    gap: 0.3rem;
  }

  .study-card li::before {
    font-size: 0.9rem;
  }

  .study-link {
    gap: 0.4rem;
    margin-top: 0.85rem;
    font-size: 0.6rem;
  }

  .study-cloud {
    bottom: -0.75rem;
    right: -2.5rem;
    width: 8rem;
  }

  /* Ajustes da Home Content para Mobile */
  .home-content { 
    padding: 0 1.25rem 4rem; 
  }

  .areas-strip {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 0;
  }

  .area-list {
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.65rem 1rem;
    font-size: 0.78rem;
  }

  .home-section { 
    padding: 3.5rem 0; 
  }

  .section-heading-row { 
    align-items: flex-start; 
    flex-direction: column; 
    gap: 1.2rem; 
  }

  .featured-grid { 
    grid-template-columns: 1fr; 
    gap: 1.25rem; 
  }

  .featured-image { 
    height: 13rem; 
  }

  .process-grid { 
    grid-template-columns: 1fr; 
    gap: 2rem; 
  }

  .about-facts {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }

  .contact-preview { 
    align-items: flex-start; 
    flex-direction: column; 
    padding: 2rem 1.5rem; 
  }

  .contact-preview-link { 
    width: 100%; 
    justify-content: center; 
    box-sizing: border-box;
  }
}
</style>