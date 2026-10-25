<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'

const route = useRoute()

const index = computed(() => projects.findIndex((item) => item.number === route.params.id))
const project = computed(() => projects[index.value])
const previous = computed(() => (index.value > 0 ? projects[index.value - 1] : null))
const next = computed(() => (index.value < projects.length - 1 ? projects[index.value + 1] : null))

const gallery = computed(() => project.value?.gallery || [project.value?.image])
const isApi = computed(() => project.value?.type === 'API REST')
const apiResponse = computed(() => JSON.stringify(project.value?.apiResponse ?? {}, null, 2))

// Lightbox da galeria
const lightboxIndex = ref(null)
const isLightboxOpen = computed(() => lightboxIndex.value !== null)

function openLightbox(i) {
  lightboxIndex.value = i
}

function closeLightbox() {
  lightboxIndex.value = null
}

function step(direction) {
  const total = gallery.value.length
  lightboxIndex.value = (lightboxIndex.value + direction + total) % total
}

function onKeydown(event) {
  if (!isLightboxOpen.value) return
  if (event.key === 'Escape') closeLightbox()
  if (event.key === 'ArrowRight') step(1)
  if (event.key === 'ArrowLeft') step(-1)
}

// Trava o scroll da página enquanto o lightbox está aberto
watch(isLightboxOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

// Fecha o lightbox ao trocar de projeto
watch(
  () => route.params.id,
  () => closeLightbox(),
)

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <main v-if="project" class="details container">
    <RouterLink to="/projects" class="back-link">
      <i class="lni lni-arrow-left" aria-hidden="true"></i>
      Voltar para projetos
    </RouterLink>

    <!-- HERO -->
    <section class="details-hero">
      <div class="details-copy" v-reveal>
        <p class="eyebrow">{{ project.type }}</p>
        <h1 class="display-title">{{ project.name }}</h1>
        <p class="subtitle">{{ project.subtitle }}</p>
        <p class="lead">{{ project.description }}</p>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag.trim() }}</span>
        </div>
      </div>

      <figure class="details-media" v-reveal="120">
        <img
          :src="project.image"
          :alt="`Imagem do projeto ${project.name}`"
          :style="{ objectPosition: project.imagePosition }"
        />
        <span class="media-number" aria-hidden="true">{{ project.number }}</span>
        <div class="media-icon" aria-hidden="true">
          <i class="lni" :class="project.icon"></i>
        </div>
      </figure>
    </section>

    <!-- INFORMAÇÕES: REPOSITÓRIOS E DESENVOLVIMENTO -->
    <section class="meta" aria-label="Links e informações do projeto" v-reveal>
      <template v-if="project.hasApi">
        <a :href="project.github.frontend" target="_blank" rel="noopener noreferrer" class="meta-card">
          <i class="lni lni-code-1" aria-hidden="true"></i>
          <div>
            <span>Front-end</span>
            <strong>Acessar no GitHub <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i></strong>
          </div>
        </a>
        <a :href="project.github.api" target="_blank" rel="noopener noreferrer" class="meta-card">
          <i class="lni lni-database-2" aria-hidden="true"></i>
          <div>
            <span>API</span>
            <strong>Acessar no GitHub <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i></strong>
          </div>
        </a>
      </template>
      <a v-else :href="project.github.repository" target="_blank" rel="noopener noreferrer" class="meta-card">
        <i class="lni lni-code-1" aria-hidden="true"></i>
        <div>
          <span>Repositório</span>
          <strong>Acessar no GitHub <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i></strong>
        </div>
      </a>

      <div class="meta-card meta-static">
        <i class="lni lni-user-multiple-4" aria-hidden="true"></i>
        <div>
          <span>Desenvolvimento</span>
          <strong>{{ project.development }}</strong>
        </div>
      </div>
    </section>

    <!-- PROBLEMA E SOLUÇÃO -->
    <section class="story" aria-label="Problema e solução do projeto">
      <article class="story-card" v-reveal>
        <div class="story-head">
          <span class="story-num">01</span>
          <i class="lni lni-bulb-2" aria-hidden="true"></i>
          <h2>Problema</h2>
        </div>
        <p>{{ project.problem }}</p>
      </article>
      <article class="story-card story-card-accent" v-reveal="120">
        <div class="story-head">
          <span class="story-num">02</span>
          <i class="lni lni-check-circle-1" aria-hidden="true"></i>
          <h2>Solução</h2>
        </div>
        <p>{{ project.solution }}</p>
      </article>
    </section>

    <!-- RECURSOS E STACK -->
    <section class="features" aria-label="Recursos e tecnologias do projeto">
      <div class="features-panel" v-reveal>
        <p class="eyebrow">O que existe por dentro</p>
        <h2 class="panel-title">Recursos pensados para tornar o sistema mais útil.</h2>
        <ul class="features-list">
          <li v-for="(feature, i) in project.features" :key="feature">
            <span class="feature-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span>{{ feature }}</span>
          </li>
        </ul>
      </div>

      <div class="stack-panel" v-reveal="120">
        <p class="eyebrow">Stack utilizada</p>
        <h2 class="panel-title">Tecnologias que dão vida ao projeto.</h2>
        <div class="stack-list">
          <span v-for="technology in project.tags" :key="technology" class="stack-item">{{ technology.trim() }}</span>
        </div>
      </div>
    </section>

    <!-- GALERIA (apps e sites) OU RESPOSTA DA API -->
    <section v-if="!isApi" class="gallery" aria-label="Imagens do sistema">
      <div class="gallery-head" v-reveal>
        <div>
          <p class="eyebrow">Por dentro do projeto</p>
          <h2 class="panel-title">Uma visão mais próxima da experiência.</h2>
        </div>
        <span class="gallery-count">{{ gallery.length }} {{ gallery.length === 1 ? 'imagem' : 'imagens' }}</span>
      </div>

      <div class="gallery-grid" :class="{ 'is-mobile': project.type === 'APLICAÇÃO MOBILE' }">
        <figure
          v-for="(image, i) in gallery"
          :key="image"
          class="gallery-item"
          v-reveal="i * 90"
        >
          <button type="button" class="gallery-btn" :aria-label="`Ampliar tela ${i + 1}`" @click="openLightbox(i)">
            <img :src="image" :alt="`Tela ${i + 1} do projeto ${project.name}`" loading="lazy" />
            <span class="gallery-zoom" aria-hidden="true"><i class="lni lni-zoom"></i></span>
          </button>
          <figcaption>Tela {{ String(i + 1).padStart(2, '0') }}</figcaption>
        </figure>
      </div>
    </section>

    <section v-else class="api" aria-label="Exemplo de resposta da API">
      <div class="gallery-head" v-reveal>
        <div>
          <p class="eyebrow">Dados retornados</p>
          <h2 class="panel-title">Um exemplo da resposta da API.</h2>
        </div>
        <span class="gallery-count">JSON</span>
      </div>
      <div class="api-code" v-reveal="120">
        <pre><code>{{ apiResponse }}</code></pre>
      </div>
    </section>

    <!-- NAVEGAÇÃO ENTRE PROJETOS -->
    <nav class="pager" aria-label="Outros projetos">
      <RouterLink v-if="previous" :to="`/projects/${previous.number}`" class="pager-link pager-prev">
        <span>Projeto anterior</span>
        <strong><i class="lni lni-arrow-left" aria-hidden="true"></i> {{ previous.name }}</strong>
      </RouterLink>
      <span v-else></span>
      <RouterLink v-if="next" :to="`/projects/${next.number}`" class="pager-link pager-next">
        <span>Próximo projeto</span>
        <strong>{{ next.name }} <i class="lni lni-arrow-right" aria-hidden="true"></i></strong>
      </RouterLink>
    </nav>

    <!-- LIGHTBOX -->
    <Transition name="fade-overlay">
      <div v-if="isLightboxOpen" class="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de imagens" @click.self="closeLightbox">
        <button type="button" class="lb-close" aria-label="Fechar" @click="closeLightbox">
          <i class="lni lni-xmark" aria-hidden="true"></i>
        </button>
        <button type="button" class="lb-nav lb-prev" aria-label="Imagem anterior" @click="step(-1)">
          <i class="lni lni-arrow-left" aria-hidden="true"></i>
        </button>
        <Transition name="zoom" mode="out-in">
          <img
            :key="lightboxIndex"
            :src="gallery[lightboxIndex]"
            :alt="`Tela ${lightboxIndex + 1} do projeto ${project.name}`"
            class="lb-image"
          />
        </Transition>
        <button type="button" class="lb-nav lb-next" aria-label="Próxima imagem" @click="step(1)">
          <i class="lni lni-arrow-right" aria-hidden="true"></i>
        </button>
        <p class="lb-count">{{ lightboxIndex + 1 }} / {{ gallery.length }}</p>
      </div>
    </Transition>
  </main>

  <main v-else class="not-found container">
    <p class="eyebrow">Erro 404</p>
    <h1 class="display-title">Projeto não encontrado</h1>
    <RouterLink to="/projects" class="btn btn-primary">Voltar para projetos</RouterLink>
  </main>
