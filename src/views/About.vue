<script setup>
import SvgIcon from '../components/SvgIcon.vue'
import capelo from '../assets/capelo.svg?raw'

const learningJourney = [
  {
    year: '2023',
    title: 'Primeiros passos em Cloud e IA',
    text: 'Primeiro contato com computação em nuvem e inteligência artificial por meio dos fundamentos do Google Cloud e da implantação de serviços em nuvem.',
    icon: 'lni-cloud-2',
  },
  {
    year: '2024',
    title: 'Fundamentos do desenvolvimento',
    text: 'Primeiro ano do técnico em Desenvolvimento de Sistemas, explorando HTML, CSS, JavaScript, React, lógica de programação, back-end e arquitetura de redes.',
    icon: 'lni-code-1',
  },
  {
    year: '2025',
    title: 'Construção de sistemas',
    text: 'Aprofundamento no desenvolvimento de sistemas, explorando aplicações mobile, Bootstrap, IoT, testes de software, bancos de dados e levantamento de requisitos.',
    icon: 'lni-gear-1',
  },
  {
    year: '2026',
    title: 'Ampliando minha visão',
    text: 'Explorando Vue, Supabase, Engenharia de Software, Cloud, Python, Java, Ciência de Dados, SPA, Spring Boot, CLP, automação industrial, CI/CD e Tailwind CSS.',
    icon: 'lni-rocket-5',
  },
]

const formations = [
  {
    period: '2024 — 2025',
    title: 'Técnico em Desenvolvimento de Sistemas',
    institution: 'SENAI Valinhos - SP',
    text: 'Formação em desenvolvimento de sistemas, com estudos em programação, desenvolvimento web e mobile, bancos de dados, redes, IoT, testes de software e levantamento de requisitos.',
  },
  {
    period: '2026 — 2027',
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Campus SENAI Mange Campinas - SP',
    text: 'Formação que amplia minha visão sobre tecnologia, com estudos em desenvolvimento de sistemas, inteligência artificial, computação em nuvem, ciência de dados, aplicações mobile e automação industrial.',
  },
]
</script>

<template>
  <main class="about container">
    <!-- INTRO -->
    <section class="about-intro">
      <div class="about-copy" v-reveal>
        <p class="eyebrow">Sobre mim</p>
        <h1 class="display-title">
          Curiosidade que se <br />
          <em>transforma em código.</em>
        </h1>
        <p class="lead">
          Sou desenvolvedora de sistemas em formação e apaixonada por
          tecnologia, aprendizado e pela construção de soluções. Gosto de
          entender como as coisas funcionam, transformar ideias em sistemas e
          aprender na prática enquanto enfrento novos desafios.
        </p>
        <p class="lead">
          Ao longo da minha formação, explorei diferentes áreas da tecnologia,
          passando pelo desenvolvimento web e mobile, back-end, bancos de dados,
          computação em nuvem, inteligência artificial, ciência de dados e
          automação industrial. Essa diversidade me permite enxergar um sistema
          não apenas pelo código, mas também pelos dados, pela arquitetura e
          pelo problema que ele precisa resolver.
        </p>
      </div>

      <div class="formations" aria-label="Minhas formações">
        <header class="formations-head" v-reveal="120">
          <span class="formations-icon"><SvgIcon :svg="capelo" /></span>
          <h2>Formações</h2>
        </header>

        <article
          v-for="(formation, index) in formations"
          :key="formation.title"
          class="formation-card"
          v-reveal="200 + index * 120"
        >
          <p class="formation-period">{{ formation.period }}</p>
          <h3>{{ formation.title }}</h3>
          <strong>{{ formation.institution }}</strong>
          <span>{{ formation.text }}</span>
        </article>
      </div>
    </section>

    <!-- JORNADA -->
    <section class="journey" aria-labelledby="journey-title">
      <div class="journey-intro" v-reveal>
        <p class="eyebrow">Minha jornada</p>
        <h2 id="journey-title" class="display-title">
          Uma trajetória de <em>aprendizado contínuo.</em>
        </h2>
        <p class="lead">
          Da computação em nuvem ao desenvolvimento de sistemas, minha jornada é
          marcada pela curiosidade de aprender novas tecnologias, colocar
          conhecimentos em prática e entender como diferentes áreas da tecnologia
          se conectam.
        </p>
      </div>

      <ol class="timeline" aria-label="Linha do tempo de aprendizados">
        <li
          v-for="(item, index) in learningJourney"
          :key="item.year"
          class="timeline-item"
          v-reveal="index * 120"
        >
          <span class="timeline-node" aria-hidden="true">
            <i class="lni" :class="item.icon"></i>
          </span>
          <article class="timeline-card">
            <p class="timeline-year">{{ item.year }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </li>
      </ol>
    </section>
  </main>
</template>

<style scoped>
.about {
  padding-top: clamp(2.5rem, 6vw, 5rem);
  padding-bottom: clamp(3rem, 6vw, 5rem);
}

/* ===== INTRO ===== */
.about-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  align-items: start;
  gap: clamp(3rem, 6vw, 6rem);
}

