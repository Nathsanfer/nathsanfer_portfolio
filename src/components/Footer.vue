<template>
  <footer>
    <div class="logo">
      <img src="../assets/star.png" alt="Estrela Dourada" />
      <div class="logo-text">
        <h4>NATHALIA</h4>
        <p>DESENVOLVEDORA</p>
      </div>
    </div>

    <div class="content">
      <div class="item">
        <h4>EMAIL</h4>
        <a href="mailto:nathalia.ferreira7629@gmail.com">nathalia.ferreira7629@gmail.com</a>
      </div>
      <div class="item">
        <h4>TELEFONE</h4>
        <a href="tel:+5519920013661">(19) 92001-3661</a>
      </div>
      <div class="item">
        <h4>LOCALIZAÇÃO</h4>
        <p>Valinhos - São Paulo</p>
      </div>
    </div>

    <div class="social">
      <span class="social-label">ME ACOMPANHE</span>
      <div class="social-links">
        <a
          href="https://www.github.com/nathalia-ferreira"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src="../assets/github.svg" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/nathalia-ferreira-7b0b1b1b9/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src="../assets/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
  border-top: 1px solid var(--color-border);
  background-color: var(--color-bg);
  box-sizing: border-box;
  width: 100%;
}

/* --- LOGO --- */
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo img {
  width: 45px;
  height: 45px;
  object-fit: contain;
}

.logo-text h4 {
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-text);
  margin: 0;
  letter-spacing: 0.05em;
}

.logo-text p {
  font-size: 0.75rem;
  margin: 0;
  color: var(--color-text-light);
  letter-spacing: 0.05em;
}

/* --- CONTEÚDO (INFORMAÇÕES DE CONTATO) --- */
.content {
  display: flex;
  align-items: center;
  gap: clamp(2rem, 4vw, 5rem);
}

.item h4 {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text);
  margin: 0 0 0.2rem 0;
  letter-spacing: 0.05em;
}

.item p,
.item a {
  font-size: 0.82rem;
  color: var(--color-text-light);
  margin: 0;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
}

.item a:hover {
  color: var(--color-principal);
}

/* --- REDES SOCIAIS --- */
.social {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.social-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text);
  letter-spacing: 0.05em;
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-links a {
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  background-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-2px);
  background-color: var(--color-principal);
  border-color: var(--color-principal);
  box-shadow: 0 4px 15px rgba(154, 126, 176, 0.2);
}

.social-links img {
  width: 1.1rem;
  height: 1.1rem;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: brightness(0) saturate(100%) invert(35%) sepia(21%) saturate(2203%) hue-rotate(244deg) brightness(84%) contrast(85%);
}

.social-links a:hover img {
  filter: brightness(0) invert(1);
}

/* ================= BREAKPOINTS RESPONSIVOS ================= */

/* Tablets (Abaixo de 1024px) */
@media (max-width: 1024px) {
  footer {
    flex-wrap: wrap;
    padding: 2rem 2rem 1.5rem;
    gap: 1.5rem;
  }

  .logo {
    order: 1;
  }

  .social {
    order: 2;
    margin-left: auto;
  }

  .content {
    order: 3;
    width: 100%;
    justify-content: space-between;
    border-top: 1px solid var(--color-border);
    padding-top: 1.25rem;
    gap: 1.5rem;
  }
}

/* Celulares (Abaixo de 640px) */
@media (max-width: 640px) {
  footer {
    padding: 1.5rem 1.25rem;
    gap: 1.25rem;
  }

  .social-label {
    display: none; /* Oculta o texto em celulares para manter o visual limpo */
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .item p,
  .item a {
    word-break: break-word; /* Evita estouro de tela caso o e-mail seja longo */
  }
}
</style>