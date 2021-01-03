<template>
  <div class="tag-list">
    <ul>
      <li v-for="tag in tags" :key="tag"> {{tag}} </li>
    </ul>
    <a href="">See all</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class TagList extends Vue {
  tags = ["#Politics", '#Philosophy', '#Science', '#Education', '#Medecin', '#Climate', '#Human Rights'];
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

    font-size: 20px;
    margin-right: 20px;
    border: 1px solid black;
    border-radius: 15px;
    padding-right: 10px;
    padding-left: 10px;
  }
  a {
    display: flex;
    justify-content: center;
    color: black;
    text-decoration: underline;
  }
</style>
