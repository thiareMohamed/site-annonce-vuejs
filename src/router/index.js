import Home from "@/components/Home.vue";
import AddAnnonce from "@/components/AddAnnonce.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/add-annonce",
        name: "AddAnnonce",
        component: AddAnnonce
    }
]

const router  = createRouter({
    history: createWebHistory(),
    routes
});

export default router;