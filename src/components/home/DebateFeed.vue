<template>
  <div class="debate-feed">
    DebateFeed
    {{$route.params.category}}
  </div>
</template>

<script lang="ts">
import { Component,  Vue } from 'vue-property-decorator';
import {getAxios} from "@/axiosInstance";

@Component
export default class DebateFeed extends Vue {
  async fetchDebates() {
    getAxios().get("debates").then((data) => {
      console.log(data)
    })
  }
  mounted() {
    this.fetchDebates();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
