<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark main-nav">
            <router-link class="navbar-brand" :to="{name:'galleries'}">AllGalleries</router-link>
            <div class="navbar-nav w-100">
                <router-link class="nav-item nav-link" :to="{name:'my-galleries'}">MyGalleries</router-link>
                <router-link class="nav-item nav-link" :to="{name:'create'}">CreateNewGallery</router-link>

                <div class="navbar-nav">
                    <router-link class="nav-item nav-link" :to="{name:'login'}">Login</router-link>
                    <router-link class="nav-item nav-link" :to="{name:'register'}">Register</router-link>
                    <a href="#" class="nav-item nav-link" @click="logout">Logout</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        methods: {
            logout() {
                // 
            }
        }
    }
</script>

<style scoped>
    .main-nav {
        background-color: rgb(57, 57, 216);
    }
</style>