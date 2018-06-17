<template>
    <div class="container my-galleries">

      <div class="page-top">
        <h2 class="text-center"><b>My Galleries</b></h2>
      </div>
      
          <!-- <div > -->
           
    <div class="row" v-for="gallery in galleries" :key="gallery.id">
         <div class="container info-gallery"> 
           <article class="col-sm-12">
             <h4 class="text-center" >{{gallery.title}}</h4> </article>   

         <article  class="col-sm-12">
          <b> Description:</b> 
           <p>{{gallery.description.substr(0,100)}}...</p></article>
           </div>  

           <!-- info end        -->
        <div class="col-sm-10 offset-sm-1 mt-4"> 
          <img v-for="(image, key) in gallery.images"
           :key="key" :src="image.imageUrl" 
           alt=""
           class="one-img"></div>
                    </div>
                    
  <div class="alert alert-warning" role="alert" v-if="!galleries.length">
<strong>Warning!</strong> There is no gallery created!
            </div>
</div>
    <!-- </div> -->
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

<style scoped>
.one-img{
  /* width:200px;
   height:150px; */
   width:25%; height:120px;
}
.info-gallery{
  padding: 20px;
  color: rgb(207, 54, 87)
}
.info-gallery h4{
   margin: 10px 0;
  color: rgb(7, 36, 7);
}
.page-top{
  padding-top: 20px;
  margin: 20px 0;
   color: rgb(7, 36, 7);
   font-family: 'Rakkas', cursive;
}
.my-galleries{
  /* test */
  background-color: rgb(192, 235, 175)
}

</style>
