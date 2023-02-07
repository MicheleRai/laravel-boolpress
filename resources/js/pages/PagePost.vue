<template>
    <div>
      <div>ciao</div>
      <h1>{{ objPost.title }}</h1>
      <img :src="objPost.image" class="card-img-top" :alt="objPost.title">
      <p>
        {{ objPost.content }}
      </p>
    </div>
  </template>

  <script>
  export default {
    props: [
      'slug'
    ],
    data() {
      return{
        objPost: null,

      }
    },
    created() {
      axios.get('/api/posts/' + this.slug)
        .then(response => this.objPost = response.data.results)
    }
  }
  </script>

  <style>

  </style>
