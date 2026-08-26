import { createRouter, createWebHistory } from 'vue-router'

// Importando as views para as rotas
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Projects from "../views/Projects.vue"
import ProjectDetails from "../views/ProjectDetails.vue"
import Knowledge from "../views/Knowledge.vue"
import Approach from "../views/Approach.vue"
import Contact from "../views/Contact.vue"

// Define as rotas
const routes = [
    { path : '/', component: Home },
    { path : '/about', component: About },
    { path : '/projects', component: Projects },
    { path : '/projects/:id', component: ProjectDetails },
    { path : '/knowledge', component: Knowledge },
    { path : '/approach', component: Approach },
    { path : '/contact', component: Contact }
]

const router  = createRouter({
    history: createWebHistory(),
    routes
})

export default router