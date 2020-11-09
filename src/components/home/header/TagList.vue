<template>
  <div class="tag-list">
    <ul>
      <li v-for="tag in tags" :key="tag"> {{tag}} </li>
    </ul>
    <a href="">see all</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class TagList extends Vue {
  tags = ["Politics", 'Philosophy', 'Science', 'Education', 'Medecin', 'Climate', 'Human Rights'];
}
</script>

<style scoped lang="scss">
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
  }
  ul > li {
    margin-right: 20px;
  }
  a {
    display: flex;
    justify-content: center;
  }
</style>
