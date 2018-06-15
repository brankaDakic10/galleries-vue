<template>
<div class="mt-4">
  <form @submit.prevent="addComment">
    
    
    <div class="form-group">
      <div class="col-12">
        <label class="col-4 col-form-label" for="content">Comment:</label>
        <textarea  name="text" rows="5" placeholder="Enter comment here" class="form-control here" v-model="comment.content" required="required"></textarea>
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-9 col-12">
        <button name="submit" type="submit" class="btn btn-success">Submit</button>
      </div>
    </div>
  </form>
  </div>
</template>


<script>
//   import { galleriesService } from "./../services/GalleriesService"
export default {
 name:"AddComment",
 data () {
    return {
      comment: {
        content: ''
      }
    }
 },
 methods:{
      
    addComment () {
      this.$emit('commentAdded', this.comment)
     this.comment={}
    }
  
  
 }
}
</script>

<style>

</style>
