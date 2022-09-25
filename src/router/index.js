import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Development from "../components/development.vue";
import Contact from "../components/Contact.vue";
import NotFound from "../views/NotFound.vue";

const routes = [{
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/About',
        component: About,
        name: 'About'
    },
    {
        path: '/Contact',
        component: Contact,
        name: 'Contact'
    },
    {
        path: '/Development',
        component: Development,
        name: 'Development'
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound,
        name: 'NotFound'
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router