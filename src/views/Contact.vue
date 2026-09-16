<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header />
  <main class="contact-page">
    <section class="contact-intro">
      <div class="eyebrow">
        <span class="eyebrow-line"></span>
        <span>CONTATO</span>
      </div>
      <h1>Vamos criar algo <em>que importa.</em></h1>
      <p class="intro-text">
        Tem uma ideia, um projeto ou só quer trocar uma ideia sobre tecnologia?
        Estou sempre aberta a boas conversas.
      </p>
      <a
        class="email-link"
        href="mailto:nathalia.ferreira7629@gmail.com"
      >
        <span>nathalia.ferreira7629@gmail.com</span>
        <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
      </a>
    </section>

    <section class="contact-links" aria-label="Outras formas de contato">
      <a
        class="contact-card contact-card-dark"
        href="https://www.linkedin.com/in/nathalia-ferreira-7b0b1b1b9/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="card-icon"><img src="../assets/linkedin.svg" alt="" /></div>
        <div>
          <p class="card-label">CONEXÕES PROFISSIONAIS</p>
          <h2>LinkedIn</h2>
          <span class="card-action">Visitar perfil <i class="lni lni-arrow-up-right"></i></span>
        </div>
      </a>
      <a
        class="contact-card contact-card-light"
        href="https://github.com/nathalia-ferreira"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="card-icon"><img src="../assets/github.svg" alt="" /></div>
        <div>
          <p class="card-label">CÓDIGO E PROJETOS</p>
          <h2>GitHub</h2>
          <span class="card-action">Ver repositórios <i class="lni lni-arrow-up-right"></i></span>
        </div>
      </a>
    </section>

    <div class="contact-footer">
      <div class="footer-status">
        <span class="contact-footer-dot"></span>
        <p>Valinhos, São Paulo <span>/</span> disponível para conversar</p>
      </div>
      <RouterLink to="/projects" class="projects-link">
        Explorar projetos
        <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
      </RouterLink>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
/* --- ESTRUTURA PRINCIPAL --- */
.contact-page {
  width: min(100% - 3rem, 76rem);
  min-height: calc(100vh - 12rem); /* Ocupa a altura da tela dinamicamente */
  margin: 0 auto;
  padding: clamp(2.5rem, 5vw, 4.5rem) 0 clamp(2.5rem, 4vw, 3.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

/* --- CABEÇALHO DA PÁGINA --- */
.contact-intro {
  max-width: 48rem;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-principal);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
}

.eyebrow-line {
  width: 2.5rem;
  height: 1px;
  background: var(--color-principal);
  flex-shrink: 0;
}

h1 {
  max-width: 65rem;
  margin: 1.2rem 0 1rem;
  color: #151216;
  font-size: clamp(2.4rem, 6.5vw, 5.2rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.03em;
}

h1 em {
  display: block;
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: 0.9em;
  font-weight: 450;
  margin-top: 0.2rem;
  margin-bottom: 1.5rem;
  font-style: normal;
}

.intro-text {
  max-width: 30rem;
  color: #615c63;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  line-height: 1.7;
}

.email-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.8rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #c8a6d4;
  color: #171318;
  font-size: clamp(0.85rem, 1.8vw, 1rem);
  font-weight: 500;
  text-decoration: none;
  max-width: 100%;
  word-break: break-all;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.email-link i {
  flex-shrink: 0;
  font-size: 0.95rem;
}

.email-link:hover,
.projects-link:hover {
  color: var(--color-principal);
  border-color: var(--color-principal);
}

/* --- CARDS DE CONTATO --- */
.contact-links {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 3.5rem;
}

.contact-card {
  min-height: 10.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: clamp(1.25rem, 3vw, 1.75rem);
  border: 1px solid transparent;
  border-radius: 12px;
  text-decoration: none;
  box-sizing: border-box;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.9rem 1.8rem rgba(55, 33, 66, 0.12);
}

.contact-card-dark {
  background: #151218;
  color: #fff;
}

.contact-card-light {
  border-color: #e4dce7;
  background: #fff;
  color: #151218;
}

.card-icon {
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  flex: 0 0 2.75rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-principal);
}

.card-icon img {
  width: 1.25rem;
  height: 1.25rem;
  object-fit: contain;
}

.card-label {
  margin-bottom: 0.75rem;
  color: #a9a2ad;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
}

.contact-card-light .card-label {
  color: #817583;
}

.contact-card h2 {
  margin-bottom: 1rem;
  font-size: clamp(1.35rem, 2.5vw, 1.65rem);
  font-weight: 400;
}

.card-action {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: inherit;
  font-size: 0.8rem;
  font-weight: 500;
}

.card-action i,
.projects-link i {
  font-size: 0.9rem;
}

/* --- RODAPÉ DE STATUS --- */
.contact-footer {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 3.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #efe8f2;
  color: #817983;
  font-size: 0.78rem;
}

.footer-status {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.contact-footer-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #62ad74;
  flex-shrink: 0;
}

.contact-footer p span {
  margin: 0 0.35rem;
  color: #c8becb;
}

.projects-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #c8a6d4;
  color: #302b32;
  font-weight: 500;
  text-decoration: none;
  width: max-content;
  transition: color 0.2s ease, border-color 0.2s ease;
}

/* ================= BREAKPOINTS DE RESPONSIVIDADE ================= */

/* Tablets e Desktops (>= 640px) */
@media (min-width: 640px) {
  .contact-links {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-footer {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>