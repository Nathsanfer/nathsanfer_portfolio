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
      <div>
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
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
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
  padding: 5rem 2.5rem 8rem;
}
.projects-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin: 0 auto 4.5rem;
  border-bottom: 1px solid #ddd7e0;
  padding-bottom: 2.5rem;
  padding: 2.5rem 3rem;
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
  font-size: clamp(2.5rem, 5vw, 4.2rem);
  font-weight: 400;
  line-height: 1.04;
  max-width: 50rem;
}
.projects-heading h1 em {
  display: inline-block;
  font-size: 2.65rem;
  font-weight: 420;
  font-style: italic;
  color: var(--color-principal);
  font-family: var(--font-cursive);
  transform: skewX(-12deg);
}
.heading-details {
  display: flex;
  align-items: end;
  gap: 3rem;
  margin-top: 1.7rem;
}
.heading-text {
  max-width: 20rem;
  color: #68636c;
  font-size: 0.88rem;
  line-height: 1.75;
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
  align-items: end;
  align-self: stretch;
  min-width: 23rem;
}
.heading-art img {
  width: 27rem;
  height: 18rem;
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
.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
}
.project-card {
  position: relative;
  cursor: pointer;
  border: 1px solid #e5dfe8;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 1rem 2.5rem rgba(55, 33, 66, 0.06);
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.project-card:hover {
  transform: translateY(-0.35rem);
  box-shadow: 0 1.3rem 2.8rem rgba(55, 33, 66, 0.12);
}
.project-card:focus-visible {
  outline: 3px solid var(--color-principal);
  outline-offset: 4px;
}
.project-image-wrap {
  position: relative;
  height: 11rem;
  background: #1c1720;
  border-radius: 10px 10px 0 0;
}
.project-image-wrap::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(25, 15, 31, 0.08), rgba(25, 15, 31, 0.48));
  border-radius: 10px 10px 0 0;
  content: "";
}
.project-image-wrap img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  transition: transform 300ms ease;
}
.project-card:hover .project-image-wrap img {
  transform: scale(1.04);
}
.project-number {
  position: absolute;
  z-index: 1;
  top: 1rem;
  left: 1rem;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
}
.project-icon {
  position: absolute;
  z-index: 3;
  right: 1rem;
  bottom: -1.2rem;
  display: grid;
  width: 2.8rem;
  height: 2.8rem;
  place-items: center;
  border: 5px solid #fff;
  border-radius: 50%;
  background: var(--color-principal);
  color: #fff;
}
.project-icon .lni {
  background: transparent;
  font-size: 1.15rem;
}
.project-content {
  padding: 1.5rem 1.1rem 1.1rem;
}
.project-type {
  margin-bottom: 0.55rem;
  font-size: 0.65rem;
}
.project-content h2 {
  margin-bottom: 0.7rem;
  color: #19151c;
  font-size: 1.15rem;
  font-weight: 500;
}
.project-description {
  min-height: 4.7rem;
  color: #716b74;
  font-size: 0.72rem;
  line-height: 1.65;
}
.project-footer {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.2rem;
  border-top: 1px solid #eeeaf0;
  padding-top: 1rem;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.tags span {
  padding: 0.3rem 0.55rem;
  border-radius: 999px;
  background: #f2eaf6;
  color: #76508a;
  font-size: 0.62rem;
}
.project-link {
  display: grid;
  width: 2.2rem;
  height: 2.2rem;
  flex: 0 0 2.2rem;
  place-items: center;
  border-radius: 50%;
  background: #19151c;
  color: #fff;
  text-decoration: none;
  transition: background 180ms ease;
}
.project-link:hover {
  background: var(--color-principal);
}
.project-link .lni {
  background: transparent;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .projects-page {
    padding: 3rem 1.5rem 5rem;
  }
  .projects-heading {
    display: block;
    margin-bottom: 3rem;
    padding: 2rem;
  }
  .heading-details {
    align-items: start;
    gap: 2rem;
  }
  .heading-art {
    justify-content: center;
    min-width: 0;
    min-height: 12rem;
    margin-top: 2rem;
  }
  .heading-art img {
    width: min(22rem, 90%);
  }
  .heading-text {
    max-width: 30rem;
    margin-top: 1.5rem;
  }
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .project-image-wrap {
    height: 16rem;
  }
}
</style>
