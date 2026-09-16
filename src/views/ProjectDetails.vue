<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { projects } from "../data/projects.js";

const route = useRoute();
const project = computed(() =>
  projects.find((item) => item.number === route.params.id),
);
const apiResponse = computed(() =>
  JSON.stringify(project.value?.apiResponse ?? {}, null, 2),
);
</script>

<template>
  <Header />
  <main v-if="project" class="project-details">
    <RouterLink to="/projects" class="back-link">
      <i class="lni lni-arrow-left" aria-hidden="true"></i>
      Voltar para projetos
    </RouterLink>

    <section class="details-hero">
      <div class="details-copy">
        <p class="project-type">{{ project.type }}</p>
        <span class="project-number">{{ project.number }}</span>
        <h1>{{ project.name }}</h1>
        <h3>{{ project.subtitle }}</h3>
        <p class="details-description">{{ project.description }}</p>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
      <div class="details-image">
        <img
          :src="project.image"
          :alt="`Imagem do projeto ${project.name}`"
          :style="{ objectPosition: project.imagePosition }"
        />
        <div class="details-icon">
          <i class="lni" :class="project.icon" aria-hidden="true"></i>
        </div>
      </div>
    </section>
    
    <div class="details-info">
      <div v-if="project.hasApi" class="github-links">
        <div class="link-github">
          <img src="../assets/github.svg" alt="Logo do GitHub" />
          <div>
            <span>Front-end</span>
            <a :href="project.github.frontend" target="_blank" rel="noopener noreferrer">
              Acessar no GitHub
              <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="link-github">
          <img src="../assets/github.svg" alt="Logo do GitHub" />
          <div>
            <span>API</span>
            <a :href="project.github.api" target="_blank" rel="noopener noreferrer">
              Acessar no GitHub
              <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div v-else class="link-github single-github">
        <img src="../assets/github.svg" alt="Logo do GitHub" />
        <div>
          <span>Repositório</span>
          <a :href="project.github.repository" target="_blank" rel="noopener noreferrer">
            Acessar no GitHub
            <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="development-info">
        <i class="lni lni-user-multiple-4" aria-hidden="true"></i>
        <div>
          <span>Desenvolvimento</span>
          <strong>{{ project.development }}</strong>
        </div>
      </div>
    </div>

    <section class="apresentation" aria-label="Problema e solução do projeto">
      <article class="problem">
        <div class="problem-title">
          <i class="lni lni-bulb-2" aria-hidden="true"></i>
          <div>
            <span>01</span>
            <h3>Problema</h3>
          </div>
        </div>
        <p class="description">
          {{ project.problem }}
        </p>
      </article>
      <div class="divider"></div>
      <article class="solution">
        <div class="solution-title">
          <i class="lni lni-check-circle-1" aria-hidden="true"></i>
          <div>
            <span>02</span>
            <h3>Solução</h3>
          </div>
        </div>
        <p class="description">
          {{ project.solution }}
        </p>
      </article>
    </section>

    <section class="project-content" aria-label="Recursos e tecnologias do projeto">
      <div class="features-panel">
        <div class="section-heading">
          <span class="section-kicker">O que existe por dentro</span>
          <h2>Recursos pensados para tornar o sistema mais útil.</h2>
        </div>
        <ul class="features-list">
          <li v-for="(feature, index) in project.features" :key="feature">
            <span>{{ String(index + 1).padStart(2, "0") }}</span>
            <strong>{{ feature }}</strong>
            <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
          </li>
        </ul>
      </div>

      <div class="technologies-panel">
        <div class="section-heading">
          <span class="section-kicker">Stack utilizada</span>
          <h2>Tecnologias que dão vida ao projeto.</h2>
        </div>
        <div class="technology-list">
          <span v-for="technology in project.tags" :key="technology">{{ technology.trim() }}</span>
        </div>
      </div>
    </section>

    <section v-if="project.type !== 'API REST'" class="gallery-section" aria-label="Imagens do sistema">
      <div class="gallery-heading">
        <div>
          <span class="section-kicker">Por dentro do projeto</span>
          <h2>Uma visão mais próxima da experiência.</h2>
        </div>
        <span class="gallery-count">{{ (project.gallery || [project.image]).length }} imagens</span>
      </div>
      <div
        class="project-gallery"
        :class="{ 'project-gallery--mobile': project.type === 'APLICAÇÃO MOBILE' }"
      >
        <figure v-for="(image, index) in project.gallery || [project.image]" :key="image">
          <img :src="image" :alt="`Tela ${index + 1} do projeto ${project.name}`" />
          <figcaption>Tela {{ String(index + 1).padStart(2, "0") }}</figcaption>
        </figure>
      </div>
    </section>

    <section v-else class="api-response-section" aria-label="Exemplo de resposta da API">
      <div class="gallery-heading">
        <div>
          <span class="section-kicker">Dados retornados</span>
          <h2>Um exemplo da resposta da API.</h2>
        </div>
        <span class="gallery-count">JSON</span>
      </div>
      <div class="api-response-wrapper">
        <pre class="api-response"><code>{{ apiResponse }}</code></pre>
      </div>
    </section>

  </main>
  <main v-else class="not-found">
    <h1>Projeto não encontrado</h1>
    <RouterLink to="/projects">Voltar para projetos</RouterLink>
  </main>
  <Footer />
