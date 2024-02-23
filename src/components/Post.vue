<template>
  <div>
    <router-link :to="item.id">
      <div class="img-wrapper">
        <img :src="item.cover.external.url" :alt="item.id"/>
      </div>
      <span class="h2">{{ item.properties.Tags.multi_select[0].name }}</span>
      <h3>{{ item.properties.Title.title[0].plain_text }}</h3>
    </router-link>
  </div>
</template>
<script>
export default {
  props:{
    item: Object
  },
  data: () => ({}),
  methods: {},
}
</script>
