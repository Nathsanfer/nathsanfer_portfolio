// Adiciona a classe "is-visible" quando o elemento entra na tela.
// Uso: <section v-reveal> ou <div v-reveal="120"> (valor = atraso em ms)
const supportsObserver = typeof IntersectionObserver !== 'undefined'

const observer = supportsObserver
  ? new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
  : null

export default {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.setProperty('--delay', `${binding.value}ms`)

    if (observer) observer.observe(el)
    else el.classList.add('is-visible')
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
