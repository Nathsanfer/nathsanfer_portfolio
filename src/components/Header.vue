<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/star.png" alt="Estrela Dourada" />
      <div class="logo-text">
        <h4>NATHALIA</h4>
        <p>DESENVOLVEDORA</p>
      </div>
    </div>
    <nav class="nav">
      <li><RouterLink to="/">INÍCIO</RouterLink></li>
      <li><RouterLink to="/about">SOBRE MIM</RouterLink></li>
      <li><RouterLink to="/projects">PROJETOS</RouterLink></li>
      <li><RouterLink to="/knowledge">CONHECIMENTOS</RouterLink></li>
    </nav>
    <div class="contact">
      <RouterLink to="/contact" class="contact-link">
        <p>VAMOS CONVERSAR</p>
        <img src="../assets/avion.svg" alt="Avião de Papel" />
      </RouterLink>
    </div>
  </header>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 1rem 2.5rem;
}
.logo {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
.logo img {
  width: 50px;
  height: 50px;
}
.logo-text h4 {
  font-size: 1.1rem;
  font-weight: 400;
}
.logo-text p {
  font-size: 0.8rem;
  margin: 0;
  color: #666;
}
.nav {
  display: flex;
  gap: 4rem;
  list-style: none;
}
.nav li a {
  color: #000;
  text-decoration: none;
  font-size: 0.9rem;
}
.nav li a.router-link-exact-active {
  color: var(--color-principal);
  font-weight: 600;
}
.contact {
  display: flex;
  align-items: center;
  background-color: var(--color-principal);
  border-radius: 10px;
}
.contact-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  padding: 0.7rem 1rem;
  background-color: var(--color-principal);
  border-radius: 10px;
}
.contact-link p {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
  background-color: var(--color-principal);
}
.contact-link img {
  width: 20px;
  height: 20px;
  margin-left: 0.5rem;
  background-color: var(--color-principal);
}

@media (max-width: 1050px) {
  .header {
    flex-wrap: wrap;
    gap: 1rem 2rem;
    padding: 1rem 1.5rem;
  }
  .nav {
    order: 3;
    width: 100%;
    justify-content: center;
    gap: clamp(1rem, 5vw, 3rem);
  }
}

@media (max-width: 600px) {
  .header {
    padding: 1rem 1.25rem;
  }
  .logo {
    gap: 0.7rem;
  }
  .logo img {
    width: 40px;
    height: 40px;
  }
  .logo-text h4 {
    font-size: 0.95rem;
  }
  .logo-text p {
    font-size: 0.65rem;
  }
  .contact-link {
    padding: 0.55rem 0.7rem;
  }
  .contact-link p {
    font-size: 0.65rem;
  }
  .contact-link img {
    width: 16px;
    height: 16px;
  }
  .nav {
    justify-content: space-between;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 0.25rem;
  }
  .nav li a {
    white-space: nowrap;
    font-size: 0.68rem;
  }
}
</style>
