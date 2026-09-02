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
        <p class="project-number">{{ project.number }}</p>
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
      <div v-else class="link-github">
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

    <section class="gallery-section" aria-label="Imagens do sistema">
      <div class="gallery-heading">
        <div>
          <span class="section-kicker">Por dentro do projeto</span>
          <h2>Uma visão mais próxima da experiência.</h2>
        </div>
        <span class="gallery-count">{{ (project.gallery || [project.image]).length }} imagens</span>
      </div>
      <div class="project-gallery">
        <figure v-for="(image, index) in project.gallery || [project.image]" :key="image">
          <img :src="image" :alt="`Tela ${index + 1} do projeto ${project.name}`" />
          <figcaption>Tela {{ String(index + 1).padStart(2, "0") }}</figcaption>
        </figure>
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
.project-details {
  width: 87rem;
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 2rem;
}
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #68636c;
  font-size: 0.8rem;
  text-decoration: none;
}
.back-link:hover {
  color: var(--color-principal);
}
.back-link .lni {
  background: transparent;
}
.details-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  margin-top: 4rem;
}
.details-copy {
  position: relative;
  flex: 1 1 0;
  min-width: 0;
}
.project-type,
.eyebrow {
  color: var(--color-principal);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
}
.details-copy .project-number {
  position: absolute;
  top: -1rem;
  right: -1.9rem;
  color: #d9cce0;
  font-family: var(--font-cursive);
  font-size: 4rem;
  font-weight: 400;
}
.details-copy h1 {
  width: 40rem;
  margin: 1rem 0 1.5rem;
  color: #17131a;
  font-size: 4rem;
  font-weight: 400;
  line-height: 1.02;
}
.details-copy h3 {
  margin-bottom: 1.5rem;
  color: #17131a;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.25;
}
.details-description {
  max-width: 38rem;
  color: #68636c;
  font-size: 1rem;
  line-height: 1.8;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 2rem;
}
.tags span {
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: #f2eaf6;
  color: #76508a;
  font-size: 0.85rem;
}
.details-image {
  position: relative;
  width: min(37rem, 100%);
  height: 22rem;
  overflow: hidden;
  border-radius: 10px;
  background: #1c1720;
  box-shadow: 0 1.5rem 3rem rgba(55, 33, 66, 0.14);
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
  right: 1.5rem;
  bottom: 1.5rem;
  display: grid;
  width: 4.5rem;
  height: 4.5rem;
  place-items: center;
  border: 6px solid #fff;
  border-radius: 50%;
  background: var(--color-principal);
  color: #fff;
}
.details-icon .lni {
  background: transparent;
  font-size: 1.5rem;
}
.details-info {
  display: flex;
  gap: 1rem;
  margin-top: 4rem;
  padding: 1rem;
  border: 1px solid #eadfea;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 1rem 2.5rem rgba(55, 33, 66, 0.08);
}
.link-github,
.development-info {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-height: 4.5rem;
  padding: 0.75rem 1.1rem;
  border-radius: 0.7rem;
}
.development-info {
  max-width: 18rem;
}
.github-links {
  display: flex;
  flex: 1 1 70%;
  gap: 1rem;
}
.link-github {
  flex: 1 1 auto;
  border: 1px solid #eadfea;
  background: #fcf9fd;
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
}
.link-github span,
.development-info span {
  color: #8d8291;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.link-github a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #241d27;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
}
.link-github a:hover {
  color: var(--color-principal);
}
.link-github a .lni {
  background: transparent;
  font-size: 0.8rem;
}
.development-info {
  flex: 1 1 30%;
  border: 1px solid #eadfea;
  color: #68636c;
}
.development-info > .lni {
  color: var(--color-principal);
  font-size: 1.35rem;
}
.development-info strong {
  color: #241d27;
  font-size: 0.9rem;
  font-weight: 500;
}
.apresentation {
  display: flex;
  align-items: stretch;
  gap: 4rem;
  margin-top: 6rem;
  padding: 2.5rem 0;
  border-top: 1px solid #eadfea;
  border-bottom: 1px solid #eadfea;
}
.problem,
.solution {
  flex: 1 1 0;
  min-width: 0;
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
  font-size: 1.4rem;
  font-weight: 400;
}
.divider {
  width: 1px;
  background: #eadfea;
}
.description {
  max-width: 31rem;
  margin-top: 1.5rem;
  color: #68636c;
  font-size: 0.9rem;
  line-height: 1.8;
}
.project-content {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-top: 7rem;
}
.features-panel,
.technologies-panel {
  width: 100%;
  min-width: 0;
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
  margin-top: 0.75rem;
  color: #241d27;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.2;
}
.features-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 3rem;
  margin-top: 2rem;
  border-top: 1px solid #eadfea;
  list-style: none;
}
.features-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 3.8rem;
  border-bottom: 1px solid #eadfea;
}
.features-list li > span {
  color: var(--color-principal);
  font-size: 0.7rem;
  font-weight: 600;
}
.features-list strong {
  flex: 1;
  color: #4e4652;
  font-size: 0.9rem;
  font-weight: 500;
}
.features-list .lni {
  color: #b9a8bd;
  font-size: 0.8rem;
}
.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 2rem;
}
.technology-list span {
  padding: 0.7rem 0.9rem;
  border: 1px solid #eadfea;
  border-radius: 0.6rem;
  background: #fcf9fd;
  color: #5d4b63;
  font-size: 0.8rem;
}
.gallery-section {
  margin-top: 7rem;
  padding-top: 3rem;
  border-top: 1px solid #eadfea;
}
.gallery-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}
.gallery-count {
  color: #8d8291;
  font-size: 0.75rem;
}
.project-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 2.5rem;
}
.project-gallery figure {
  position: relative;
  min-height: 20rem;
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
  right: 1rem;
  bottom: 1rem;
  padding: 0.4rem 0.65rem;
  border-radius: 999px;
  background: rgba(28, 23, 32, 0.78);
  color: #fff;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.not-found {
  min-height: 60vh;
  padding: 6rem 2rem;
  text-align: center;
}
.not-found h1 {
  margin-bottom: 1rem;
  font-weight: 400;
}
.not-found a {
  color: var(--color-principal);
}
@media (max-width: 900px) {
  .project-details {
    padding: 2.5rem 1.5rem 5rem;
  }
  .details-hero {
    flex-direction: column;
    gap: 3rem;
    margin-top: 3rem;
  }
  .details-copy,
  .details-image {
    width: 100%;
  }
  .details-image {
    height: 22rem;
  }
  .details-info {
    margin-top: 5rem;
    flex-direction: column;
    padding: 0.75rem;
  }
  .link-github,
  .development-info,
  .github-links {
    width: 100%;
  }
  .github-links {
    flex-direction: column;
  }
  .apresentation {
    flex-direction: column;
    gap: 2rem;
    margin-top: 3rem;
    padding: 2rem 0;
  }
  .divider {
    width: 100%;
    height: 1px;
  }
  .project-content {
    gap: 4rem;
    margin-top: 5rem;
  }
  .features-list {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
  .gallery-section {
    margin-top: 5rem;
  }
  .gallery-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }
  .project-gallery {
    grid-template-columns: 1fr;
  }
  .project-gallery figure {
    min-height: 15rem;
  }
}
</style>
