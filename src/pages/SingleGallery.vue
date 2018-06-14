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
             <b-carousel id="carousel1"
                controls
                indicators>
                <b-carousel-slide v-for="(image, key) in gallery.images" :key="key" :img-src="image.imageUrl" style="width:100%; height:250px"/>
</b-carousel>

        </div>
        <!-- end -->

    </div>



</template>


<script>
    import {
        galleriesService
    } from './../services/GalleriesService'
    export default {
        name: "SingleGallery",
        data() {
            return {
                gallery: {}
            };
        },

        beforeRouteEnter(to, from, next) {
            galleriesService.getGallery(to.params.id)
                .then((response) => {
                    next((vm) => {
                        vm.gallery = response.data
                    })
                })
        }

    };
</script>

