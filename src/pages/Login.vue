<template>
    <div class="container">

        <form @submit.prevent="onSubmit" class="jumbotron mt-4">
          
            <div class="form-group row">
                <label for="email" class="col-4 col-form-label">Email</label>
                <div class="col-8">
                    <input id="email" name="email" type="email" class="form-control here" v-model="email">
                </div>
            </div>

            <div class="form-group row">
                <label for="password" class="col-4 col-form-label">Password</label>
                <div class="col-8">
                    <input id="password" name="password" type="password" class="form-control here" v-model="password">
                </div>
            </div>
            <div class="form-group row">

                <div class="offset-4 col-8">
                    <button name="submit" type="submit" class="btn btn-primary">Log in</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email:"",
                password:""
            }
        },
        methods: {
            onSubmit(){
                ///
            }
        }
    }
</script>

<style>
</style>