</template>

<style scoped>
.details {
  padding-top: clamp(2rem, 4vw, 3rem);
  padding-bottom: 2rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  color: var(--color-text-light);
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.3s ease, gap 0.4s var(--ease-out);
}

.back-link:hover {
  gap: 0.9rem;
  color: var(--color-principal);
}

/* ===== HERO ===== */
.details-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  align-items: center;
  gap: clamp(2.5rem, 5vw, 5rem);
}

.details-copy .display-title {
  margin-bottom: 0.8rem;
  font-size: clamp(2.4rem, 5vw, 4rem);
}

.subtitle {
  margin-bottom: 1.4rem;
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-style: italic;
}

.details-copy .lead {
  margin-bottom: 1.8rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.details-media {
  position: relative;
  aspect-ratio: 16 / 11;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--color-surface-2);
  box-shadow: var(--shadow-lg);
}

.details-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s var(--ease-out);
}

.details-media:hover img {
  transform: scale(1.04);
}

.details-media::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(15, 10, 20, 0.35));
  content: '';
  pointer-events: none;
}

.media-number {
  position: absolute;
  z-index: 1;
  top: 1rem;
  left: 1.3rem;
  color: #fff;
  font-family: var(--font-cursive);
  font-size: 1.6rem;
  font-style: italic;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
}

