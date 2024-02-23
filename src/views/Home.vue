<template>
  <main class="content">
    <section class="projects">
      <div class="container">
        <h2>Projects I have worked on.</h2>
        <ul class="projects-list">
          <li v-for="(item,index) in posts" :key="`post_${index}`">
            <Post :item="item"/>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
<script>
import Post from "@/components/Post.vue";

export default {
  components: {Post},
  data: () => ({
    posts: {}
  }),
  created() {
    this.$axios.post(`/v1/databases/${import.meta.env.VITE_DATABASES_ID}/query`).then(response => {
      this.posts = response.data.results.map(post => {
        return post
      })
    })
  },
}

</script>

