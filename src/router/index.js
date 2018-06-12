import Vue from 'vue'
import VueRouter from 'vue-router'

import AllGalleries from '../pages/AllGalleries'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MyGalleries from '../pages/MyGalleries'
import CreateNewGallery from '../pages/CreateNewGallery'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: AllGalleries,
    name: 'home'
},
{
    path: '/login',
    component: Login,
    name: 'login'
    
},
{
    path: '/register',
    component: Register,
    name: 'register'
    
},
{
    path: '/my-galleries',
    component: MyGalleries,
    name: 'my-galleries'
    
},
{
    path: '/create',
    component: CreateNewGallery,
    name: 'create'
    
}
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
