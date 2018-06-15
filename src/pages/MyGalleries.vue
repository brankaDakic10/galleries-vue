<template>
    <div class="container">
        
        <h5><i style="color: darkblue">My Galleries</i></h5>
    <div v-for="gallery in galleries" :key="gallery.id">
                   <h5 style="color: darkblue">{{gallery.title}}</h5>    

                     <p>Description: {{gallery.description}}</p>
                       <!-- ////// -->
                       <!-- <div class="col-8 mt-4">
             <b-carousel id="carousel1"
                controls
                indicators>
                <b-carousel-slide v-for="(image, key) in gallery.images" :key="key" :img-src="image.imageUrl" style="width:100%; height:250px"/>
</b-carousel>

        </div> -->
        <!--  -->
        <div class="col-8 mt-4"> <img v-for="(image, key) in gallery.images" :key="key" :src="image.imageUrl" style="width:35%; height:150px" alt=""></div>
                    </div>
  <div class="alert alert-warning" role="alert" v-if="!galleries.length">
<strong>Warning!</strong> There is no gallery created!
            </div>

    </div>
</template>

<script>
 import { galleriesService } from "./../services/GalleriesService"
export default {
name:"MyGalleries",
 data() {
            return {
               galleries: []
            }
        },

         beforeRouteEnter (to, from, next) {
   galleriesService.getUserGalleries()
      .then((response) => {
        next((vm) => {
          vm.galleries = response.data
        })
      }).catch(() => {
        // console.log(error)
      })
}}
</script>

<style>

</style>
