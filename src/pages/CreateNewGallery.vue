<template>
    <div class="container">
        <h4 class="text-center">Create new gallery </h4>
        <form @submit.prevent="storeGallery" @reset="onReset" class="jumbotron">
            <div class="form-group row">
                <label class="col-4 col-form-label" for="title">Title:</label>
                <div class="col-8">
                    <input id="title" name="title" type="text" class="form-control here" required="required" minlength="2" maxlength="255" v-model="newGallery.title">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-4 col-form-label" for="description">Description:</label>
                <div class="col-8">
                    <input id="description" name="description" type="text" class="form-control here" maxlength="1000" v-model="newGallery.description">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-4 col-form-label" for="imageUrl">Image url:</label>
                <div class="col-8">
                    <input id="imageUrl" name="imageUrl" type="text" class="form-control here" required="required" v-model="newGallery.imageUrl">
                </div>
            </div>
             <div class="form-group row">
                 <div class="col-4"></div>
                <!-- <label class="col-4 col-form-label" for="imageUrl">Add new image url:</label> -->
                <div class="col-8">
              
 <button  class="btn btn-default">Add another URL</button>

                </div>
            </div>
            <div class="form-group row">

                <div class="offset-4 col-8">

                    <button name="reset" type="reset" class="btn btn-danger">Reset</button>
                    <button class="btn btn-info" @click="cancel">Cancel</button>

                    <button name="submit" type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: "CreateNewGallery",
        data() {
            return {
                newGallery: {
                    title: "",
                    description: "",
                    imageUrl: ""
                }
            }
        },
        methods: {
            storeGallery() {
                //
            },
            onReset() {
                this.newGallery = {}
            },
            cancel() {
                this.$router.push({
                    name: "my-galleries"
                })
            }
        }
    }
</script>

<style>
</style>