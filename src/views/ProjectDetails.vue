<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { projects } from "../data/projects.js";

const route = useRoute();
const project = computed(() => projects.find((item) => item.number === route.params.id));
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
        <p class="details-description">{{ project.description }}</p>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
      <div class="details-image">
        <img :src="project.image" :alt="`Imagem do projeto ${project.name}`" :style="{ objectPosition: project.imagePosition }" />
        <div class="details-icon"><i class="lni" :class="project.icon" aria-hidden="true"></i></div>
      </div>
    </section>

    <section class="details-info">
      <p class="eyebrow">SOBRE O PROJETO</p>
      <h2>Uma solução pensada para conectar clareza, tecnologia e experiência.</h2>
      <p>Este projeto reúne decisões de interface e desenvolvimento voltadas para criar uma experiência objetiva, agradável e preparada para evoluir conforme novas necessidades surgem.</p>
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
  max-width: 90rem;
  margin: 0 auto;
  padding: 3rem 2.5rem 8rem;
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
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(25rem, 1.2fr);
  align-items: center;
  gap: 5rem;
  margin-top: 4rem;
}
.details-copy {
  position: relative;
}
.project-type,
.eyebrow {
  color: var(--color-principal);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
}
.details-copy .project-number {
  position: absolute;
  top: -0.25rem;
  right: 0;
  color: #d9cce0;
  font-family: var(--font-cursive);
  font-size: 4rem;
  font-weight: 400;
}
.details-copy h1 {
  max-width: 32rem;
  margin: 1rem 0 1.5rem;
  color: #17131a;
  font-size: clamp(2.7rem, 6vw, 5rem);
  font-weight: 400;
  line-height: 1.02;
}
.details-description {
  max-width: 28rem;
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
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  background: #f2eaf6;
  color: #76508a;
  font-size: 0.68rem;
}
.details-image {
  position: relative;
  height: 27rem;
  overflow: hidden;
  border-radius: 10px;
  background: #1c1720;
  box-shadow: 0 1.5rem 3rem rgba(55, 33, 66, 0.14);
}
.details-image::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(25, 15, 31, 0.05), rgba(25, 15, 31, 0.45));
  content: "";
}
.details-image img {
  width: 100%;
  height: 100%;
  display: block;
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
  max-width: 40rem;
  margin: 8rem auto 0;
  text-align: center;
}
.details-info .eyebrow {
  margin-bottom: 1rem;
}
.details-info h2 {
  margin-bottom: 1rem;
  color: #19151c;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.25;
}
.details-info > p:last-child {
  color: #716b74;
  font-size: 0.9rem;
  line-height: 1.8;
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
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 3rem;
  }
  .details-image {
    height: 22rem;
  }
  .details-info {
    margin-top: 5rem;
  }
}
</style>