.about-copy .display-title {
  margin-bottom: 1.8rem;
  font-size: clamp(2.4rem, 5vw, 4.2rem);
}

.about-copy .lead + .lead {
  margin-top: 1rem;
}

/* ===== FORMAÇÕES ===== */
.formations {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: clamp(1.5rem, 3vw, 2.2rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
}

.formations-head {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.formations-icon {
  display: grid;
  width: 3rem;
  height: 3rem;
  place-items: center;
  border-radius: 14px;
  background: var(--color-principal-soft);
  color: var(--color-principal);
  transition: background-color 0.4s ease, color 0.4s ease;
}

/* A cor segue o tema: claro usa o caramelo escuro, escuro usa o caramelo claro */
.formations-icon :deep(.svg-icon) {
  width: 2rem;
  height: 2rem;
}

.formations-head h2 {
  font-size: 1.25rem;
}

.formation-card {
  position: relative;
  padding-left: 1.2rem;
  border-left: 2px solid var(--color-principal);
  transition: border-color 0.4s ease, transform 0.5s var(--ease-out);
}

.formation-card:hover {
  transform: translateX(4px);
}

.formation-period {
  margin-bottom: 0.35rem;
  color: var(--color-principal);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.formation-card h3 {
  margin-bottom: 0.35rem;
  font-size: 1.05rem;
  font-weight: 500;
}

.formation-card strong {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text);
  font-size: 0.8rem;
  font-weight: 500;
}

.formation-card > span {
  display: block;
  color: var(--color-text-light);
  font-size: 0.85rem;
  line-height: 1.65;
}

/* ===== JORNADA ===== */
.journey {
  margin-top: clamp(5rem, 10vw, 8rem);
}

.journey-intro {
  max-width: 44rem;
  margin-bottom: clamp(3rem, 6vw, 4.5rem);
}

.journey-intro .display-title {
  margin-bottom: 1.2rem;
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
}

/* Linha do tempo: vertical, com a linha se desenhando */
.timeline {
  position: relative;
  display: grid;
  gap: 2.25rem;
  list-style: none;
  padding-left: clamp(3.5rem, 8vw, 6rem);
}

.timeline::before {
  position: absolute;
  top: 1.5rem;
  bottom: 1.5rem;
  left: 1.4rem;
  width: 2px;
  border-radius: 2px;
  background: linear-gradient(180deg, var(--color-principal), var(--color-border));
  content: '';
}

.timeline-item {
  position: relative;
}

.timeline-node {
  position: absolute;
  top: 1.4rem;
  left: calc(-1 * clamp(3.5rem, 8vw, 6rem) + 0.15rem);
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  place-items: center;
  border: 1px solid var(--color-border-strong);
  border-radius: 50%;
  background: var(--color-bg);
  color: var(--color-principal);
  font-size: 1rem;
  box-shadow: 0 0 0 6px var(--color-bg);
  transition: background-color 0.4s ease, color 0.4s ease, transform 0.5s var(--ease-out);
}

.timeline-item:hover .timeline-node {
  background: var(--color-principal);
  color: #fff;
  transform: scale(1.08);
}

.timeline-card {
  padding: clamp(1.5rem, 3vw, 2rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
  transition: transform 0.5s var(--ease-out), box-shadow 0.5s var(--ease-out), border-color 0.4s ease;
}

.timeline-item:hover .timeline-card {
  transform: translateX(6px);
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-md);
}

.timeline-year {
  margin-bottom: 0.4rem;
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: 1.6rem;
  font-style: italic;
  line-height: 1;
}

.timeline-card h3 {
  margin-bottom: 0.6rem;
  font-size: 1.15rem;
  font-weight: 500;
}

.timeline-card p:last-child {
  color: var(--color-text-light);
  font-size: 0.88rem;
  line-height: 1.7;
}

/* ===== RESPONSIVO ===== */
@media (max-width: 900px) {
  .about-intro {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .timeline {
    padding-left: 3rem;
    gap: 1.5rem;
  }

  .timeline::before {
    left: 1.1rem;
  }

  .timeline-node {
    left: -3rem;
    width: 2.2rem;
    height: 2.2rem;
    font-size: 0.9rem;
  }

  .timeline-card {
    padding: 1.25rem;
  }
}
</style>
