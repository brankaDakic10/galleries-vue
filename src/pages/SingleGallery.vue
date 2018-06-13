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
        <!-- bootstrap carousel  -->
        <div class="example">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <!-- <img class="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide"> -->
                    </div>
                    <div class="carousel-item">
                        <!-- <img class="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide"> -->
                    </div>
                    <div class="carousel-item">
                        <!-- <img class="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide"> -->
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

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

</style>