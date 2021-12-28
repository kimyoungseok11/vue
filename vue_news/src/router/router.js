import VueRouter from 'vue-router'
import Vue from 'vue'
import AsksView from '../views/AsksView.vue';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/news'
        },
        {
            path:'/news',
            component:NewsView,
        },
        {
            path:'/asks',
            component:AsksView,
        },
        {
            path:'/jobs',
            component:JobsView,
        },
    ]
})

export default router