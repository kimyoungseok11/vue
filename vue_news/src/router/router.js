import VueRouter from 'vue-router'
import Vue from 'vue'
import AsksView from '../views/AsksView.vue';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

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
        {
            path:'/user/:id',
            component:UserView,
        },
        {
            path:'/item/:id',
            component:ItemView
        }
    ]
})

export default router