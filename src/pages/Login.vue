<template>
    <div class="container">

        <div class="login-form">
            <form @submit.prevent="onSubmit">
                <h2 class="text-center">
                    <b>Log in</b>
                </h2>
                <div class="form-group">
                    <input type="text" id="email" name="email" class="form-control" placeholder="Username" required="required" v-model="email">
                </div>
                <div class="form-group">
                    <input type="password" id="password" name="password" class="form-control" placeholder="Password" required="required" v-model="password">
                </div>
                <div class="form-group">

                    <div v-for="(error, key) in errors" :key="key" v-if="error" class="alert alert-danger">
                        {{error}}
                    </div>
                    <button type="submit" class="btn btn-block btn-success">Log in</button>
                </div>

            </form>
            <p class="text-center">
                <a href="#" @click="redirectToRegiser" class="font-color">Create an Account</a>
            </p>
        </div>
    </div>



</template>

<script>
    import {
        authService
    } from "./../services/AuthService"
    import {
        mapMutations
    } from "vuex"
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: "",
                errors: []
            }
        },
        methods: {
            ...mapMutations([
                "setIsAuthenticated"
            ]),
            onSubmit() {
                authService.login(this.email, this.password)
                    .then(() => {
                        this.$router.push({
                            name: "home"
                        })
                        this.setIsAuthenticated(true)

                    }).catch((error) => {
                        this.errors = error.response.data;
                        // console.log("SeeLoginErrors", this.errors)
                    })

            },
            redirectToRegiser() {
                this.$router.push({
                    name: 'register'
                })
            }
        }
    }
</script>

<style>
    .login-form {
        width: 340px;
        margin: 50px auto;
    }

    .login-form form {
        margin-bottom: 15px;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }

    .login-form h2 {
        margin: 0 0 15px;
    }

    .form-control,
    .btn {
        min-height: 38px;
        border-radius: 2px;

    }

    .btn {
        font-size: 15px;
        font-weight: bold;

    }

    .font-color {
        color: rgb(23, 105, 23);
    }
</style>