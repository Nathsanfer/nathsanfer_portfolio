<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { projects } from "../data/projects.js";
import { useRouter } from "vue-router";

const router = useRouter();
const openProject = (projectNumber) => router.push(`/projects/${projectNumber}`);

const projectCount = projects.length;
</script>

<template>
  <Header />
  <main class="projects-page">
    <section class="projects-heading">
      <div class="heading-info">
        <p class="eyebrow">MEU TRABALHO</p>
        <h1>Ideias que ganham<br /><em>forma e propósito.</em></h1>
        <div class="heading-details">
          <p class="heading-text">Uma seleção de projetos, estudos e experimentos construídos com atenção aos detalhes e vontade de resolver problemas.</p>
          <div class="project-count" aria-label="Quantidade de projetos">
            <strong>{{ String(projectCount).padStart(2, "0") }}</strong>
            <span>projetos<br />em destaque</span>
          </div>
        </div>
      </div>

      <div class="heading-art">
        <span class="art-label">IDEIAS EM<br />MOVIMENTO</span>
        <img src="../assets/projects.png" alt="Ilustração de projetos" />
      </div>
    </section>

    <section class="projects-grid" aria-label="Lista de projetos">
      <article
        v-for="project in projects"
        :key="project.number"
        class="project-card"
        role="link"
        tabindex="0"
        @click="openProject(project.number)"
        @keydown.enter="openProject(project.number)"
        @keydown.space.prevent="openProject(project.number)"
      >
        <div class="project-image-wrap">
          <img :src="project.image" :alt="`Imagem do projeto ${project.name}`" :style="{ objectPosition: project.imagePosition }" />
          <span class="project-number">{{ project.number }}</span>
          <div class="project-icon"><i class="lni" :class="project.icon" aria-hidden="true"></i></div>
        </div>    
        <div class="project-content">
          <p class="project-type">{{ project.type }}</p>
          <h2>{{ project.name }}</h2>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-footer">
            <div class="tags">
              <span v-for="tag in project.tags.slice(0, 3)" :key="tag">{{ tag }}</span>
            </div>
            <RouterLink :to="`/projects/${project.number}`" class="project-link" :aria-label="`Ver detalhes de ${project.name}`">
              <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
            </RouterLink>
          </div>
        </div>
      </article>
    </section>
  </main>
  <Footer />
</template>

<style scoped>
.projects-page {
  max-width: 90rem;
  margin: 0 auto;
  padding: 3rem 1.5rem 6rem;
  overflow-x: hidden;
}

/* --- HEADING --- */
.projects-heading {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 3.5rem;
  border-bottom: 1px solid #ddd7e0;
  padding-bottom: 2.5rem;
}

.heading-info {
  flex: 1;
}

.eyebrow,
.project-type {
  color: var(--color-principal);
  font-size: 0.73rem;
  font-weight: 600;
  letter-spacing: 0.12em;
}

.eyebrow {
  margin-bottom: 1rem;
}

.projects-heading h1 {
  color: #17131a;
  font-size: clamp(2.3rem, 5vw, 4.2rem);
  font-weight: 400;
  line-height: 1.05;
  max-width: 50rem;
}

.projects-heading h1 em {
  display: inline-block;
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 420;
  font-style: italic;
  color: var(--color-principal);
  font-family: var(--font-cursive);
  transform: skewX(-12deg);
}

.heading-details {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 2rem;
  margin-top: 1.7rem;
}

.heading-text {
  max-width: 22rem;
  color: #68636c;
  font-size: clamp(0.85rem, 1.2vw, 0.92rem);
  line-height: 1.7;
}

.project-count {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  border-left: 1px solid #cfc1d6;
  padding-left: 1.2rem;
  white-space: nowrap;
}

.project-count strong {
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 1;
}

.project-count span {
  color: #68636c;
  font-size: 0.68rem;
  line-height: 1.35;
  text-transform: uppercase;
}

.heading-art {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  max-width: 27rem;
  margin: 0 auto;
}

.heading-art img {
  width: 100%;
  height: auto;
  max-height: 18rem;
  object-fit: contain;
}

.art-label {
  position: absolute;
  top: 0;
  left: 0;
  color: #a184b1;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  line-height: 1.5;
}

/* --- GRID DE PROJETOS --- */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* --- CARD DE PROJETO --- */
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 20px rgba(154, 126, 176, 0.04);
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.project-card:hover {
  transform: translateY(-0.35rem);
  box-shadow: 0 12px 30px rgba(154, 126, 176, 0.1);
  border-color: rgba(154, 126, 176, 0.3);
}

.project-card:focus-visible {
  outline: 3px solid var(--color-principal);
  outline-offset: 4px;
}

.project-image-wrap {
  position: relative;
  height: 12rem;
  background: #f7f5f9;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
}

.project-image-wrap::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(120, 74, 172, 0.1), rgba(79, 33, 125, 0.4));
  content: "";
}

.project-image-wrap img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.project-card:hover .project-image-wrap img {
  transform: scale(1.05);
}

.project-number {
  position: absolute;
  z-index: 1;
  top: 1rem;
  left: 1rem;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.project-icon {
  position: absolute;
  z-index: 3;
  right: 1rem;
  bottom: -1.2rem;
  display: grid;
  width: 3.5rem;
  height: 3.5rem;
  place-items: center;
  border: 4px solid #fff;
  border-radius: 50%;
  background: var(--color-principal);
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.project-card:hover .project-icon {
  background: var(--color-text);
}

.project-icon .lni {
  background: transparent;
  font-size: 1.5rem;
}

.project-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.8rem 1.2rem 1.2rem;
}

.project-type {
  margin-bottom: 0.4rem;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.12em;
}

.project-content h2 {
  margin-bottom: 0.6rem;
  color: var(--color-text);
  font-size: 1.15rem;
  font-weight: 500;
}

.project-description {
  flex: 1;
  color: var(--color-text-light);
  font-size: 0.78rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.project-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  padding-top: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tags span {
  padding: 0.35rem 0.65rem;
  border-radius: 50px;
  background: rgba(154, 126, 176, 0.08);
  color: var(--color-text-light);
  font-size: 0.68rem;
  font-weight: 500;
}

.project-link {
  display: grid;
  width: 2.2rem;
  height: 2.2rem;
  flex: 0 0 2.2rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-text);
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: var(--color-principal);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(154, 126, 176, 0.3);
}

.project-link .lni {
  background: transparent;
  font-size: 0.95rem;
}

/* ================= RESPONSIVIDADE ================= */

/* Telas Médias / Tablets Grandes (2 colunas no grid, ajusta o cabeçalho) */
@media (min-width: 600px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Tablets em pé / Laptops Menores (3 colunas na grid) */
@media (min-width: 960px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .projects-heading {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }

  .heading-art {
    margin: 0;
  }
}

/* Desktops (4 colunas na grid) */
@media (min-width: 1280px) {
  .projects-page {
    padding: 5rem 2.5rem 8rem;
  }

  .projects-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
  }
}

/* Ajustes Finais para Mobile Extremo */
@media (max-width: 600px) {
  .projects-page {
    padding: 2rem 1.25rem 4rem;
  }

  .heading-details {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }

  .project-count {
    border-left: none;
    border-top: 1px solid #cfc1d6;
    padding-left: 0;
    padding-top: 0.8rem;
    width: 100%;
  }

  .project-image-wrap {
    height: 14rem; /* Imagem um pouco maior no mobile para dar destaque */
  }
}
</style>