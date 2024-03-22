import { createRouter, createWebHistory }    from 'vue-router'
import Index from "../views/index.vue"
import Projets from "../views/projets.vue"

// Liste des projets
import Benevers from "../views/projets/benevers.vue"
import crac19 from '../views/projets/crac-19.vue'
import HurryUp from '../views/projets/hurry-up.vue'
import TTT from '../views/projets/tick-tock-time.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                              name: 'Index',                        component: Index },
    { path: '/projets',                       name: 'projets',                      component: Projets },
    { path: '/benevers',                      name: 'benevers',                     component: Benevers },
    { path: '/crac-19',                      name: 'crac19',                        component: crac19 },
    { path: '/hurry-up',                      name: 'hurry-up',                        component: HurryUp },
    { path: '/tick-tock-time',                      name: 'TTT',                        component: TTT },

  ]
})

export default router
