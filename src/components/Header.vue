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
      <ul>
        <li><RouterLink to="/">INÍCIO</RouterLink></li>
        <li><RouterLink to="/about">SOBRE MIM</RouterLink></li>
        <li><RouterLink to="/projects">PROJETOS</RouterLink></li>
        <li><RouterLink to="/knowledge">CONHECIMENTOS</RouterLink></li>
      </ul>
    </nav>
    <div class="contact">
      <RouterLink to="/contact" class="contact-link">
        <p>VAMOS CONVERSAR</p>
        <img src="../assets/avion.svg" alt="Avião de Papel" />
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem 2.5rem;
  background-color: var(--color-bg);
}
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.logo img {
  width: 45px;
  height: 45px;
}
.logo-text h4 {
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-text);
  letter-spacing: 0.05em;
}
.logo-text p {
  font-size: 0.75rem;
  margin: 0;
  color: var(--color-text-light);
  letter-spacing: 0.05em;
}
.nav ul {
  display: flex;
  gap: 3.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav li a {
  color: var(--color-text-light);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  position: relative;
  padding-bottom: 0.2rem;
  transition: color 0.3s ease;
  letter-spacing: 0.03em;
}
.nav li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: var(--color-principal);
  transition: width 0.3s ease;
}
.nav li a:hover {
  color: var(--color-principal);
}
.nav li a.router-link-exact-active {
  color: var(--color-principal);
}
.nav li a.router-link-exact-active::after {
  width: 100%;
}
.contact {
  display: flex;
  align-items: center;
}
.contact-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-principal);
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--color-border);
  border-radius: 50px;
  transition: all 0.3s ease;
  background-color: transparent;
}
.contact-link p {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  background-color: transparent;
}
.contact-link img {
  width: 18px;
  height: 18px;
  margin-left: 0.5rem;
  background-color: transparent;
  transition: transform 0.3s ease;
  filter: brightness(0) saturate(100%) invert(35%) sepia(21%) saturate(2203%) hue-rotate(244deg) brightness(84%) contrast(85%); /* Cor aproximada da var(--color-principal) */
}
.contact-link:hover {
  background-color: var(--color-principal);
  color: #fff;
  border-color: var(--color-principal);
  box-shadow: 0 4px 15px rgba(154, 126, 176, 0.2);
}
.contact-link:hover img {
  filter: brightness(0) invert(1);
  transform: translateX(3px) translateY(-3px);
}

@media (max-width: 1050px) {
  .header {
    flex-wrap: wrap;
    gap: 1.5rem 2rem;
    padding: 1.5rem 2rem;
  }
  .nav {
    order: 3;
    width: 100%;
  }
  .nav ul {
    width: 100%;
    justify-content: center;
    gap: clamp(1.5rem, 5vw, 3rem);
  }
}

@media (max-width: 600px) {
  .header {
    padding: 1.25rem;
  }
  .logo {
    gap: 0.7rem;
  }
  .logo img {
    width: 35px;
    height: 35px;
  }
  .logo-text h4 {
    font-size: 0.95rem;
  }
  .logo-text p {
    font-size: 0.65rem;
  }
  .contact-link {
    padding: 0.5rem 0.8rem;
  }
  .contact-link p {
    font-size: 0.65rem;
  }
  .contact-link img {
    width: 14px;
    height: 14px;
  }
  .nav ul {
    justify-content: space-between;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 0.25rem;
    padding-top: 0.5rem;
  }
  .nav li a {
    white-space: nowrap;
    font-size: 0.7rem;
  }
}
</style>
