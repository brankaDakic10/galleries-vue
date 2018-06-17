<template>
    <div class="container mb-2">
        <div class="text-center">
            <h4>
                <p class="author-page">Author: </p>
                <b>
                    {{author.firstName}} {{author.lastName}}
                </b>
            </h4>
        </div>


        <div v-for="(gallery, key) in author.galleries" :key="key" alt="" class="holder">

            <div class="imgs">
                <b-carousel id="carousel1" controls>
                    <b-carousel-slide v-for="(image, key) in gallery.images" :key="key" :img-src="image.imageUrl" class="slide" />
                </b-carousel>
                <div class="text-center holder-title">
                    <b class="author-page">
                        <h6>{{gallery.title}}
                        </h6>
                    </b>
                </div>
            </div>


        </div>

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
<style scoped>
    .container {
        width: 700px;
        height: 380px;
        margin: 20px auto;
        box-sizing: border-box;
    }

    .holder {
        width: 300px;
        height: 250px;
        margin: 15px;
        float: left;

    }

    .holder .imgs {
        width: 100%;
        height: 100%;
        opacity: 0.5;
        transition: opacity 1s, transform 0.7s ease-in;
    }

    .imgs:hover {
        opacity: 1;
        transform: scale(1.1);
        box-shadow: 1px 3px 8px 4px rgb(195, 195, 195);
    }

    .holder-title {

        margin: 30px 0;
    }

    .slide {
        width: 100%;
        height: 200px;
    }

    .author-page {
        /* color: rgb(20, 126, 43); */
        color:rgb(13, 90, 13);
          font-family: 'Sanchez', serif, arial;
    /* font-family: 'Roboto+Mono', serif, arial; */

          
    }
</style>