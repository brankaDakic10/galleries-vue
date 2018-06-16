<template>
    <div class="container">
        
        <div class="mt-4">
            <gallery v-for="gallery in visibleCollectionOfGalleries" :key="gallery.id" :gallery="gallery" />
            <div class="alert alert-warning" role="alert" v-if="!galleries.length">
                <strong>Warning!</strong> There is no gallery created!
            </div>
        </div>
 

<footer > 
    <div id="outer" class="ml-2 mt-2">
        <Paginator :number-of-pages="totalNumberOfPages" :current-page="currentPage" @selected-page="changeCurrentPage" />
 </div>
     <div class="row mt-4 mb-2" v-if="currentPage==1" >
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
              Created by <a href="#">@BrankaDakic</a>
              </div></div>
              </footer>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    import Gallery from "./../components/Gallery.vue"
    import Paginator from  "./../components/Paginator.vue"
    export default {
        name: "AllGaleries",
        components: {
            Gallery,
            Paginator 
        },
        data() {
            return {
              
                currentPage: 1
            }
        },
        computed: {
            ...mapGetters({
                galleries: "getGalleries"
            }),
            totalNumberOfPages(){
        return Math.ceil(this.galleries.length / 10)
            },
            
            visibleCollectionOfGalleries() {
                let bottomIndexLimit = (this.currentPage - 1) * 10
                let topIndexLimit = bottomIndexLimit + 10
                return this.galleries.filter(
                    (gallery, index) => index >= bottomIndexLimit && index < topIndexLimit)
            }

        },
        methods: {
            ...mapActions([
                "fetchGalleries"
            ]),
             // at click
            changeCurrentPage(page) {
                this.currentPage = page;
            }
        },
        created() {
            this.fetchGalleries();
        },

        //          beforeRouteEnter (to, from, next) {
        //    galleriesService.getAll()
        //       .then((response) => {
        //         next((vm) => {
        //           vm.galleries = response.data
        //         })
        //       }).catch(() => {
        //         // console.log(error)
        //       })

        //   }
    }
</script>

<style>

#outer{
    display: table;
  margin: 0 auto;
  padding-top:20px; 
   position: fixed;
     bottom: 0;
     right: 0;
}



</style>