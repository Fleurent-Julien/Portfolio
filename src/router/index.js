import { createRouter, createWebHistory }    from 'vue-router'
import Index from "../views/index.vue"
import Projets from "../views/projets.vue"

// Liste des projets
import Benevers from "../views/projets/benevers.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                              name: 'Index',                        component: Index },
    { path: '/projets',                       name: 'projets',                      component: Projets },
    { path: '/benevers',                      name: 'benevers',                     component: Benevers }

  ]
})

export default router
