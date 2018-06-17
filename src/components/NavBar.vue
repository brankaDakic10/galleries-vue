<template>
    <div>
        <b-navbar type="dark" class="main-nav" toggleable>
            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_dropdown_collapse">

                <b-navbar-nav>
                    <a href="#" class="navbar-brand">GalleriesLogo</a>
                    <router-link class="nav-item nav-link" :to="{name:'home'}">Galleries</router-link>
                    <router-link class="nav-item nav-link" :to="{name:'my-galleries'}" v-if="isAuthenticated">MyGalleries</router-link>
                    <router-link class="nav-item nav-link" :to="{name:'create'}" v-if="isAuthenticated">CreateNewGallery</router-link>
                    <router-link class="nav-item nav-link" :to="{name:'login'}" v-if="!isAuthenticated">Login</router-link>
                    <router-link class="nav-item nav-link" :to="{name:'register'}" v-if="!isAuthenticated">Register</router-link>
                    <a href="#" class="nav-item nav-link" @click="logout" v-if="isAuthenticated">Logout</a>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
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
        background-color: rgb(20, 126, 43);
        font-size: 1.1rem;
    }
</style>