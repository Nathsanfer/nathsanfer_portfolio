import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'theme'
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')

function readStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // Armazenamento bloqueado (modo privado, por exemplo): usa a preferência do sistema
  }
  return systemPrefersDark.matches ? 'dark' : 'light'
}

// Estado único compartilhado por toda a aplicação
const theme = ref(readStoredTheme())

watchEffect(() => {
  document.documentElement.dataset.theme = theme.value
  try {
    localStorage.setItem(STORAGE_KEY, theme.value)
  } catch {
    // Sem armazenamento, a escolha vale apenas para a sessão atual
  }
})

export function useTheme() {
  function toggleTheme() {
    const root = document.documentElement
    // Anima apenas as cores durante a troca, sem afetar o resto das transições
    root.classList.add('theme-switching')
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    window.setTimeout(() => root.classList.remove('theme-switching'), 500)
  }

  return { theme, toggleTheme }
}
