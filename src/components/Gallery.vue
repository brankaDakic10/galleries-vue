   <template>
     <div class="row">
   
    <div class="card" style="width: 40rem;">
      
      <div class="card-body">
        
        <h5 class="card-title"><i style="color: #086A87">Title:</i>{{ gallery.title}}</h5>
        <h5 class="card-title"><i style="color: #086A87">Author: </i>{{gallery.firstName}} {{gallery.lastName}}</h5>
        <h5 class="card-title"><i style="color: #086A87">Created_at: </i>{{ gallery.created_at}}</h5>

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
