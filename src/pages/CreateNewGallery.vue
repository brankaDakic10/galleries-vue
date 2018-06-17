<template>
    <div class="container">

        <h3 class="text-center">Create new gallery </h3>
        <form @submit.prevent="storeGallery" class="jumbotron">
            <div class="form-group row">
                <label class="col-sm-4 col-form-label" for="title">Title:</label>
                <div class="col-sm-12">
                    <input id="title" name="title" type="text" class="form-control here" required="required" minlength="2" maxlength="255" v-model="newGallery.title"
                        placeholder="Enter title ">
     
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-4  col-form-label" for="description">Description:</label>
                <div class="col-sm-12">
                    <textarea id="description" rows="5" name="description" type="text" class="form-control here" maxlength="1000" v-model="newGallery.description"
                        placeholder="Enter description"></textarea>
                        
                </div>
            </div>
            <!-- block -->
            <div v-for="(row, key) in newGallery.images" :key="key" class="form-group">
                <label for="image">Image url:</label>
                <div class="input-group mb-3">
                    <input v-model="row.imageUrl" type="text" id="image" class="form-control here" required="required" placeholder="Enter Image Url" />
                    <div v-if="newGallery.images.length !== 1" class="input-group-prepend">
                        <button @click.prevent="deleteRow(row)" class="btn btn-danger">Delete</button>

                    </div>
                   
                </div>
            </div>


            <div class="form-group row">
                <div class="col-sm-12">
                    <button class="btn btn-add" @click.prevent="addRowImage">Add another url</button>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-12 offset-sm-8 buttons">

                    <button class="btn btn-info btn-lg" @click="cancel">Cancel</button>

                    <button name="submit" type="submit" class="btn btn-success btn-lg">Submit</button>
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
                    images: [{
                        imageUrl: ''
                    }]
                },
                errors: {},
            }
        },
        methods: {
            addRowImage() {
                this.newGallery.images.push({
                    imageUrl: ''
                });
            },
            deleteRow() {
                this.newGallery.images.splice(this.row, 1);

            },

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

            cancel() {
                this.$router.push({
                    name: "my-galleries"
                })
            }
        }
    }
</script>

<style>
    .btn-add {
        background-color: rgb(20, 126, 43);
        color: white;
    }

    .buttons {
        padding-top: 15px;

    }
</style>