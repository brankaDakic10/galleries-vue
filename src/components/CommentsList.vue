<template>
  <div class="list-group">
    <h4>Comments:</h4>
    <li class="list-group-item" 
    v-for="comment in comments" :key="comment.id">
      {{ comment.created_at }} - {{ comment.content }}
    </li>
  </div>
</template>

<script>
  export default {
    name: "CommentsList",
    props: {
      comments: Array
    }
  }
</script>