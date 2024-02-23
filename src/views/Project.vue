<template>
  <main class="content">
    <section class="project">
      <div class="container">
        <article class="is_stuck">
          <span class="h2">Project Title</span>
          <h1>{{ post.title }}</h1>

          <span class="h2">Role</span>
          <p v-for="tag in post.description">
            {{ tag.name }}
          </p>

          <span class="h2">tech</span>
          <li v-for="tech in post.tech">
            {{ tech.name }}
          </li>

          <span v-if="getSourceTitle" class="h2"> source </span>
          <p>
            <a :href="post.url" target="_blank">{{ getSourceTitle }}</a>
          </p>

          <span class="h2" v-if="startDate">year</span>
          <p v-if="startDate">
            {{ startDate }} ~ {{ endDate }}
          </p>
        </article>
        <aside>
          <ul>
            <li v-for="(imgPath, index) in post.image" :key="index">
              <img :src="imgPath.name" alt="">
            </li>
          </ul>
        </aside>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  computed: {
    getSourceTitle() {
      return this.post.url ? "바로가기" : ""
    },
    pageId() {
      return this.$route.path
    },
    startDate() {
      if (!this.isEmptyObject(this.post.period))
        return this.post.period.start
    },
    endDate() {
      if (!this.isEmptyObject(this.post.period))
        return this.post.period.end
    }
  },
  data: () => ({
    post: {
      title: undefined,
      description: undefined,
      tech: undefined,
      period: undefined,
      url: undefined,
      image:undefined
    }
    ,
  }),
  created() {
    this.$axios.get(`/v1/pages${this.pageId}`).then(response => {
      let data = response.data.properties
      this.post.title = data.Title.title[0].plain_text
      this.post.description = data.Description.multi_select
      this.post.tech = data.Tags.multi_select
      this.post.period = data.Period.date
      this.post.url = data.URL.url
      this.post.image = data.Detail.files
    })
  },
  methods: {
    isEmptyObject(value) {
      if (value === undefined || value === null || value === "") return true;
      return false;
    }
  },
}
</script>
