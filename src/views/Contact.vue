<script setup>
import { onBeforeUnmount, ref } from 'vue'
import SvgIcon from '../components/SvgIcon.vue'
import linkedin from '../assets/linkedin.svg?raw'
import github from '../assets/github.svg?raw'

const EMAIL = 'nathalia.ferreira7629@gmail.com'

const copied = ref(false)
let resetTimer = null

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(EMAIL)
    copied.value = true
    window.clearTimeout(resetTimer)
    resetTimer = window.setTimeout(() => (copied.value = false), 2200)
  } catch {
    // Sem permissão de área de transferência: abre o aplicativo de e-mail
    window.location.href = `mailto:${EMAIL}`
  }
}

onBeforeUnmount(() => window.clearTimeout(resetTimer))
</script>

<template>
  <main class="contact container">
    <section class="contact-head" v-reveal>
      <p class="eyebrow">Contato</p>
      <h1 class="display-title">
        Vamos criar algo <em>que importa.</em>
      </h1>
      <p class="lead">
        Tem uma ideia, um projeto ou só quer trocar uma ideia sobre tecnologia?
        Estou sempre aberta a boas conversas.
      </p>
    </section>

    <section class="email-card" v-reveal="120" aria-label="E-mail">
      <div class="email-info">
        <span class="email-label">E-mail</span>
        <a :href="`mailto:${EMAIL}`" class="email-address">{{ EMAIL }}</a>
      </div>
      <div class="email-actions">
        <a :href="`mailto:${EMAIL}`" class="btn btn-primary">
          Enviar e-mail
          <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
        </a>
        <button type="button" class="btn btn-ghost copy-btn" :class="{ 'is-copied': copied }" @click="copyEmail">
          <span class="copy-label">{{ copied ? 'Copiado!' : 'Copiar' }}</span>
        </button>
      </div>
    </section>

    <section class="links" aria-label="Outras formas de contato">
      <a
        v-reveal="0"
        href="https://www.linkedin.com/in/nathalia-ferreira-7b0b1b1b9/"
        target="_blank"
        rel="noopener noreferrer"
        class="link-card link-dark"
      >
        <span class="link-icon"><SvgIcon :svg="linkedin" /></span>
        <span class="link-body">
          <span class="link-label">Conexões profissionais</span>
          <strong>LinkedIn</strong>
        </span>
        <i class="lni lni-arrow-angular-top-right link-arrow" aria-hidden="true"></i>
      </a>

      <a
        v-reveal="120"
        href="https://github.com/nathalia-ferreira"
        target="_blank"
        rel="noopener noreferrer"
        class="link-card"
      >
        <span class="link-icon"><SvgIcon :svg="github" /></span>
        <span class="link-body">
          <span class="link-label">Código e projetos</span>
          <strong>GitHub</strong>
        </span>
        <i class="lni lni-arrow-angular-top-right link-arrow" aria-hidden="true"></i>
      </a>
    </section>

    <div class="contact-foot" v-reveal>
      <p class="status">
        <span class="status-dot" aria-hidden="true"></span>
        Valinhos, São Paulo · disponível para conversar
      </p>
      <RouterLink to="/projects" class="link-arrow">
        Explorar projetos
        <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 5vw, 3.5rem);
  padding-top: clamp(3rem, 8vw, 6rem);
  padding-bottom: clamp(3rem, 6vw, 5rem);
}

.contact-head {
  max-width: 52rem;
}

.contact-head .display-title {
  margin-bottom: 1.4rem;
  font-size: clamp(2.6rem, 6vw, 5rem);
}

/* ===== E-MAIL ===== */
.email-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem 2.5rem;
  padding: clamp(1.8rem, 4vw, 2.6rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-md);
}

.email-label {
  display: block;
  margin-bottom: 0.4rem;
  color: var(--color-principal);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.email-address {
  color: var(--color-text);
  font-size: clamp(1.1rem, 2.6vw, 1.7rem);
  font-weight: 400;
  text-decoration: none;
  overflow-wrap: anywhere;
  background-image: linear-gradient(var(--color-principal), var(--color-principal));
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.5s var(--ease-out), color 0.3s ease;
}

.email-address:hover {
  color: var(--color-principal);
  background-size: 100% 2px;
}

.email-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.copy-btn {
  min-width: 8.5rem;
}

.copy-btn.is-copied {
  border-color: #4fbf8b;
  color: #3aa675;
}

.copy-label {
  display: inline-block;
  animation: fade-in 0.35s ease;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
}

/* ===== LINKS ===== */
.links {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.link-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: clamp(1.5rem, 3vw, 2.1rem);
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  color: var(--color-text);
  text-decoration: none;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.55s var(--ease-out),
    box-shadow 0.55s var(--ease-out),
    border-color 0.4s ease,
    background-color 0.4s ease;
}

.link-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-principal);
  box-shadow: var(--shadow-md);
}

.link-dark {
  background: var(--color-cta-bg);
  border-color: transparent;
  color: #f1edf5;
}

.link-dark:hover {
  border-color: var(--color-principal);
}

.link-icon {
  display: grid;
  width: 3.4rem;
  height: 3.4rem;
  flex-shrink: 0;
  place-items: center;
  border-radius: 16px;
  background: var(--color-principal-soft);
  color: var(--color-principal);
  transition: transform 0.5s var(--ease-out), background-color 0.3s ease, color 0.3s ease;
}

.link-icon :deep(.svg-icon) {
  width: 1.5rem;
  height: 1.5rem;
}

.link-dark .link-icon {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-cta-accent);
}

.link-card:hover .link-icon {
  transform: rotate(-8deg) scale(1.05);
}

.link-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.15rem;
}

.link-label {
  color: var(--color-text-light);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.link-dark .link-label {
  color: var(--color-cta-accent);
  opacity: 0.8;
}

.link-body strong {
  font-size: 1.4rem;
  font-weight: 500;
}

.link-arrow {
  color: var(--color-principal);
  font-size: 1.1rem;
  transition: transform 0.45s var(--ease-out);
}

.link-card:hover .link-arrow {
  transform: translate(3px, -3px);
}

/* ===== RODAPÉ DA PÁGINA ===== */
.contact-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--color-text-light);
  font-size: 0.86rem;
}

.status-dot {
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #4fbf8b;
}

@media (max-width: 720px) {
  .links {
    grid-template-columns: 1fr;
  }

  .email-actions {
    width: 100%;
  }

  .email-actions .btn {
    flex: 1;
  }
}
</style>
