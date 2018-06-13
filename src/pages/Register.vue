<template>
    <div class="container">

        <form @submit.prevent="onSubmit" @reset="onReset" class="jumbotron">
      <h4 class="mb-4">Register please</h4>
            <div class="form-group row">

                <div class="col-8">
                    <label for="firstName" class="col-4 col-form-label">First name</label>
                    <input id="firstName" name="firstName" type="name" class="form-control here" v-model="newUser.firstName">
 <div class="alert alert-danger" role="alert" v-if="errors.firstName">
                    {{ errors.firstName[0] }}
                </div>
                </div>

            </div>
            <div class="form-group row">

                <div class="col-8">
                    <label for="lastName" class="col-4 col-form-label">Last name</label>
                    <input id="lastName" name="lastName" type="name" class="form-control here" v-model="newUser.lastName">
<div class="alert alert-danger" role="alert" v-if="errors.lastName">
                    {{ errors.lastName[0] }}
                </div>
                </div>

            </div>


            <div class="form-group row">

                <div class="col-8">
                    <label for="email" class="col-4 col-form-label">Email</label>
                    <input id="email" name="email" type="email" class="form-control here" v-model="newUser.email">
<div class="alert alert-danger" role="alert" v-if="errors.email">
                    {{ errors.email[0] }}
                </div>
                </div>

            </div>

            <div class="form-group row">

                <div class="col-8">
                    <label for="password" class="col-4 col-form-label">Password</label>
                    <input id="password" name="password" type="password" class="form-control here" v-model="newUser.password">
<div class="alert alert-danger" role="alert" v-if="errors.password">
                    {{ errors.password[0] }}
                </div>
                </div>


            </div>

            <div class="form-group row">

                <div class="col-8">
                    <label for="password_confirmation" class="col-4 col-form-label">Password_confirmation:</label>
                    <input id="password_confirmation" name="password_confirmation" type="password" class="form-control here" v-model="newUser.password_confirmation">
<div class="alert alert-danger" role="alert" v-if="errors.password_confirmation">
                    {{ errors.password_confirmation[0] }}
                </div>
                </div>

            </div>
            <div class="form-group row">

                <div class="col-8">
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

                <div class="offset-4 col-8">

                    <button name="reset" type="reset" class="btn btn-danger">Reset</button>

                    <button name="submit" type="submit" class="btn btn-primary">Register</button>
                </div>
            </div>
        </form>
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
                    terms:""
                },
                errors:{},
                
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
            onReset() {
                this.newUser={}
                this.errors={}
            }
        }
    }
</script>

<style>
</style>