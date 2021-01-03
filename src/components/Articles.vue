<template>
  <div class="article">
    <ul>
      <li v-for="cat in categories" :key= "cat"> {{cat}}</li>
    </ul>
    <h4>Should we stop eating meat?</h4>
    <p class="p1">The ethics of eating meat has been long debated by </p>
    <p class="p2">philosophers activists and religous leaders. Today in </p>
    <p class="p3">the West at least vegetarianism and veganism is on <p>
    <p class="p4">the rise as more people</p>
    <button alt="Click to see more of the article" type="button">...</button>
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
text-align: center;
margin-left: -40px;
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
button {
  border-radius: 15px;
  display: flex;
  margin-top: -25px;
  margin-left: 190px;
  padding: 0px 15px;
  background: none; 
  border: 0.5px solid black;
}
.clock {
  height: 30px;
  width: 30px;
  margin-top: 15px;
  margin-left: 10px;
}
.revision {
  margin-top: -26px;
  margin-left: 50px;
  font-weight: bold;
}

</style>