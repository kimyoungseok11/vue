import Vue from "vue";
import VueRouter from "vue-router";
import MoniteringPage from "../views/MoniteringPage.vue";
import ErrorPage from "../views/ErrorPage.vue";
import StatisticsPage from "../views/StatisticsPage";

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/',
            redirect:'/monitering'
        },
        {
            path:'/monitering',
            name:'monitering',
            component:MoniteringPage,
        },
        {
            path:'/error',
            name:'error',
            component:ErrorPage,
        },
        {
            path:'/statistics',
            name:'statistics',
            component:StatisticsPage,
        },
    ]
});

export default router;