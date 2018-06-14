<template>

    <div class="col-md-6 offset-md-3 mt-4">
        <!-- <img class="card-img-top" :src="gallery.images[0].imageUrl" alt="Card image cap"
      style="width: 5rem;"> -->
       
        <h6 class="card-title">
            <i style="color: darkblue">Author: </i>{{author.firstName}} {{author.lastName}}</h6>
           <h6> <i style="color: darkblue">Email: </i>{{author.email}}</h6>



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

</style>