</template>

<style scoped>
/* --- ESTRUTURA PRINCIPAL --- */
.project-details {
  width: min(87rem, calc(100% - 3rem));
  margin: 0 auto;
  padding-top: 2.5rem;
  padding-bottom: 4rem;
  overflow-x: hidden;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #68636c;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--color-principal);
}

.back-link .lni {
  background: transparent;
}

/* --- HERO SECTION --- */
.details-hero {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2rem;
}

.details-copy {
  position: relative;
  width: 100%;
}

.project-type {
  color: var(--color-principal);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.details-copy .project-number {
  position: absolute;
  top: -0.5rem;
  right: 0;
  color: #d9cce0;
  font-family: var(--font-cursive);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1;
  pointer-events: none;
}

.details-copy h1 {
  max-width: 42rem;
  margin: 0.8rem 0 1rem;
  color: #17131a;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 400;
  line-height: 1.08;
}

.details-copy h3 {
  margin-bottom: 1.2rem;
  color: #3b3440;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  line-height: 1.35;
}

.details-description {
  max-width: 40rem;
  color: #68636c;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  line-height: 1.75;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.5rem;
}

.tags span {
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: #f2eaf6;
  color: #76508a;
  font-size: 0.8rem;
  font-weight: 500;
}

.details-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  max-height: 26rem;
  overflow: hidden;
  border-radius: 12px;
  background: #1c1720;
  box-shadow: 0 1.2rem 3rem rgba(55, 33, 66, 0.12);
}

.details-image::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(25, 15, 31, 0.05),
    rgba(25, 15, 31, 0.45)
  );
  content: "";
}

.details-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.details-icon {
  position: absolute;
  z-index: 1;
  right: 1.2rem;
  bottom: 1.2rem;
  display: grid;
  width: clamp(3.2rem, 6vw, 4.5rem);
  height: clamp(3.2rem, 6vw, 4.5rem);
  place-items: center;
  border: 4px solid #fff;
  border-radius: 50%;
  background: var(--color-principal);
  color: #fff;
}

.details-icon .lni {
  background: transparent;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
}

/* --- BARRA DE INFORMAÇÕES (GITHUB & DEV) --- */
.details-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  padding: 0.85rem;
  border: 1px solid #eadfea;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 1rem 2.5rem rgba(55, 33, 66, 0.06);
}

.github-links {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  width: 100%;
}

.link-github,
.development-info {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-height: 4.2rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid #eadfea;
}

.link-github {
  background: #fcf9fd;
  flex: 1;
}

.link-github img {
  width: 2rem;
  height: 2rem;
  padding: 0.35rem;
  border-radius: 50%;
  background: var(--color-principal);
}

.link-github div,
.development-info div {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  overflow: hidden;
}

.link-github span,
.development-info span {
  color: #8d8291;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.link-github a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #241d27;
  font-size: 0.88rem;
  font-weight: 500;
  text-decoration: none;
  word-break: break-word;
}

.link-github a:hover {
  color: var(--color-principal);
}

.link-github a .lni {
  background: transparent;
  font-size: 0.8rem;
}

.development-info {
  background: #fff;
  color: #68636c;
}

.development-info > .lni {
  color: var(--color-principal);
  font-size: 1.35rem;
}

.development-info strong {
  color: #241d27;
  font-size: 0.88rem;
  font-weight: 500;
}

/* --- PROBLEMA E SOLUÇÃO --- */
.apresentation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
  padding: 2rem 0;
  border-top: 1px solid #eadfea;
  border-bottom: 1px solid #eadfea;
}

.problem,
.solution {
  width: 100%;
}

