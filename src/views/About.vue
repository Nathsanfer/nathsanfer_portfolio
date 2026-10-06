<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const learningJourney = [
  {
    year: "2023",
    title: "Primeiros passos em Cloud e IA",
    text: "Primeiro contato com computação em nuvem e inteligência artificial por meio dos fundamentos do Google Cloud e da implantação de serviços em nuvem.",
    icon: "lni-cloud-2",
  },
  {
    year: "2024",
    title: "Fundamentos do desenvolvimento",
    text: "Primeiro ano do técnico em Desenvolvimento de Sistemas, explorando HTML, CSS, JavaScript, React, lógica de programação, back-end e arquitetura de redes.",
    icon: "lni-code-1",
  },
  {
    year: "2025",
    title: "Construção de sistemas",
    text: "Aprofundamento no desenvolvimento de sistemas, explorando aplicações mobile, Bootstrap, IoT, testes de software, bancos de dados e levantamento de requisitos.",
    icon: "lni-gear-1",
  },
  {
    year: "2026",
    title: "Ampliando minha visão",
    text: "Explorando Vue, Supabase, Engenharia de Software, Cloud, Python, Java, Ciência de Dados, SPA, Spring Boot, CLP, automação industrial, CI/CD e Tailwind CSS.",
    icon: "lni-rocket-5",
  },
];

const formations = [
  {
    period: "2024 — 2025",
    title: "Técnico em Desenvolvimento de Sistemas",
    institution: "SENAI Valinhos - SP",
    text: "Formação em desenvolvimento de sistemas, com estudos em programação, desenvolvimento web e mobile, bancos de dados, redes, IoT, testes de software e levantamento de requisitos.",
  },
  {
    period: "2026 — 2027",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Campus SENAI Mange Campinas - SP",
    text: "Formação que amplia minha visão sobre tecnologia, com estudos em desenvolvimento de sistemas, inteligência artificial, computação em nuvem, ciência de dados, aplicações mobile e automação industrial.",
  },
];
</script>

<template>
  <Header />
  <main class="about-page">
    <section class="about-intro">
      <div class="about-copy">
        <p class="eyebrow">SOBRE MIM</p>
        <h1>CURIOSIDADE QUE SE<br /><em> transforma em código.</em></h1>
        <p>
          Sou desenvolvedora de sistemas em formação e apaixonada por
          tecnologia, aprendizado e pela construção de soluções. Gosto de
          entender como as coisas funcionam, transformar ideias em sistemas e
          aprender na prática enquanto enfrento novos desafios.
        </p>
        <p>
          Ao longo da minha formação, explorei diferentes áreas da tecnologia,
          passando pelo desenvolvimento web e mobile, back-end, bancos de dados,
          computação em nuvem, inteligência artificial, ciência de dados e
          automação industrial. Essa diversidade me permite enxergar um sistema
          não apenas pelo código, mas também pelos dados, pela arquitetura e
          pelo problema que ele precisa resolver.
        </p>
      </div>

      <div class="formations" aria-label="Minhas formações">
        <div class="formations-heading">
          <div class="container-icon">
            <img src="../assets/graduation.png" alt="Formação" />
          </div>
          <h2>FORMAÇÕES</h2>
        </div>
        <article
          v-for="formation in formations"
          :key="formation.title"
          class="formation-card"
        >
          <p>{{ formation.period }}</p>
          <h3>{{ formation.title }}</h3>
          <strong>{{ formation.institution }}</strong>
          <span>{{ formation.text }}</span>
        </article>
      </div>
    </section>

    <hr />
    
    <section class="journey-intro">
      <p class="eyebrow">MINHA JORNADA</p>
      <h1>
        UMA TRAJETÓRIA DE<br />
        <em>aprendizado contínuo.</em>
      </h1>
      <p class="intro-text">
        Da computação em nuvem ao desenvolvimento de sistemas, minha jornada é
        marcada pela curiosidade de aprender novas tecnologias, colocar
        conhecimentos em prática e entender como diferentes áreas da tecnologia
        se conectam.
      </p>
    </section>

    <section class="timeline" aria-label="Linha do tempo de aprendizados">
      <div class="timeline-track" aria-hidden="true"></div>
      <article
        v-for="(item, index) in learningJourney"
        :key="item.year"
        class="timeline-item"
        :class="index % 2 === 0 ? 'is-top' : 'is-bottom'"
      >
        <div class="timeline-card">
          <div class="card-header">
            <div class="card-icon">
              <i class="lni" :class="item.icon" aria-hidden="true"></i>
            </div>
            <p class="card-year">{{ item.year }}</p>
          </div>
          <h2>{{ item.title }}</h2>
          <p class="card-text">{{ item.text }}</p>
        </div>
      </article>
    </section>
  </main>
  <Footer />
