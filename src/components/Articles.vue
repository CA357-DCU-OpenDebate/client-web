<template>
  <div class="article">
    <ul>
      <li v-for="cat in categories" :key= "cat"> {{cat}}</li>
    </ul>
    <h4>Is the earth round?</h4>
    <p class="p1">While the Earth appears to be round when viewed </p>
    <p class="p2">from the vantage point of space, it is actually closer</p>
    <p class="p3"> to an ellipsoid. However, even an ellipsoid does <p>
    <p class="p4">not adequately describe</p>
    <b-button pill variant="outline-secondary" class="button_dots" href="/debate/10" alt="Click to see more of the article">...</b-button>
    <img class="clock" src="https://nsa40.casimages.com/img/2021/01/01/mini_210101081236172263.png
      " alt="Clock representing time already past">
    <p class="revision">Last revision at 7:06PM</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Articles extends Vue {
  categories = ["#Climate", "#Ethics"];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: red;
}
.article {
  border: 2px solid black;
  border-radius: 15px;
  height: 250px;
  width: 400px;
  margin-right: 25px;
  margin-left: 25px;
  margin-bottom: 50px;
}
h4 {
color: #444444;
font-weight: bold;
text-align: left;
margin-left: 10px;
}
ul {
  margin-top: 10px;
  margin-left: -30px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  list-style: none;
}
ul > li {
  font-size: 16px;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 15px;
  padding-right: 10px;
  padding-left: 10px;
}
p {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 0px;
}
.p1 {
  opacity: 1;
}
.p2 {
  opacity: 0.75;
}
.p3 {
  opacity: 0.5;
}
.p4 {
  opacity: 0.25;
}
.button_dots {
  width: 38px;
  height: 35px;
  margin-left: 200px;
  margin-top: -20px;
  display: flex;
  background-color: #64B7AD;
  color: white;
}
.clock {
  height: 30px;
  width: 30px;
  margin-top: 10px;
  margin-left: 10px;
}
.revision {
  margin-top: -26px;
  margin-left: 50px;
  font-weight: bold;
}

</style>