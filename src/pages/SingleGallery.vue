<template>

    <div class="col-md-6 offset-md-3 mt-4">
        <!-- <img class="card-img-top" :src="gallery.images[0].imageUrl" alt="Card image cap"
      style="width: 5rem;"> -->
        <h6 class="card-title">
            <i style="color: darkblue">Title:</i>{{ gallery.title}}</h6>
        <h6 class="card-title">
            <i style="color: darkblue">Author: </i>{{gallery.user.firstName}} {{gallery.user.lastName}}</h6>
        <h6 class="card-title">
            <i style="color: darkblue">Description: </i>{{gallery.description}}</h6>

        <h6 class="card-title">
            <i style="color: darkblue">Created_at: </i>{{ gallery.created_at}}</h6>
        <!-- carousel  -->
        <div class="container mt-4">
            <b-carousel id="carousel1" controls indicators>
                <b-carousel-slide v-for="(image, key) in gallery.images" :key="key" :img-src="image.imageUrl" style="width:100%; height:250px"
                />
            </b-carousel>

        </div>
        <!-- end -->
        <!-- comments -->
        <div class="mt-4">

            <!-- <comment-list :comments="comments"></comment-list> -->

            <add-comment @commentAdded="addComment"></add-comment>

        </div>
        <!-- comments end--> 
 <div class="mt-4">
<div class="list-group" v-if="gallery.comments.length" >
      <h5>Comments:</h5>
    <li class="list-group-item" 
    v-for="comment in gallery.comments" :key="comment.id">
   <p>Author:{{ comment.user.firstName  }}</p>  
    <p>Comment Date:{{ comment.created_at}}</p>
    <p>Comment Content- {{ comment.content }}</p>
     <button v-if="comment.user.id == loggedUserId" class="btn btn-danger" @click="deleteComment(comment)">Delete</button>
    </li>
  </div>
 </div>

    </div>



</template>


<script>
    import AddComment from "./../components/AddComment.vue"
    import CommentsList from "./../components/CommentsList.vue"




    import {
        galleriesService
    } from './../services/GalleriesService'
    export default {
        name: "SingleGallery",
        components: {
            AddComment,
            CommentsList
        },

        data() {
            return {
                gallery: {},
                loggedUserId: window.localStorage.getItem("currentUserId")
            };
        },
        // computed: {
        //     comments () {
        //       return this.gallery.comments ? this.gallery.comments.reverse() : []
        //     }
        //   },

                methods:{
           addComment(comment){
        galleriesService.addComment(comment, this.gallery.id)
        .then((response) => {
                    galleriesService.getGallery(this.gallery.id)
                    .then((response) => {
                    this.gallery= response.data
                  
                      })
                        })
            },

             deleteComment(comment){
    let confirmDelete = confirm('Do you want to delete this comment?')
        if (confirmDelete) { 
        galleriesService.deleteComment(comment.id)
          .then((response) => {
                    galleriesService.getGallery(this.gallery.id)
                    .then((response) => {
                    this.gallery= response.data
                  
                      })
                        })
            }}},

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