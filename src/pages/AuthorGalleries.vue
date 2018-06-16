<template>

    <div class="col-md-6 offset-md-3 mt-4">
        <!-- <img class="card-img-top" :src="gallery.images[0].imageUrl" alt="Card image cap"
      style="width: 5rem;"> -->
       
        <h6 class="card-title">
            <i style="color: darkblue">Author: </i>{{author.firstName}} {{author.lastName}}</h6>
          <section >
           <h5><i style="color: darkblue">List of Galleries</i></h5>
          <!-- <ul v-for="gallery in author.galleries" :key="gallery.id">
          <i style="color: darkblue">  <li> Title:   {{gallery.title}}
                    </li></i></ul> -->
          </section>

          <div class="col-8 mt-4"> 
        <div v-for="(gallery, key) in author.galleries"
         :key="key"  
          alt="">
           <i style="color: darkblue">  <li> Title:   {{gallery.title}}
                    </li></i>
 <b-carousel id="carousel1" controls indicators>
    <b-carousel-slide v-for="(image, key) in gallery.images" :key="key" :img-src="image.imageUrl" style="width:100%; height:250px"
                />
            </b-carousel>
         </div>
          </div>
          <footer>
                         <h6> <i style="color: darkblue">Email: </i>{{author.email}}</h6>

          </footer>
    </div>



</template>


<script>
    import {
        galleriesService
    } from './../services/GalleriesService'
    export default {
        name: "AuthorGalleries",
        data() {
            return {
                author: {}
            };
        },

        beforeRouteEnter(to, from, next) {
            galleriesService.getUser(to.params.id)
                .then((response) => {
                    next((vm) => {
                        vm.author = response.data
                    })
                })
        }

    };
</script>

