<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import SvgIcon from './SvgIcon.vue'
import avion from '../assets/avion.svg?raw'

const route = useRoute()

const links = [
  { to: '/', label: 'Início' },
  { to: '/about', label: 'Sobre mim' },
  { to: '/projects', label: 'Projetos' },
  { to: '/knowledge', label: 'Conhecimentos' },
]

const isOpen = ref(false)
const isScrolled = ref(false)

const isActive = (to) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

const headerClass = computed(() => ({
  'is-scrolled': isScrolled.value,
  'is-open': isOpen.value,
}))

// Fecha o menu mobile ao navegar
watch(
  () => route.fullPath,
  () => (isOpen.value = false),
)

function onScroll() {
  isScrolled.value = window.scrollY > 12
}

function onKeydown(event) {
  if (event.key === 'Escape') isOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="header" :class="headerClass">
    <div class="container header-inner">
      <RouterLink to="/" class="brand" aria-label="Página inicial de Nathalia">
        <img src="../assets/star.png" alt="" class="brand-mark" />
        <span class="brand-text">
          <strong>NATHALIA</strong>
          <small>DESENVOLVEDORA</small>
        </span>
      </RouterLink>

      <nav id="site-nav" class="nav" :class="{ 'is-open': isOpen }" aria-label="Principal">
        <ul>
          <li v-for="(link, index) in links" :key="link.to" :style="{ '--i': index }">
            <RouterLink :to="link.to" :class="{ 'is-active': isActive(link.to) }">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
        <RouterLink to="/contact" class="btn btn-primary nav-cta">
          Vamos conversar
          <SvgIcon :svg="avion" />
        </RouterLink>
      </nav>

      <div class="header-actions">
        <ThemeToggle />

        <RouterLink to="/contact" class="btn btn-primary header-cta">
          Vamos conversar
          <SvgIcon :svg="avion" />
        </RouterLink>

        <button
          type="button"
          class="menu-toggle"
          :aria-expanded="isOpen"
          aria-controls="site-nav"
          :aria-label="isOpen ? 'Fechar menu' : 'Abrir menu'"
          @click="isOpen = !isOpen"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--color-bg) 72%, transparent);
  backdrop-filter: blur(14px) saturate(1.2);
  -webkit-backdrop-filter: blur(14px) saturate(1.2);
  border-bottom: 1px solid transparent;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}

.header.is-scrolled {
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  height: var(--header-h);
}

/* Marca */
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
}

.brand-mark {
  width: 2.6rem;
  height: 2.6rem;
  object-fit: contain;
  transition: transform 0.8s var(--ease-out);
}

.brand:hover .brand-mark {
  transform: rotate(90deg) scale(1.05);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.brand-text strong {
  color: var(--color-text);
  font-size: 0.98rem;
  font-weight: 500;
  letter-spacing: 0.08em;
}

.brand-text small {
  color: var(--color-text-light);
  font-size: 0.66rem;
  letter-spacing: 0.12em;
}

/* Navegação */
.nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav ul {
  display: flex;
  gap: clamp(1.2rem, 2.6vw, 2.4rem);
  list-style: none;
}

.nav a {
  position: relative;
  padding: 0.4rem 0;
  color: var(--color-text-light);
  font-size: 0.86rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav a::after {
  position: absolute;
  right: 0;
  bottom: -0.2rem;
  left: 0;
  height: 2px;
  border-radius: 2px;
  background: var(--color-principal);
  content: '';
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.45s var(--ease-out);
}

.nav a:hover,
.nav a.is-active {
  color: var(--color-text);
}

.nav a.is-active::after,
.nav a:hover::after {
  transform: scaleX(1);
}

.nav-cta {
  display: none;
}

/* Mais específico que ".nav a", para o texto não herdar a cor muted */
.nav .nav-cta {
  justify-content: center;
  padding: 0.9rem 1.6rem;
  color: var(--color-bg);
  font-size: 0.9rem;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-cta {
  padding: 0.7rem 1.2rem;
  font-size: 0.8rem;
}

.header-cta :deep(.svg-icon) {
  width: 1rem;
  height: 1rem;
}

/* Botão do menu mobile */
.menu-toggle {
  display: none;
  position: relative;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--color-border-strong);
  border-radius: 50%;
  background: var(--color-surface);
}

.menu-toggle span {
  position: absolute;
  left: 50%;
  width: 1.1rem;
  height: 1.5px;
  margin-left: -0.55rem;
  border-radius: 2px;
  background: var(--color-text);
  transition: transform 0.45s var(--ease-out), opacity 0.3s ease;
}

.menu-toggle span:first-child {
  top: calc(50% - 4px);
}

.menu-toggle span:last-child {
  top: calc(50% + 4px);
}

.header.is-open .menu-toggle span:first-child {
  transform: translateY(4px) rotate(45deg);
}

.header.is-open .menu-toggle span:last-child {
  transform: translateY(-4px) rotate(-45deg);
}

/* Tablets e celulares: menu em painel */
@media (max-width: 960px) {
  .header-cta {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .nav {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
    padding: 1.5rem clamp(1.5rem, 4vw, 3rem) 2rem;
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    box-shadow: var(--shadow-md);
    opacity: 0;
    transform: translateY(-12px);
    pointer-events: none;
    transition: opacity 0.35s ease, transform 0.5s var(--ease-out);
  }

  .nav.is-open {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }

  .nav ul {
    flex-direction: column;
    gap: 0;
  }

  .nav li {
    border-bottom: 1px solid var(--color-border);
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.4s ease, transform 0.5s var(--ease-out);
    transition-delay: calc(var(--i) * 0.05s);
  }

  .nav.is-open li {
    opacity: 1;
    transform: none;
  }

  .nav a {
    display: block;
    padding: 1rem 0;
    font-size: 1rem;
  }

  .nav a::after {
    display: none;
  }

  .nav a.is-active {
    color: var(--color-principal);
  }

  .nav .nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    margin-top: 0.5rem;
  }
}

@media (max-width: 480px) {
  .brand-text small {
    display: none;
  }
}
</style>
