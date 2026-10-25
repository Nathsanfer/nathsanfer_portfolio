<script setup>
import { computed, ref } from 'vue'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.vue'

const ALL = 'Todos'

// Tipos na ordem em que aparecem nos dados, sem repetição
const types = [ALL, ...new Set(projects.map((project) => project.type))]

const activeType = ref(ALL)

const filteredProjects = computed(() =>
  activeType.value === ALL
    ? projects
    : projects.filter((project) => project.type === activeType.value),
)

const countByType = (type) =>
  type === ALL ? projects.length : projects.filter((project) => project.type === type).length

const projectCount = String(projects.length).padStart(2, '0')
</script>

<template>
  <main class="projects-page container">
    <!-- CABEÇALHO -->
    <section class="projects-head">
      <div class="head-copy" v-reveal>
        <p class="eyebrow">Meu trabalho</p>
        <h1 class="display-title">
          Ideias que ganham <br />
          <em>forma e propósito.</em>
        </h1>
        <p class="lead">
          Uma seleção de projetos, estudos e experimentos construídos com atenção
          aos detalhes e vontade de resolver problemas.
        </p>
      </div>

      <div class="head-side" v-reveal="150">
        <div class="count" aria-label="Quantidade de projetos">
          <strong>{{ projectCount }}</strong>
          <span>projetos<br />em destaque</span>
        </div>
      </div>
    </section>

    <!-- FILTROS -->
    <nav class="filters" aria-label="Filtrar projetos por tipo" v-reveal>
      <button
        v-for="type in types"
        :key="type"
        type="button"
        class="filter"
        :class="{ 'is-active': activeType === type }"
        :aria-pressed="activeType === type"
        @click="activeType = type"
      >
        {{ type === ALL ? 'Todos' : type }}
        <span class="filter-count">{{ countByType(type) }}</span>
      </button>
    </nav>

    <!-- GRADE -->
    <TransitionGroup name="grid" tag="div" class="projects-grid" aria-live="polite">
      <div v-for="project in filteredProjects" :key="project.number" class="grid-item">
        <ProjectCard :project="project" show-description />
      </div>
    </TransitionGroup>
  </main>
</template>

<style scoped>
.projects-page {
  padding-top: clamp(2.5rem, 6vw, 5rem);
  padding-bottom: clamp(3rem, 6vw, 5rem);
}

/* ===== CABEÇALHO ===== */
.projects-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
}

.head-copy {
  max-width: 44rem;
}

.head-copy .display-title {
  margin-bottom: 1.4rem;
  font-size: clamp(2.5rem, 5.2vw, 4.4rem);
}

.head-side {
  display: flex;
  align-items: flex-end;
  gap: 2rem;
}

.count {
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
  padding-bottom: 0.5rem;
}

.count strong {
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: clamp(3.5rem, 6vw, 5rem);
  font-style: italic;
  font-weight: 400;
  line-height: 0.9;
}

.count span {
  color: var(--color-text-light);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  line-height: 1.4;
  text-transform: uppercase;
}

.head-art {
  width: clamp(9rem, 14vw, 12rem);
  height: auto;
  object-fit: contain;
  animation: sway 6s ease-in-out infinite;
}

/* ===== FILTROS ===== */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.filter {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.1rem;
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text-light);
  font-size: 0.82rem;
  font-weight: 500;
  transition:
    background-color 0.35s ease,
    border-color 0.35s ease,
    color 0.35s ease,
    transform 0.35s var(--ease-out);
}

.filter:hover {
  border-color: var(--color-principal);
  color: var(--color-text);
  transform: translateY(-2px);
}

.filter.is-active {
  border-color: var(--color-text);
  background: var(--color-text);
  color: var(--color-bg);
}

.filter-count {
  display: grid;
  min-width: 1.5rem;
  height: 1.5rem;
  place-items: center;
  padding-inline: 0.4rem;
  border-radius: 999px;
  background: var(--color-principal-soft);
  color: var(--color-principal);
  font-size: 0.7rem;
  font-weight: 600;
}

.filter.is-active .filter-count {
  background: var(--color-principal);
  color: #fff;
}

/* ===== GRADE ===== */
.projects-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.75rem;
}

.grid-item {
  display: flex;
}

.grid-item > :deep(a) {
  width: 100%;
}

@keyframes sway {
  0%,
  100% {
    transform: translateY(0) rotate(-2deg);
  }
  50% {
    transform: translateY(-8px) rotate(2deg);
  }
}

@media (max-width: 1040px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .head-art {
    display: none;
  }

  .filters {
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    margin-inline: -1.5rem;
    padding-inline: 1.5rem;
  }

  .filter {
    flex-shrink: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .head-art {
    animation: none;
  }
}
</style>
