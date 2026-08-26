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
        <p>nathalia.ferreira7629@gmail.com</p>
      </div>
      <div class="item">
        <h4>TELEFONE</h4>
        <p>(19) 92001-3661</p>
      </div>
      <div class="item">
        <h4>LOCALIZAÇÃO</h4>
        <p>Valinhos - São Paulo</p>
      </div>
    </div>
    <div class="social">
      <p>ME ACOMPANHE</p>
      <div class="social-icons">
        <a
          href="https://www.github.com/nathalia-ferreira"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../assets/github.svg" alt="GitHub" />
        </a>
      </div>
      <div class="social-icons">
        <a
          href="https://www.linkedin.com/in/nathalia-ferreira-7b0b1b1b9/"
          target="_blank"
          rel="noopener noreferrer"
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
  padding: 0 2rem;
  align-items: center;
  height: 6.5rem;
  border-top: 1px solid #e8e2eb;
  background-color: #fff;
  box-shadow: 0 0.8rem 2rem rgba(55, 33, 66, 0.07);
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
  color: #000;
}
.logo-text p {
  font-size: 0.8rem;
  margin: 0;
  color: #666;
}
.content {
  width: auto;
  gap: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  color: #333;
}
.item h4 {
  font-size: 0.82rem;
  font-weight: 550;
}
.item p {
  font-size: 0.8rem;
  color: #666;
}
.social {
  width: auto;
  display: flex;
  align-items: center;
}
.social p {
  font-size: 0.8rem;
  margin-right: 1rem;
  padding: 0.5rem;
}
.social-icons {
  display: grid;
  width: 1.6rem;
  height: 1.6rem;
  flex: 0 0 1.6rem;
  place-items: center;
  background-color: var(--color-principal);
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.5rem;
}
.social-icons img {
  display: block;
  width: 1.1rem;
  height: 1.1rem;
  margin: 0;
  object-fit: contain;
  background: transparent;
}
</style>
