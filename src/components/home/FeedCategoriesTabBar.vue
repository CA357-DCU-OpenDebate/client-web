<template>
  <div class="feed-categories-tab-bar">
    <b-nav>
      <b-nav-item
          v-for="category in categories"
          :key="category"
          :to="{ name: 'DebateFeed', params: { category: category.toLowerCase()} }"
      >{{category}}</b-nav-item>
    </b-nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FeedCategoriesTabBar extends Vue {
  @Prop() categories!: Array<string>;
  chichon = "dhqdl"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  border-bottom: 3px solid black;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
  font-size: 36px;
}
</style>