</template>

<style scoped>
hr {
  border: none;
  height: 1px;
  background-color: var(--color-border);
  margin-bottom: 4rem;
  margin-top: -2rem;
}

.about-page {
  padding: 2rem 2.5rem 7rem;
  overflow: hidden;
  max-width: 1400px; /* Limita a largura em monitores ultrawide */
  margin: 0 auto;
}

/* --- ABOUT INTRO --- */
.about-intro {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 6rem;
  margin-top: 3rem;
  gap: 4rem; /* Gap fluido no lugar de margens rígidas */
}

.about-copy {
  width: 100%;
  max-width: 42rem; /* Alterado de width fixo para max-width */
}

.about-copy h1, .journey-intro h1 {
  margin-bottom: 1.5rem;
  color: var(--color-text);
  font-size: clamp(2.2rem, 4vw, 3rem); /* Tipografia fluida */
  font-weight: 300;
  line-height: 1.1;
}

.about-copy h1 em, .journey-intro h1 em {
  font-size: clamp(2.4rem, 4.5vw, 3.2rem);
  font-weight: 400;
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-style: normal;
  display: inline-block;
  margin-top: 0.2rem;
}

.about-copy > p:not(.eyebrow) {
  margin-top: 1rem;
  color: var(--color-text-light);
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.7;
  font-weight: 300;
}

.eyebrow {
  margin-bottom: 1rem;
  color: var(--color-principal);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
}

/* --- FORMATIONS --- */
.formations {
  width: 100%;
  max-width: 32rem;
  padding-bottom: 0.25rem;
}

.formations-heading {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.8rem;
}

.container-icon {
  display: grid;
  width: 3.4rem;
  height: 3.4rem;
  flex: 0 0 3.4rem;
  place-items: center;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  overflow: hidden;
}

.container-icon img {
  width: 2.1rem;
  height: 2.1rem;
  object-fit: contain;
}

.formations-heading h2 {
  color: var(--color-text);
  font-size: 1.3rem;
  font-weight: 400;
}

.formation-card {
  position: relative;
  padding: 0 0 1.5rem 1.5rem;
  margin-bottom: 1rem;
}

.formation-card::before {
  position: absolute;
  top: 0.35rem;
  left: 0;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: var(--color-principal);
  content: "";
  opacity: 0.8;
}

.formation-card p {
  margin-bottom: 0.4rem;
  color: var(--color-principal);
  font-size: 0.75rem;
  font-weight: 600;
}

.formation-card h3 {
  margin-bottom: 0.45rem;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 500;
}

.formation-card strong {
  display: block;
  margin-bottom: 0.55rem;
  color: var(--color-text);
  font-size: 0.8rem;
  font-weight: 400;
}

.formation-card span {
  display: block;
  color: var(--color-text-light);
  font-size: 0.85rem;
  line-height: 1.6;
  font-weight: 300;
}

/* --- JOURNEY INTRO --- */
.journey-intro {
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

.intro-text {
  max-width: 45rem;
  margin: 1.5rem auto 0;
  color: var(--color-text-light);
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.7;
  font-weight: 300;
}

/* --- TIMELINE DESKTOP --- */
.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 86rem;
  margin: 7rem auto 0;
}

.timeline-track {
  position: absolute;
  top: 50%;
  right: 2%;
  left: 2%;
  height: 1px;
  background: var(--color-principal);
  opacity: 0.3;
}

