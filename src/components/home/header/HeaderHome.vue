<template>
  <div class="header-home">
    <h1>Open Debate</h1>
    <SearchBar/>
    <TagList/>
  </div>
</template>

<script lang="ts">
import { Component,  Vue } from 'vue-property-decorator';
import TagList from "@/components/home/header/TagList.vue";
import SearchBar from "@/components/home/header/SearchBar.vue";

@Component({
  components: { SearchBar, TagList }
})
export default class HeaderHome extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-align: center;
  color: #5E5E5E;
  margin-top: 15px;
  margin-bottom: 30px;
  font-size: 60px;
}
</style>
