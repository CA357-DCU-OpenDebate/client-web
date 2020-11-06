<template>
  <div class="home">
    <HeaderHome/>
    <FeedCategoriesTabBar :categories="['Daily', 'Trends', 'Rising', 'Controversial']"/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderHome from '@/components/HeaderHome.vue';
import FeedCategoriesTabBar from "@/components/FeedCategoriesTabBar.vue";

@Component({
  components: {
    FeedCategoriesTabBar,
    HeaderHome,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
