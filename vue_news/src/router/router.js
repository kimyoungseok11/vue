import VueRouter from 'vue-router'
import Vue from 'vue'
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/news',
        },
        {
            path:'/news',
            name:'news',
            component:createListView('NewsView'),
        },
        {
            path:'/asks',
            name:'ask',
            component:createListView('AsksView'),

        },
        {
            path:'/jobs',
            name:'jobs',
            component:createListView('JobsView'),
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