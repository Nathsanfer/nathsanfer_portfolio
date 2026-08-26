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
        <span class="timeline-dot" aria-hidden="true"></span>
      </article>
    </section>
  </main>
  <Footer />
</template>

<style scoped>
hr {
  border: none;
  height: 1px;
  background-color: #d5d3d6;
  margin-bottom: 4rem;
  margin-top: -2rem;
}
.about-page {
  padding: 2rem 2.5rem 7rem;
  overflow: hidden;
}
.about-intro {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 6rem;
  margin-top: 3rem;
  gap: 7rem;
}
.about-copy {
  width: 42rem;
}
.about-copy h1 {
  margin-bottom: 2rem;
  color: #17131a;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.08;
}
.about-copy h1 em {
  font-size: 2.65rem;
  font-weight: 420;
  color: var(--color-principal);
  width: 80%;
  margin-top: -0.5rem;
  font-family: var(--font-cursive);
}
.about-copy > p:not(.eyebrow) {
  max-width: 40rem;
  margin-top: 1rem;
  color: #68636c;
  font-size: 0.9rem;
  line-height: 1.8;
}
.formations {
  align-self: end;
  padding-bottom: 0.25rem;
  width: 35rem;
}
.formations-heading {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid #ded9e1;
  padding-bottom: 0.8rem;
}
.container-icon {
  display: grid;
  width: 3.4rem;
  height: 3.4rem;
  flex: 0 0 3.4rem;
  place-items: center;
  border: 1px solid var(--color-principal);
  border-radius: 50%;
  overflow: hidden;
}
.container-icon img {
  display: block;
  width: 2.1rem;
  height: 2.1rem;
  margin: 0;
  object-fit: contain;
  background: transparent;
}
.formations-heading h2 {
  color: #19151c;
  font-size: 1.3rem;
  font-weight: 500;
}
.formation-card {
  position: relative;
  padding: 1.1rem 0 1.2rem 1.5rem;
}
.formation-card::before {
  position: absolute;
  top: 1.45rem;
  left: 0;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: var(--color-principal);
  content: "";
}
.formation-card p {
  margin-bottom: 0.4rem;
  color: var(--color-principal);
  font-size: 0.68rem;
  font-weight: 600;
}
.formation-card h3 {
  margin-bottom: 0.45rem;
  color: #19151c;
  font-size: 0.95rem;
  font-weight: 600;
}
.formation-card strong {
  display: block;
  margin-bottom: 0.55rem;
  color: #4f4654;
  font-size: 0.72rem;
  font-weight: 600;
}
.formation-card span {
  display: block;
  color: #716b74;
  font-size: 0.72rem;
  line-height: 1.6;
}
.journey-intro {
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}
.eyebrow {
  margin-bottom: 1rem;
  color: var(--color-principal);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
}
.journey-intro h1 {
  color: #17131a;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.05;
}
.journey-intro h1 em {
  color: var(--color-principal);
  font-family: var(--font-cursive);
  font-size: 0.92em;
  font-weight: 400;
}
.intro-text {
  max-width: 60rem;
  margin: 1.5rem auto 0;
  color: #68636c;
  font-size: 0.92rem;
  line-height: 1.7;
}
.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  max-width: 86rem;
  min-height: 27rem;
  margin: 7rem auto 0;
}
.timeline-track {
  position: absolute;
  top: 50%;
  right: 2%;
  left: 2%;
  height: 2px;
  background: var(--color-principal);
  opacity: 0.45;
}
.timeline-item {
  position: relative;
  display: flex;
  justify-content: center;
}
.timeline-item.is-top {
  align-items: flex-start;
}
.timeline-item.is-bottom {
  align-items: flex-end;
}
.timeline-item::after {
  position: absolute;
  left: 50%;
  width: 1px;
  height: 3.5rem;
  background: var(--color-principal);
  content: "";
  opacity: 0.45;
}
.timeline-item.is-top::after {
  top: calc(50% - 3.5rem);
}
.timeline-item.is-bottom::after {
  top: 50%;
}
.timeline-card {
  position: relative;
  z-index: 1;
  width: min(23rem, calc(100% - 0.3rem));
  min-height: 10rem;
  padding: 1rem;
  border: 1px solid #e8e2eb;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0.8rem 2rem rgba(55, 33, 66, 0.07);
}
.is-top .timeline-card {
  transform: translateY(-1rem);
}
.is-bottom .timeline-card {
  transform: translateY(1rem);
}
.card-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.7rem;
}
.card-icon {
  display: grid;
  width: 1.8rem;
  height: 1.8rem;
  place-items: center;
  border-radius: 50%;
  background: #f0e5f5;
  color: var(--color-principal);
}
.card-icon .lni {
  background: transparent;
  font-size: 0.95rem;
}
.card-year {
  margin: 0;
  color: var(--color-principal);
  font-size: 0.9rem;
  font-weight: 600;
}
.timeline-card h2 {
  margin-bottom: 0.45rem;
  color: #19151c;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.25;
}
.card-text {
  color: #716b74;
  font-size: 0.72rem;
  line-height: 1.55;
}
.timeline-dot {
  position: absolute;
  z-index: 2;
  top: calc(50% - 0.45rem);
  width: 0.9rem;
  height: 0.9rem;
  border: 3px solid #fff;
  border-radius: 50%;
  background: var(--color-principal);
  box-shadow: 0 0 0 1px var(--color-principal);
}

@media (max-width: 900px) {
  .about-page {
    padding: 3rem 1.5rem 5rem;
  }
  .timeline {
    display: block;
    min-height: 0;
    margin-top: 4rem;
    padding-left: 2rem;
  }
  .about-intro {
    display: block;
    margin: 3rem auto 6rem;
  }
  .formations {
    margin-top: 3rem;
  }
  .timeline-track {
    top: 0;
    right: auto;
    bottom: 0;
    left: 0.45rem;
    width: 2px;
    height: auto;
  }
  .timeline-item,
  .timeline-item.is-top,
  .timeline-item.is-bottom {
    display: block;
    min-height: 13rem;
  }
  .timeline-item::after {
    display: none;
  }
  .timeline-card,
  .is-top .timeline-card,
  .is-bottom .timeline-card {
    width: min(100%, 22rem);
    min-height: 0;
    transform: none;
  }
  .timeline-item + .timeline-item {
    margin-top: 1.25rem;
  }
  .timeline-dot {
    top: 1.5rem;
    left: -2rem;
  }
}
</style>
