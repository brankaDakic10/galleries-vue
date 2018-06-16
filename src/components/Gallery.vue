   <template>
     <div class="container">
   
    <div class="card col-sm-10 offset-sm-1">
      <div class="row">
       <div class="img">
         <img class="card-img-top img-responsive center-block" :src="gallery.images[0].imageUrl" alt="Gallery image"
     >
       </div>
       
       <div class="about-gallery">
      <!-- <div class="card-body"> -->
  <h6 class="card-title"><b >Gallery Title:</b> <router-link :to="{ name: 'gallery', params: {id: gallery.id}}">
       {{ gallery.title}}
        </router-link></h6>
       
       <h6 class="card-title"><b>Author: </b>   <router-link :to="{ name: 'author', params: {id: gallery.user.id}}">

       {{gallery.user.firstName}} {{gallery.user.lastName}}
         </router-link></h6>
        <h6 class="card-title"><b>Creation date: </b>{{ gallery.created_at}}</h6>
<!-- </div>  -->
</div>
      </div>
    </div>
 
  </div>
</template>
<script>

export default {
    name:"Gallery",
    props:{
        gallery:{
      type: Object,
      required:true
      }
    }

}
</script>

<style>
.card-img-top{
  width: 7rem;
  height: 5rem;
}
.about-gallery{
  padding: 5px 40px;
}
.font-color-new {
        color: rgb(73, 83, 105);
    }

   a{
     text-decoration: none !important;
     color:black;
    }
    a:hover{
    
     color:black;
    }
    .img{
      padding: 9px 20px;
    }
</style>
