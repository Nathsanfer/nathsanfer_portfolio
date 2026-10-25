<script setup>
defineProps({
  project: { type: Object, required: true },
  showDescription: { type: Boolean, default: false },
})
</script>

<template>
  <RouterLink :to="`/projects/${project.number}`" class="project-card">
    <div class="project-media">
      <img
        :src="project.image"
        :alt="`Imagem do projeto ${project.name}`"
        :style="{ objectPosition: project.imagePosition }"
        loading="lazy"
      />
      <span class="project-number">{{ project.number }}</span>
      <span class="project-arrow" aria-hidden="true">
        <i class="lni lni-arrow-angular-top-right"></i>
      </span>
    </div>

    <div class="project-body">
      <p class="project-type">{{ project.type }}</p>
      <h3 class="project-name">{{ project.name }}</h3>
      <p v-if="showDescription" class="project-desc">{{ project.description }}</p>
      <div class="project-tags">
        <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: inherit;
  text-decoration: none;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.55s var(--ease-out),
    box-shadow 0.55s var(--ease-out),
    border-color 0.4s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-md);
}

.project-media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--color-surface-2);
}

.project-media::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgba(20, 10, 30, 0.35));
  content: '';
  transition: opacity 0.5s ease;
}

.project-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s var(--ease-out);
}

.project-card:hover .project-media img {
  transform: scale(1.06);
}

.project-number {
  position: absolute;
  z-index: 1;
  top: 0.9rem;
  left: 1rem;
  color: #fff;
  font-family: var(--font-cursive);
  font-size: 1.35rem;
  font-style: italic;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
}

.project-arrow {
  position: absolute;
  z-index: 1;
  right: 0.9rem;
  bottom: 0.9rem;
  display: grid;
  width: 2.4rem;
  height: 2.4rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-principal);
  box-shadow: var(--shadow-sm);
  transform: scale(0.8) rotate(-45deg);
  opacity: 0;
  transition: transform 0.5s var(--ease-out), opacity 0.4s ease, background-color 0.3s ease, color 0.3s ease;
}

.project-card:hover .project-arrow {
  transform: scale(1) rotate(0);
  opacity: 1;
}

.project-card:hover .project-arrow {
  background: var(--color-principal);
  color: #fff;
}

.project-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.4rem 1.4rem 1.5rem;
}

.project-type {
  margin-bottom: 0.45rem;
  color: var(--color-principal);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.14em;
}

.project-name {
  margin-bottom: 0.6rem;
  font-size: 1.12rem;
  font-weight: 500;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.project-card:hover .project-name {
  color: var(--color-principal);
}

.project-desc {
  margin-bottom: 1.1rem;
  color: var(--color-text-light);
  font-size: 0.84rem;
  line-height: 1.65;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
  padding-top: 0.8rem;
}
</style>
