import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/",
            name: "main",
            component: () => import("./views/Main.vue"),
        },
        {
            path: "/children",
            name: "children",
            component: () => import("./views/Children.vue"),
        },
        {
            path: "/amateurs",
            name: "amateurs",
            component: () => import("./views/Amateurs.vue"),
        },
        {
            path: "/students",
            name: "students",
            component: () => import("./views/Students.vue"),
        },
        {
            path: "/federation",
            name: "federation",
            component: () => import("./views/Federation.vue"),
        },
        {
            path: "/blog",
            name: "blog",
            component: () => import("./views/Blog.vue"),
        },
        // {
        //     path: "/blog/:id",
        //     name: "blog_id",
        //     component: () => import("../views/BlogID.vue"),
        // },
        // {
        //     path: "/event/:id",
        //     name: "event_id",
        //     component: () => import("../views/EventFederationID.vue"),
        // },
        {
            path: "/contacts",
            name: "contacts",
            component: () => import("./views/Contacts.vue"),
        },
        // {
        //     path: "/:pathMatch(.*)*",
        //     component: () => import("../views/PageNotFound.vue"),
        // },
    ],
});

router.afterEach(() => {
    window.scrollTo({
        top: 0,
        left: 0,
    });
});

export default router;

export const LINKS_ROUTER = [
    {
        to: "children",
        name: "Детям",
    },
    {
        to: "amateurs",
        name: "Любителям",
    },
    {
        to: "students",
        name: "Студентам",
    },
    {
        to: "federation",
        name: "Федерация",
    },
    {
        to: "blog",
        name: "Блог",
    },
    {
        to: "contacts",
        name: "Контакты",
    },
];
