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
            <!-- <div class="form-group row">
                <label class="col-4 col-form-label" for="imageUrl">Image url:</label>
                <div class="col-8">
                    <input id="imageUrl" name="imageUrl" type="text" class="form-control here" required="required" v-model="newGallery.imageUrl">
                </div>
            </div> -->

            <div v-for="(row, key) in newGallery.images" :key="key" class="form-group">
      <label for="image">Image url</label>
      <div class="input-group mb-3">
      <input v-model="row.imageUrl" type="text" id="image" class="form-control" placeholder="Image url" />
      <div v-if="newGallery.images.length !== 1" class="input-group-prepend">
      <button @click.prevent="deleteRow(key)" class="btn btn-danger">Delete</button>
      <button>Move UP</button>
      <button>Move DOWN</button>
      </div>
      </div>
            </div>
            <button @click.prevent="addRowImage">Add another url</button>
            <div class="form-group row">
                <div class="col-4"></div>
                <!-- <label class="col-4 col-form-label" for="imageUrl">Add new image url:</label> -->
                <div class="col-8">

                    <!-- <button @click="addUrl" class="btn btn-default">Add another URL</button> -->

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
    import {
        galleriesService
    } from './../services/GalleriesService'

    export default {
        name: "CreateNewGallery",
        data() {
            return {
                newGallery: {
                    title: "",
                    description: "",
                    images: [{imageUrl:''}]
                }
            }
        },
        methods: {
            addRowImage(){
             this.newGallery.images.push({imageUrl:''});
            },
            // ERROR
            storeGallery() {
                galleriesService.add(this.newGallery)
                    .then(() => {

                        this.redirectToHome()
                    }).catch(errors => {

                        this.errors = errors.response.data
                    })
            },
            redirectToHome() {
                this.$router.push({
                    name: 'home'
                })
            },
            addUrl() {

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