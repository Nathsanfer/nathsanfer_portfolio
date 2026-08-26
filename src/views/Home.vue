<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header />
  <section class="hero">
    <div class="hero-content">
      <p class="apresentation">OLÁ! EU SOU NATHALIA</p>
      <h1 class="title">DESENVOLVO SOLUÇÕES</h1>
      <h1 class="title">DIGITAIS QUE GERAM</h1>
      <h1 class="title-cursive">valor real.</h1>
      <p class="text">
        Transformo ideias em sistemas web eficientes, combinando design, código
        e dados para entregar experiência úteis, intuitivas e escaláves.
      </p>
      <div class="buttons">
        <RouterLink to="/projects" class="button-projects">
          VER MEUS PROJETOS
          <i class="lni lni-arrow-angular-top-right" aria-hidden="true"></i>
        </RouterLink>
        <RouterLink to="/about" class="button-about">
          CONHECER MINHA JORNADA
          <i class="lni lni-arrow-upward" aria-hidden="true"></i>
        </RouterLink>
      </div>
    </div>
    <div class="hero-image">
      <img src="../assets/hero.png" alt="Hero Image" />
      <article class="focus-card">
        <h2>FOCO</h2>
        <p>Construir sistemas úteis, escaláveis e que fazem a diferença.</p>
        <RouterLink
          to="/approach"
          class="focus-link"
          aria-label="Conheça minha abordagem"
        >
          <i class="lni lni-arrow-right" aria-hidden="true"></i>
        </RouterLink>
      </article>
      <article class="study-card">
        <div class="study-card-content">
          <p class="study-label">ATUALMENTE</p>
          <h2>Estudando</h2>
          <ul>
            <li>Computação em Nuvem</li>
            <li>DevOps</li>
            <li>Ciência de Dados</li>
            <li>Arquitetura de Software</li>
          </ul>
          <RouterLink to="/knowledge" class="study-link">
            VER MAIS
            <span aria-hidden="true">&#8594;</span>
          </RouterLink>
        </div>
        <div class="study-cloud" aria-hidden="true">
          <img src="../assets/cloud.png" alt="Nuvem" />
        </div>
      </article>
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.hero {
  height: 42rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.5rem;
}
.hero-content {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.apresentation {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-principal);
  margin-bottom: 0.5rem;
}
.title {
  font-size: 3.3rem;
  font-weight: 400;
  margin-bottom: -0.7rem;
}
.title-cursive {
  font-size: 4.3rem;
  font-weight: 420;
  font-style: italic;
  transform: skewX(-18deg);
  transform-origin: left center;
  color: var(--color-principal);
  width: 80%;
  margin-top: -0.5rem;
  font-family: var(--font-cursive);
}
.text {
  font-size: 1.04rem;
  width: 68%;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.buttons {
  display: flex;
  gap: 1.5rem;
}
.button-projects {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #000;
  color: #fff;
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
}
.button-projects:hover {
  background-color: var(--color-principal);
  color: #fff;
}
.button-about {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid var(--color-principal);
  color: var(--color-principal);
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
}
.buttons .lni {
  flex-shrink: 0;
  background-color: transparent;
  color: inherit;
  font-size: 1rem;
}
.button-about:hover {
  background-color: var(--color-principal);
  color: #fff;
}
.hero-image {
  width: 50%;
  height: 100%;
  padding: 1rem 0 0 0rem;
  position: relative;
}
.hero-image img {
  width: 80%;
  height: 100%;
  object-fit: cover;
}
.focus-card {
  position: absolute;
  top: 3rem;
  right: 4rem;
  width: 13rem;
  min-height: 12rem;
  padding: 1.35rem;
  background: #fdfcfc;
  border: 1px solid #e7e3e9;
  border-radius: 10px;
  box-shadow: 0 0.4rem 1rem rgba(36, 20, 47, 0.09);
}
.focus-card h2 {
  margin-bottom: 0.9rem;
  color: var(--color-principal);
  font-size: 0.95rem;
  font-weight: 600;
}
.focus-card p {
  width: 100%;
  color: #29272b;
  font-size: 0.85rem;
  line-height: 1.55;
}
.focus-link {
  position: absolute;
  right: 1.1rem;
  bottom: 1.1rem;
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  place-items: center;
  border-radius: 50%;
  background: var(--color-principal);
  color: #fff;
  text-decoration: none;
}
.focus-link .lni {
  font-size: 1.2rem;
  background-color: var(--color-principal);
}
.study-card {
  position: absolute;
  right: 0;
  bottom: 2rem;
  margin-right: -3rem;
  width: 25rem;
  min-height: 15rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem;
  overflow: hidden;
  background: #08080a;
  border-radius: 10px;
  color: #fff;
}
.study-card-content {
  position: relative;
  z-index: 1;
  background-color: #08080a;
}
.study-label {
  margin-bottom: 0.55rem;
  color: #b38bd0;
  font-size: 0.72rem;
  font-weight: 500;
  background-color: #08080a;
}
.study-card h2 {
  margin-bottom: 0.8rem;
  font-size: 1.35rem;
  font-weight: 400;
  background-color: #08080a;
}
.study-card ul {
  display: grid;
  gap: 0.28rem;
  padding: 0;
  list-style: none;
  color: #d8d8dc;
  font-size: 0.68rem;
  background-color: #08080a;
}
.study-card li {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background-color: #08080a;
}
.study-card li::before {
  content: "•";
  margin-right: 0.35rem;
  color: #fff;
  background-color: #08080a;
}
.study-link {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1.25rem;
  color: #fff;
  font-size: 0.7rem;
  text-decoration: none;
  background-color: #08080a;
}
.study-link span {
  font-size: 1.35rem;
  line-height: 0.5;
  background-color: #08080a;
}
.study-cloud {
  position: absolute;
  bottom: 1.6rem;
  right: -4.3rem;
  width: 17.4rem;
  height: 11rem;
  opacity: 0.9;
  background-color: #08080a;
}
.study-cloud img {
  background-color: #000;
}

@media (max-width: 900px) {
  .hero {
    height: auto;
    min-height: 42rem;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 2rem;
  }
  .hero-content,
  .hero-image {
    width: 100%;
  }
  .hero-content {
    min-height: 34rem;
  }
  .hero-image {
    height: 34rem;
  }
  .hero-image img {
    width: 100%;
  }
  .study-card {
    right: 1rem;
    width: min(22rem, 75%);
  }
  .focus-card {
    top: 1rem;
    right: 1rem;
  }
}
</style>
