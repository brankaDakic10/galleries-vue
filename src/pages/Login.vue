<template>
    <div class="container mt-4">

        <form @submit.prevent="onSubmit"  class="jumbotron">
 
 <legend>
                    <center>
                        <h3>
                            <b>Please login</b>
                        </h3>
                    </center>
                </legend>

            <div class="form-group row">
                <label for="email" class="col-4 col-form-label">Email</label>
                <div class="col-8">
                    <input id="email" name="email" placeholder="Email" type="email" class="form-control here" v-model="email">
                </div>
            </div>

            <div class="form-group row">
                <label for="password" class="col-4 col-form-label">Password</label>
                <div class="col-8">
                    <input id="password" name="password" placeholder="Password" type="password" class="form-control here" v-model="password">
                </div>
            </div>
            <div class="form-group row">

                <div class="offset-4 col-8">
                    <div v-for="(error, key) in errors" :key="key" v-if="error" class="alert alert-danger">
                        {{error}}
                    </div>
                   

                    <button name="submit" type="submit"  class="btn btn-lg btn-primary btn-block" >Log in</button>
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
            onReset() {
                this.email = ""
                this.password = ""
                this.errors = ""
            }
        }
    }
</script>

<style>
body {
	background: #eee !important;	
}

.wrapper {	
	margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);  

 

	
	}

	 .form-control {
	  position: relative;
	  font-size: 16px;
	  height: auto;
	  padding: 10px;
	
	} 

	 input[type="text"] {
	  margin-bottom: -1px;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	input[type="password"] {
	  margin-bottom: 20px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	} 


</style>