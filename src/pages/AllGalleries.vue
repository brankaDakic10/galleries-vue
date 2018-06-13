<template>
    <div class="container">
        All Galeries
        <div class="pt-4">
            <gallery v-for="gallery in galleries" :key="gallery.id" :gallery="gallery" />
            <div class="alert alert-warning" role="alert" v-if="!galleries.length">
                <strong>Warning!</strong> There is no gallery created!
            </div>
        </div>
    </div>
</template>

<script>
import { galleriesService } from './../services/GalleriesService'

    import Gallery from './../components/Gallery.vue'
    export default {
        name: "AllGaleries",
        components: {
            Gallery
        },
        data() {
            return{
            galleries: []
            }
        },
         beforeRouteEnter (to, from, next) {
   galleriesService.getAll()
      .then((response) => {
        next((vm) => {
          vm.galleries = response.data
        })
      }).catch((error) => {
        console.log(error)
      })
  }
    }
</script>

<style>
</style>