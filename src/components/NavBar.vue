<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark main-nav">
    <a href="#" class="navbar-brand" >GalleriesApp</a>

            <div class="navbar-nav w-100">
             <router-link class="nav-item nav-link" :to="{name:'home'}">AllGalleries</router-link>

                <router-link class="nav-item nav-link" :to="{name:'my-galleries'}" v-if="isAuthenticated">MyGalleries</router-link>
                <router-link class="nav-item nav-link" :to="{name:'create'}" v-if="isAuthenticated">CreateNewGallery</router-link>

                <div class="navbar-nav">
                    <router-link class="nav-item nav-link" :to="{name:'login'}" v-if="!isAuthenticated">Login</router-link>
                    <router-link class="nav-item nav-link" :to="{name:'register'}" v-if="!isAuthenticated">Register</router-link>
                    <a href="#" class="nav-item nav-link" @click="logout" v-if="isAuthenticated">Logout</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
 import {
        authService
    } from "./../services/AuthService"
     import {
        mapMutations,
        mapGetters
    } from "vuex";
    
    export default {
        name: "NavBar",
  methods: {
            ...mapMutations([
                "setIsAuthenticated"
            ]),

            logout() {
                authService.logout()
                
                this.setIsAuthenticated(false);
               this.redirectToLogin()
            },
             redirectToLogin() {
                this.$router.push({
                    name: 'login'
                })
            },
           
        },

        computed: {
            ...mapGetters({
                getAuthUser: "getIsAuthenticated"
            }),
            isAuthenticated() {
                return this.getAuthUser;
            }
        }
    }
</script>

<style scoped>
    .main-nav {
        background-color: rgb(57, 57, 216);
    }
</style>