.timeline-item {
  position: relative;
  display: flex;
  justify-content: center;
}

.timeline-item.is-top { align-items: flex-start; }
.timeline-item.is-bottom { align-items: flex-end; }

.timeline-item::after {
  position: absolute;
  left: 50%;
  width: 1px;
  height: 3.5rem;
  background: var(--color-principal);
  content: "";
  opacity: 0.3;
}

.timeline-item.is-top::after { top: calc(50% - 3.5rem); }
.timeline-item.is-bottom::after { top: 50%; }

.timeline-card {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 0.8rem 2rem rgba(154, 126, 176, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-card:hover {
  box-shadow: 0 1rem 3rem rgba(154, 126, 176, 0.08);
}

.is-top .timeline-card { transform: translateY(-1.5rem); }
.is-bottom .timeline-card { transform: translateY(1.5rem); }

.card-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1rem;
}

.card-icon {
  display: grid;
  width: 2.2rem;
  height: 2.2rem;
  place-items: center;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-principal);
  font-size: 1.1rem;
}

.card-year {
  margin: 0;
  color: var(--color-principal);
  font-size: 0.95rem;
  font-weight: 500;
}

.timeline-card h2 {
  margin-bottom: 0.5rem;
  color: var(--color-text);
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.3;
}

.card-text {
  color: var(--color-text-light);
  font-size: 0.85rem;
  line-height: 1.6;
  font-weight: 300;
}

.timeline-dot {
  position: absolute;
  z-index: 2;
  top: calc(50% - 0.45rem);
  width: 0.9rem;
  height: 0.9rem;
  border: 2px solid #fff;
  border-radius: 50%;
  background: var(--color-principal);
  box-shadow: 0 0 0 1px var(--color-border);
}


/* ================= RESPONSIVIDADE ================= */

/* Tablet e Telas Médias (Mudança da Timeline e Layout Principal) */
@media (max-width: 1024px) {
  .about-intro {
    flex-direction: column;
    gap: 4rem;
  }

  .about-copy {
    max-width: 100%;
  }
  
  .formations {
    max-width: 100%;
  }

  /* Timeline Horizontal -> Vertical */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
    padding-left: 1.5rem; /* Espaço para a linha vertical */
  }

  .timeline-track {
    top: 0;
    bottom: 0;
    left: 0.4rem;
    width: 2px;
    height: 100%;
  }

  .timeline-item, 
  .timeline-item.is-top, 
  .timeline-item.is-bottom {
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 2rem; /* Afasta o card da linha */
  }

  .timeline-item::after {
    display: none; /* Remove linhas verticais conectores antigas */
  }

  .timeline-card, 
  .is-top .timeline-card, 
  .is-bottom .timeline-card {
    transform: none; /* Remove os pulos de Y */
    width: 100%;
    max-width: 35rem; /* Evita que o card estique demais na tela inteira */
  }

  .timeline-dot {
    top: 2rem; /* Alinha com o header do card */
    left: -0.05rem; /* Centraliza perfeitamente na linha vertical */
  }
}

/* Mobile */
@media (max-width: 600px) {
  .about-page {
    padding: 2rem 1.25rem 4rem;
  }

  .about-intro {
    margin-top: 1rem;
    margin-bottom: 4rem;
    gap: 3rem;
  }

  .journey-intro {
    text-align: left; /* No mobile, textos alinhados à esquerda ficam melhores */
  }

  .intro-text {
    margin: 1rem 0 0 0;
  }

  hr {
    margin-bottom: 3rem;
  }

  /* Ajuste fino da linha do tempo no mobile */
  .timeline {
    padding-left: 0; 
  }

  .timeline-track {
    left: 0;
  }

  .timeline-item {
    padding-left: 1.5rem;
  }

  .timeline-card {
    padding: 1.25rem;
  }

  .timeline-dot {
    left: -0.45rem; /* Ajuste milimétrico para o dot ficar na linha colada à borda */
    top: 1.8rem;
  }
}
</style>