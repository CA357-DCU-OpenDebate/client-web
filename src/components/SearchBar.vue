<template>
  <div class="search-bar">
    <input type="text"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class SearchBar extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .search-bar {
    display: flex;
    justify-content: center;
  }
</style>
