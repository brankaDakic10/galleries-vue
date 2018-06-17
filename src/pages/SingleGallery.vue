<template>
    <div class="container">
        <section class="col-md-8 offset-md-2 mt-4">

            <div class="text-center top-div">
                <h2 class="card-title font-color">

                    {{ gallery.title}}</h2>
            </div>


            <!-- carousel  -->
            <div class="container mt-4">
                <b-carousel id="carousel1" controls indicators>
                    <b-carousel-slide v-for="(image, key) in gallery.images" :key="key" :img-src="image.imageUrl" style="width:100%; height:350px"
                    />
                </b-carousel>

            </div>
            <!-- info-->
            <div class="container info-div">
                <h6 class="card-title">
                    <b class="font-color">Author: </b>
                    <b>{{gallery.user.firstName}} {{gallery.user.lastName}}</b>
                </h6>
                <h6 class="card-title">
                    <b class="font-color">Description: </b>
                </h6>
                <div class="info-gallery">{{gallery.description.substr(0,70) }}...</div>

                <h6 class="card-title">
                    <b class="font-color">Created_at: </b>{{ gallery.created_at}}</h6>
                <button type="button" class="btn btn-outline-success" v-if="gallery.user.id == loggedUserId" @click="deleteGallery">Delete gallery</button>

            </div>
            <!-- end -->
            <!-- comments list -->
            <div class="mt-4 comments">
                <div class="list-group" v-if="gallery.comments.length">
                    <h5>Comments:</h5>
                    <li class="list-group-item" v-for="comment in gallery.comments" :key="comment.id">
                        <p>Author: {{ comment.user.firstName }} </p>
                        <p>Date: {{ comment.created_at}}</p>
                        <p>Content: {{ comment.content.substr(0,70) }}...</p>
                        <button type="button" class="btn btn-outline-success" v-if="comment.user.id == loggedUserId" @click="deleteComment(comment)">Delete comment</button>
                    </li>
                </div>
            </div>
            <!-- comments end -->
            <!-- add -->
            <div class="mt-4 add-comment">
                <add-comment @commentAdded="addComment"></add-comment>

            </div>
            <!-- end-->


        </section>

    </div>

</template>


<script>
    import AddComment from "./../components/AddComment.vue"
    import {
        galleriesService
    } from './../services/GalleriesService'
    export default {
        name: "SingleGallery",
        components: {
            AddComment
           
        },

        data() {
            return {
                gallery: {},
                loggedUserId: window.localStorage.getItem("currentUserId")
            };
        },
        methods: {
            addComment(comment) {
                galleriesService.addComment(comment, this.gallery.id)
                    .then((response) => {
                        galleriesService.getGallery(this.gallery.id)
                            .then((response) => {
                                this.gallery = response.data

                            })
                    })
            },

            deleteComment(comment) {
                let confirmDelete = confirm('Do you want to delete this comment?')
                if (confirmDelete) {
                    galleriesService.deleteComment(comment.id)
                        .then((response) => {
                            galleriesService.getGallery(this.gallery.id)
                                .then((response) => {
                                    this.gallery = response.data

                                })
                        })
                }
            },
            deleteGallery() {
                galleriesService.remove(this.gallery.id)
                    .then(() => {
                        this.$router.push({
                            name: "my-galleries"
                        })
                    })
            }
        },

        beforeRouteEnter(to, from, next) {
            galleriesService.getGallery(to.params.id)
                .then((response) => {
                    next((vm) => {
                        vm.gallery = response.data
                    })
                })
        }

    }
</script>
<style>
    .font-color {
        color: rgb(23, 105, 23);
    }

    .top-div {
        margin: 3rem;
    }

    .info-div {
        margin: 3rem 0;
    }

    .info-gallery,
    .comments,
    .add-comment {
        margin: 0.650rem 0;

    }

    .comments {

        font-family: 'Sanchez', serif;
    }
</style>