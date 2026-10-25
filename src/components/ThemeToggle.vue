<script setup>
import { useTheme } from '../composables/useTheme.js'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'"
    :title="theme === 'dark' ? 'Tema claro' : 'Tema escuro'"
    @click="toggleTheme"
  >
    <svg class="icon icon-sun" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
    <svg class="icon icon-moon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: relative;
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  place-items: center;
  border: 1px solid var(--color-border-strong);
  border-radius: 50%;
  color: var(--color-text);
  background: var(--color-surface);
  transition: border-color 0.3s ease, color 0.3s ease, transform 0.4s var(--ease-out);
}

.theme-toggle:hover {
  border-color: var(--color-principal);
  color: var(--color-principal);
  transform: rotate(-12deg);
}

.icon {
  grid-area: 1 / 1;
  width: 1.15rem;
  height: 1.15rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: opacity 0.4s ease, transform 0.6s var(--ease-out);
}

/* Modo claro mostra a lua (próxima ação: escurecer); modo escuro mostra o sol */
.icon-sun {
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
}

.icon-moon {
  opacity: 1;
  transform: none;
}

:root[data-theme='dark'] .icon-sun,
:root:not([data-theme='light']) .icon-sun {
  opacity: 1;
  transform: none;
}

:root[data-theme='dark'] .icon-moon,
:root:not([data-theme='light']) .icon-moon {
  opacity: 0;
  transform: rotate(90deg) scale(0.6);
}
</style>
