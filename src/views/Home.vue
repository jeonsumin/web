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
import { Client } from "@notionhq/client";

export default {
  components: {Post},
  data: () => ({
    posts: {}
  }),
  async created() {
    console.log("HOME:)))))))")
    // const notion = new Client({auth: import.meta.env.VITE_TOKEN})
    // const response = await notion.databases.query({database_id: import.meta.env.VITE_DATABASES_ID})
    // console.log(response)
    this.$axios.post(`/v1/databases/${import.meta.env.VITE_DATABASES_ID}/query`).then(response => {
      this.posts = response.data.results.map(post => {
        return post
      })
    })
  },
}

</script>

