<template>
  <div class="container my-galleries">

    <div class="page-top">
      <h2 class="text-center">
        <b>My Galleries</b>
      </h2>
    </div>



    <div class="row" v-for="gallery in visibleCollectionOfGalleries" :key="gallery.id">



      <div class="col-sm-10 offset-sm-1 mt-4">
        <div class="container info-gallery">
          <article class="col-sm-12">
            <h4>Gallery title:
              <b> {{gallery.title}}</b>
            </h4>
          </article>

          <article class="col-sm-12">

            <p>
              <b> Description:</b> {{gallery.description.substr(0,80)}}...</p>
          </article>
        </div>
        <img v-for="(image, key) in gallery.images" :key="key" :src="image.imageUrl" alt="" class="one-img rounded img-fluid">
      </div>
    </div>

    <div class="alert alert-warning text-center" role="alert" v-if="!galleries.length">
      <strong>Warning!</strong> You don't have created galleries!
    </div>


    <div id="outer" class="ml-2 mt-2">
      <Paginator :number-of-pages="totalNumberOfPages" :current-page="currentPage" @selected-page="changeCurrentPage" />
    </div>
  </div>

</template>

<script>
  import {
    galleriesService
  } from "./../services/GalleriesService"
  import Paginator from "./../components/Paginator.vue"

  export default {
    name: "MyGalleries",
    components: {
      Paginator
    },

    data() {
      return {
        galleries: [],
        currentPage: 1
      }
    },
    computed: {
      totalNumberOfPages() {
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

      changeCurrentPage(page) {
        this.currentPage = page;
      }
    },


    beforeRouteEnter(to, from, next) {
      galleriesService.getUserGalleries()
        .then((response) => {
          next((vm) => {
            vm.galleries = response.data
          })
        }).catch(() => {

        })
    }
  }
</script>

<style scoped>
  .one-img {

    width: 25%;
    height: 160px;
  }

  .info-gallery {
    padding: 20px;

  }

  .info-gallery h4 {
    margin: 10px 0;

  }

  .page-top {
    padding-top: 20px;
    margin: 20px 0;

    font-family: 'Rakkas', cursive;
  }

  .my-galleries {

    font-family: 'Rakkas', cursive;
    font-size: 1.2rem;
    color: rgb(7, 36, 7);

  }
</style>