<template>
  <div class="search-bar-div">
    <input class="search-bar" type="text" placeholder="  Find a debate..."/>
    <input class="glass_icon" type="image" id="image" name="searchbar icon" alt="search bar icon"
      src="https://nsa40.casimages.com/img/2021/01/01/mini_210101062740518341.png">
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
  .search-bar-div {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    width: 700px;
    justify-content: center;
    border-radius: 15px;
    border: 2px solid #5E5E5E;
  }
  .search-bar {
    width: 650px;
    height: 50px;
    font-size: 25px;
    text-indent: 5px;
    outline: none;
    border: none;
  }
  ::placeholder {
    color: #B2B2B2;
  }
  .glass_icon {
    width: 40px;
    vertical-align: middle;
    height: 40px;
    margin-bottom: 5px;
  }
</style>
