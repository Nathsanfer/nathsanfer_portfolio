<script setup>
import SvgIcon from './SvgIcon.vue'
import github from '../assets/github.svg?raw'
import linkedin from '../assets/linkedin.svg?raw'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <img src="../assets/star.png" alt="" class="footer-mark" />
        <div>
          <p class="footer-name">Nathalia Ferreira</p>
          <p class="footer-role">Desenvolvedora de sistemas · Valinhos, SP</p>
        </div>
      </div>

      <dl class="footer-contact">
        <div>
          <dt>E-mail</dt>
          <dd><a href="mailto:nathalia.ferreira7629@gmail.com">nathalia.ferreira7629@gmail.com</a></dd>
        </div>
        <div>
          <dt>Telefone</dt>
          <dd><a href="tel:+5519920013661">(19) 92001-3661</a></dd>
        </div>
      </dl>

      <div class="footer-social">
        <a
          href="https://www.github.com/nathalia-ferreira"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="social-btn"
        >
          <SvgIcon :svg="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/nathalia-ferreira-7b0b1b1b9/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="social-btn"
        >
          <SvgIcon :svg="linkedin" />
        </a>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>© {{ year }} Nathalia Ferreira</span>
      <a href="#top" class="to-top">Voltar ao topo <i class="lni lni-arrow-upward" aria-hidden="true"></i></a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: clamp(4rem, 9vw, 7rem);
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-alt);
  transition: background-color 0.4s ease;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.3fr 1.6fr auto;
  align-items: center;
  gap: 2.5rem;
  padding-block: 3rem 2.5rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.footer-mark {
  width: 2.6rem;
  height: 2.6rem;
  object-fit: contain;
}

.footer-name {
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 500;
}

.footer-role {
  color: var(--color-text-light);
  font-size: 0.8rem;
}

.footer-contact {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, max-content));
  gap: 1.5rem clamp(2rem, 4vw, 3.5rem);
}

.footer-contact dt {
  margin-bottom: 0.25rem;
  color: var(--color-principal);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.footer-contact dd a {
  color: var(--color-text-light);
  font-size: 0.86rem;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color 0.3s ease;
}

.footer-contact dd a:hover {
  color: var(--color-principal);
}

.footer-social {
  display: flex;
  gap: 0.6rem;
}

.social-btn {
  display: grid;
  width: 2.8rem;
  height: 2.8rem;
  place-items: center;
  border: 1px solid var(--color-border-strong);
  border-radius: 50%;
  color: var(--color-text);
  background: var(--color-surface);
  transition: transform 0.35s var(--ease-out), background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.social-btn :deep(.svg-icon) {
  width: 1.15rem;
  height: 1.15rem;
}

.social-btn:hover {
  transform: translateY(-3px);
  border-color: var(--color-principal);
  background: var(--color-principal);
  color: #fff;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 1.25rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-light);
  font-size: 0.78rem;
}

.to-top {
  color: var(--color-text-light);
  text-decoration: none;
  transition: color 0.3s ease;
}

.to-top:hover {
  color: var(--color-principal);
}

@media (max-width: 900px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }

  .footer-social {
    order: -1;
  }
}

@media (max-width: 560px) {
  .footer-contact {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
