import Vue from 'vue'
import VueRouter from 'vue-router'
import {
    requiresAuth,
    guestOnly
} from './guards'

import AllGalleries from '../pages/AllGalleries'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MyGalleries from '../pages/MyGalleries'
import CreateNewGallery from '../pages/CreateNewGallery'
import SingleGallery from '../pages/SingleGallery'
import AuthorGalleries from '../pages/AuthorGalleries'


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
    // ,
    // meta:{
    //     guestOnly:true
    // }
  
    
},
{
    path: '/register',
    component: Register,
    name: 'register'
    // ,
    // meta:{
    //     guestOnly:true
    // }
    
   
    
},
{
    path: '/my-galleries',
    component: MyGalleries,
    name: 'my-galleries',
    meta: {
        requiresAuth: true
    }
    
},
{
    path: '/create',
    component: CreateNewGallery,
    name: 'create',
    meta: {
        requiresAuth: true
    }
    
    
},
{
    path: '/galleries/:id',
    component: SingleGallery,
    name: 'gallery',
    meta: {
        requiresAuth: true
    }
  
   
   
},
{
    path: '/authors/:id',
    component: AuthorGalleries,
    name: 'author',
    meta: {
        requiresAuth: true
    }
   
   
}
]

export const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
     Promise.resolve(to)
         .then(requiresAuth)
         .then(guestOnly)
       .then(() => {
         next();
       })
       .catch(redirect => {
         next(redirect);
       });
   });