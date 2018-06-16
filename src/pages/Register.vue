<template>
    <div class="container mt-4">
        <section class="offset-2 col-8">
            <form @submit.prevent="onSubmit" class="jumbotron mt-4">
                <fieldset>

                    <legend>
                        <center>
                            <h2 class="form-top">
                                <b>CREATE YOUR ACCOUNT</b>
                            </h2>
                        </center>
                    </legend>

                    <div class="form-group row">

                        <div class="col-12">
                            <label for="firstName" class="col-4 col-form-label">First Name</label>
                            <input id="firstName" name="firstName" type="name" required="required" class="form-control here" v-model="newUser.firstName">
                            <div class="alert alert-danger" role="alert" v-if="errors.firstName">
                                {{ errors.firstName[0] }}
                            </div>
                        </div>

                    </div>
                    <div class="form-group row">

                        <div class="col-12">
                            <label for="lastName" class="col-4 col-form-label">Last Name</label>
                            <input id="lastName" name="lastName" type="name" required="required" class="form-control here" v-model="newUser.lastName">
                            <div class="alert alert-danger" role="alert" v-if="errors.lastName">
                                {{ errors.lastName[0] }}
                            </div>
                        </div>

                    </div>


                    <div class="form-group row">

                        <div class="col-12">
                            <label for="email" class="col-4 col-form-label">E-Mail</label>
                            <input id="email" name="email" type="email" required="required" class="form-control here" v-model="newUser.email">
                            <div class="alert alert-danger" role="alert" v-if="errors.email">
                                {{ errors.email[0] }}
                            </div>
                        </div>

                    </div>

                    <div class="form-group row">

                        <div class="col-12">
                            <label for="password" class="col-4 col-form-label">Password</label>
                            <input id="password" name="password" type="password" required="required" class="form-control here" v-model="newUser.password">
                            <div class="alert alert-danger" role="alert" v-if="errors.password">
                                {{ errors.password[0] }}
                            </div>
                        </div>


                    </div>

                    <div class="form-group row">

                        <div class="col-12">

                            <label for="password_confirmation" class="col-4 col-form-label">Confirm Password</label>
                            <input id="password_confirmation" name="password_confirmation" required="required" type="password" class="form-control here"
                                v-model="newUser.password_confirmation">
                            <div class="alert alert-danger" role="alert" v-if="errors.password_confirmation">
                                {{ errors.password_confirmation[0] }}
                            </div>
                        </div>

                    </div>
                    <div class="form-group row">

                        <div class="col-12">
                            <div class="form-check form-check-inline">
                                <label class="form-check-label">
                                    <input name="terms" type="checkbox" class="form-check-input" value="true" v-model="newUser.terms"> I accept terms and conditions
                                    <div class="alert alert-danger" role="alert" v-if="errors.terms">
                                        {{ errors.terms[0] }}
                                    </div>
                                </label>

                            </div>
                        </div>
                    </div>


                    <div class="form-group row">
                        <button name="submit" type="submit" class="btn btn-primary btn-block">Register</button>

                    </div>
                    <div class="form-group row">
                        <div class="col-12">Already a member?
                            <a href="#" @click="redirectToLogin">Login</a>
                        </div>
                    </div>

                </fieldset>
            </form>






        </section>

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
        name: "Register",
        data() {
            return {
                newUser: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                    terms: ""
                },
                errors: {},

            }
        },
        methods: {
            ...mapMutations([
                "setIsAuthenticated"
            ]),
            onSubmit() {
                authService.register(this.newUser)
                    .then(() => {
                        this.errors = {}
                        this.$router.push({
                            name: "home"
                        })
                        this.setIsAuthenticated(true);
                    }).catch(err => {
                        this.errors = err.response.data;
                        //   console.log("seeRegisterErrors",this.errors)
                    })
            },
           
            redirectToLogin() {
                this.$router.push({
                    name: 'login'
                })
            }
        }
    }
</script>

<style>
    .form-top {
        padding-bottom: 20px;
        margin-bottom: 10px;
    }
</style>