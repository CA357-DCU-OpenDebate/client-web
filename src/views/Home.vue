<template>
  <div class="home">
    <HeaderHome/>
    <FeedCategoriesTabBar :categories="['Daily', 'Trends', 'Rising', 'Controversial']"/>
    <br><br><br><br><br><br>
    <div class="articles">
      <Articles/>
      <Articles/>
      <Articles/>
    </div>
    <div class="articles">
      <Articles/>
      <Articles/>
      <Articles/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderHome from '@/components/home/header/HeaderHome.vue';
import FeedCategoriesTabBar from "@/components/home/FeedCategoriesTabBar.vue";
import Articles from '@/components/Articles.vue';

@Component({
  components: {
    FeedCategoriesTabBar,
    HeaderHome,
    Articles,
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

  .articles {
    display: flex;
    align: row;
    justify-content: center;
  }
</style>
