import { createRouter, createWebHistory } from 'vue-router'

// Importando as views para as rotas
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Projects from "../views/Projects.vue"
import ProjectDetails from "../views/ProjectDetails.vue"
import Knowledge from "../views/Knowledge.vue"
import Contact from "../views/Contact.vue"

// Define as rotas
const routes = [
    { path: '/', component: Home, meta: { title: 'Nathalia • Desenvolvedora' } },
    { path: '/about', component: About, meta: { title: 'Sobre Mim | Nathalia' } },
    { path: '/projects', component: Projects, meta: { title: 'Projetos | Nathalia' } },
    { path: '/projects/:id', component: ProjectDetails, meta: { title: 'Projeto | Nathalia' } },
    { path: '/knowledge', component: Knowledge, meta: { title: 'Conhecimentos | Nathalia' } },
    { path: '/contact', component: Contact, meta: { title: 'Contato | Nathalia' } },
    // Redireciona URLs inválidas para a Home
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // Reseta o scroll para o topo ao navegar entre páginas
    scrollBehavior() {
        return { top: 0, behavior: 'smooth' }
    }
})

// Atualiza o título da aba do navegador em cada navegação
router.afterEach((to) => {
    document.title = to.meta.title || 'Nathalia • Desenvolvedora'
})

export default router