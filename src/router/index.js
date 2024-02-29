import { createRouter, createWebHistory }    from 'vue-router'
import Index from "../views/index.vue"
import Contact from "../views/contact.vue"
import Projets from "../views/projets.vue"

// Liste des projets
import Crac from "../views/projets/crac-19.vue"
import Benevers from "../views/projets/benevers.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                              name: 'Index',                        component: Index },
    { path: '/contact',                       name: 'contact',                      component: Contact },
    { path: '/projets',                       name: 'projets',                      component: Projets },
    { path: '/crac-19',                       name: 'crac-19',                      component: Crac },
    { path: '/benevers',                      name: 'benevers',                     component: Benevers },

  ]
})

export default router