.media-icon {
  position: absolute;
  z-index: 1;
  right: 1.2rem;
  bottom: 1.2rem;
  display: grid;
  width: 3.6rem;
  height: 3.6rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-principal);
  color: #fff;
  font-size: 1.3rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

/* ===== META ===== */
.meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: clamp(3rem, 6vw, 4.5rem);
}

.meta-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.4rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: inherit;
  text-decoration: none;
  box-shadow: var(--shadow-sm);
  transition: transform 0.45s var(--ease-out), border-color 0.35s ease, box-shadow 0.45s var(--ease-out);
}

a.meta-card:hover {
  transform: translateY(-3px);
  border-color: var(--color-principal);
  box-shadow: var(--shadow-md);
}

.meta-card > .lni {
  display: grid;
  width: 2.6rem;
  height: 2.6rem;
  flex-shrink: 0;
  place-items: center;
  border-radius: 12px;
  background: var(--color-principal-soft);
  color: var(--color-principal);
  font-size: 1.1rem;
}

.meta-card span {
  display: block;
  color: var(--color-text-light);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.meta-card strong {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-text);
  font-size: 0.92rem;
  font-weight: 500;
  overflow-wrap: anywhere;
}

.meta-card strong .lni {
  color: var(--color-principal);
  font-size: 0.8rem;
  transition: transform 0.35s var(--ease-out);
}

a.meta-card:hover strong .lni {
  transform: translate(2px, -2px);
}

/* ===== HISTÓRIA ===== */
.story {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: clamp(4rem, 8vw, 6rem);
}

.story-card {
  padding: clamp(1.8rem, 3.5vw, 2.6rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
}

.story-card-accent {
  background: var(--color-principal-soft);
  border-color: transparent;
}

.story-head {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}

.story-num {
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: 1.6rem;
  font-style: italic;
  line-height: 1;
}

.story-head .lni {
  color: var(--color-principal);
  font-size: 1.2rem;
}

.story-head h2 {
  font-size: 1.35rem;
  font-weight: 500;
}

.story-card p {
  color: var(--color-text-light);
  font-size: 0.95rem;
  line-height: 1.8;
}

/* ===== FEATURES E STACK ===== */
.features {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.features-panel,
.stack-panel,
.gallery-head,
.api {
  scroll-margin-top: 6rem;
}

.features-panel,
.stack-panel {
  padding: clamp(1.8rem, 3.5vw, 2.6rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
}

.panel-title {
  margin-bottom: 1.6rem;
  font-size: clamp(1.4rem, 2.6vw, 1.9rem);
  font-weight: 400;
}

.features-list {
  display: grid;
  gap: 0.2rem;
  list-style: none;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 0.9rem;
  margin-inline: -0.9rem;
  border-radius: var(--radius-sm);
  color: var(--color-text);
  font-size: 0.92rem;
  transition: background-color 0.35s ease, transform 0.4s var(--ease-out);
}

.features-list li:hover {
  background: var(--color-principal-soft);
  transform: translateX(4px);
}

.feature-num {
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: 1.05rem;
  font-style: italic;
  min-width: 2rem;
}

.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.stack-item {
  padding: 0.55rem 1rem;
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 0.82rem;
  transition: border-color 0.3s ease, color 0.3s ease, transform 0.35s var(--ease-out);
}

.stack-item:hover {
  border-color: var(--color-principal);
  color: var(--color-principal);
  transform: translateY(-2px);
}

/* ===== GALERIA ===== */
.gallery,
.api {
  margin-top: clamp(4rem, 8vw, 6rem);
}

.gallery-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.gallery-head .panel-title {
  margin-bottom: 0;
}

.gallery-head .eyebrow {
  margin-bottom: 0.8rem;
}

.gallery-count {
  padding: 0.35rem 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-text-light);
  font-size: 0.75rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
}

.gallery-grid.is-mobile {
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
}

.gallery-item {
  margin: 0;
}

.gallery-btn {
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface-2);
  box-shadow: var(--shadow-sm);
  cursor: zoom-in;
  transition: box-shadow 0.45s var(--ease-out), transform 0.45s var(--ease-out);
}

.gallery-btn:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.gallery-btn img {
  width: 100%;
  height: auto;
  transition: transform 0.8s var(--ease-out);
}

.gallery-btn:hover img {
  transform: scale(1.03);
}

.gallery-zoom {
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  display: grid;
  width: 2.2rem;
  height: 2.2rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-principal);
  opacity: 0;
  transform: scale(0.7);
  transition: opacity 0.35s ease, transform 0.45s var(--ease-out);
}