.problem-title,
.solution-title {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.problem-title > .lni,
.solution-title > .lni {
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  place-items: center;
  border-radius: 50%;
  background: #f4eafa;
  color: var(--color-principal);
  font-size: 1.1rem;
}

.problem-title div,
.solution-title div {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.problem-title span,
.solution-title span {
  color: var(--color-principal);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.12em;
}

.problem-title h3,
.solution-title h3 {
  color: #241d27;
  font-size: 1.3rem;
  font-weight: 500;
}

.divider {
  width: 100%;
  height: 1px;
  background: #eadfea;
}

.description {
  margin-top: 1rem;
  color: #68636c;
  font-size: 0.9rem;
  line-height: 1.75;
}

/* --- CONTEÚDO E RECURSOS --- */
.project-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 4rem;
}

.features-panel,
.technologies-panel {
  width: 100%;
}

.technologies-panel {
  padding-top: 3rem;
  border-top: 1px solid #eadfea;
}

.section-heading {
  max-width: 52rem;
}

.section-kicker {
  color: var(--color-principal);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-heading h2,
.gallery-heading h2 {
  margin-top: 0.6rem;
  color: #241d27;
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 400;
  line-height: 1.25;
}

.features-list {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 1.5rem;
  border-top: 1px solid #eadfea;
  list-style: none;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eadfea;
}

.features-list li > span {
  color: var(--color-principal);
  font-size: 0.75rem;
  font-weight: 600;
}

.features-list strong {
  flex: 1;
  color: #4e4652;
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 1.4;
}

.features-list .lni {
  color: #b9a8bd;
  font-size: 0.8rem;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
}

.technology-list span {
  padding: 0.55rem 0.85rem;
  border: 1px solid #eadfea;
  border-radius: 0.6rem;
  background: #fcf9fd;
  color: #5d4b63;
  font-size: 0.8rem;
  font-weight: 500;
}

/* --- GALERIA --- */
.gallery-section,
.api-response-section {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid #eadfea;
}

.gallery-heading {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.gallery-count {
  color: #8d8291;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 2rem;
}

.project-gallery figure {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 0.8rem;
  background: #1c1720;
}

.project-gallery figure:first-child:last-child {
  grid-column: 1 / -1;
}

.project-gallery img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-gallery figure:hover img {
  transform: scale(1.03);
}

.project-gallery figcaption {
  position: absolute;
  right: 0.8rem;
  bottom: 0.8rem;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  background: rgba(28, 23, 32, 0.82);
  color: #fff;
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Galeria específica para Apps Mobile */
.project-gallery--mobile {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.project-gallery--mobile figure {
  aspect-ratio: 9 / 16;
}

.project-gallery--mobile img {
  object-fit: cover;
}

/* --- RESPOSTA DA API (JSON) --- */
.api-response-wrapper {
  margin-top: 2rem;
  border: 1px solid #33263a;
  border-radius: 0.8rem;
  background: #1c1720;
  overflow: hidden;
}

.api-response {
  max-width: 100%;
  max-height: 30rem;
  padding: 1.2rem;
  overflow-x: auto;
  overflow-y: auto;
  color: #f1d7ff;
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 0.8rem;
  line-height: 1.6;
  white-space: pre;
}

/* --- NOT FOUND --- */
.not-found {
  min-height: 50vh;
  padding: 4rem 1.5rem;
  text-align: center;
}

.not-found h1 {
  margin-bottom: 1rem;
  font-weight: 400;
}

.not-found a {
  color: var(--color-principal);
}

/* ================= BREAKPOINTS DE RESPONSIVIDADE ================= */

/* Tablets em pé e Notebooks Pequenos (>= 600px) */
@media (min-width: 600px) {
  .github-links {
    flex-direction: row;
  }

  .project-gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  .project-gallery--mobile {
    grid-template-columns: repeat(3, 1fr);
  }

  .gallery-heading {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}

/* Desktops e Laptops (>= 900px) */
@media (min-width: 900px) {
  .details-hero {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    margin-top: 3.5rem;
  }

  .details-copy,
  .details-image {
    width: 50%;
  }

  .details-info {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .github-links {
    width: auto;
    flex: 1;
  }

  .development-info {
    width: auto;
    min-width: 16rem;
  }

  .apresentation {
    flex-direction: row;
    align-items: stretch;
    gap: 3rem;
    margin-top: 5rem;
    padding: 3rem 0;
  }

  .problem,
  .solution {
    flex: 1;
  }

  .divider {
    width: 1px;
    height: auto;
  }

  .features-list {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }

  .project-gallery--mobile {
    grid-template-columns: repeat(4, 1fr);
  }

  .project-content,
  .gallery-section,
  .api-response-section {
    margin-top: 6rem;
  }
}
</style>