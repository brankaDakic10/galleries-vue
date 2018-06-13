   <template>
     <div class="row">
   
    <div class="card" style="width: 60rem;">
       
      <div class="card-body">
   <router-link :to="{ name: 'gallery', params: {id: gallery.id}}">
        <h6 class="card-title"><i style="color: #086A87">Title:</i>{{ gallery.title}}</h6>
        </router-link>
        <img class="card-img-top" :src="gallery.images[0].imageUrl" alt="Card image cap"
      style="width: 5rem;">
         <router-link :to="{ name: 'author', params: {id: gallery.user.id}}">

        <h6 class="card-title"><i style="color: #086A87">Author: </i>{{gallery.user.firstName}} {{gallery.user.lastName}}</h6>
         </router-link>
        <h6 class="card-title"><i style="color: #086A87">Created_at: </i>{{ gallery.created_at}}</h6>

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

</style>