.gallery-btn:hover .gallery-zoom,
.gallery-btn:focus-visible .gallery-zoom {
  opacity: 1;
  transform: scale(1);
}

.gallery-item figcaption {
  margin-top: 0.6rem;
  color: var(--color-text-light);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-align: center;
}

/* ===== API ===== */
.api-code {
  margin-top: 2rem;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: #2a211a;
  box-shadow: var(--shadow-md);
}

.api-code pre {
  max-height: 32rem;
  padding: 1.6rem;
  overflow: auto;
  color: #f2e9dd;
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  white-space: pre;
}

/* ===== PAGINAÇÃO ===== */
.pager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: clamp(4rem, 8vw, 6rem);
}

.pager-link {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.6rem 1.8rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  text-decoration: none;
  transition: border-color 0.35s ease, transform 0.45s var(--ease-out), box-shadow 0.45s var(--ease-out);
}

.pager-link:hover {
  border-color: var(--color-principal);
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.pager-link span {
  color: var(--color-text-light);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pager-link strong {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
}

.pager-next {
  text-align: right;
  align-items: flex-end;
}

.pager-next strong {
  justify-content: flex-end;
}

/* ===== LIGHTBOX ===== */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 4rem 5rem;
  background: rgba(10, 6, 16, 0.92);
  backdrop-filter: blur(6px);
}

.lb-image {
  max-width: 100%;
  max-height: calc(100vh - 8rem);
  object-fit: contain;
  border-radius: var(--radius-sm);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.lb-close,
.lb-nav {
  position: absolute;
  display: grid;
  width: 3rem;
  height: 3rem;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.35s var(--ease-out);
}

.lb-close:hover,
.lb-nav:hover {
  background: rgba(255, 255, 255, 0.18);
}

.lb-close {
  top: 1.2rem;
  right: 1.2rem;
}

.lb-nav {
  top: 50%;
  margin-top: -1.5rem;
}

.lb-prev {
  left: 1.2rem;
}

.lb-next {
  right: 1.2rem;
}

.lb-nav:hover {
  transform: scale(1.08);
}

.lb-count {
  position: absolute;
  bottom: 1.4rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
}

.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.35s ease;
}

.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}

.zoom-enter-active,
.zoom-leave-active {
  transition: opacity 0.3s ease, transform 0.45s var(--ease-out);
}

.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  padding-block: clamp(4rem, 10vw, 8rem);
}

/* ===== RESPONSIVO ===== */
@media (max-width: 960px) {
  .details-hero,
  .features {
    grid-template-columns: 1fr;
  }

  .meta {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .story,
  .gallery-grid,
  .pager {
    grid-template-columns: 1fr;
  }

  .pager-next {
    text-align: left;
    align-items: flex-start;
  }

  .pager-next strong {
    justify-content: flex-start;
  }

  .lightbox {
    padding: 4.5rem 1rem 3.5rem;
  }

  .lb-nav {
    top: auto;
    bottom: 1rem;
    margin-top: 0;
  }

  .lb-prev {
    left: 1rem;
  }

  .lb-next {
    right: 1rem;
  }
}
</style>
