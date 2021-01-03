<template>
  <div class="debate-feed">
    DebateFeed
    {{$route.params.category}}
    <DebatePreview v-for="debate in debateList" :key="debate.id" :debate="debate"/>
  </div>
</template>

<script lang="ts">
import { Component,  Vue } from 'vue-property-decorator';
import {getAxios} from "@/axiosInstance";
import DebateModel from "@/models/DebateModel";
import {plainToClass} from "class-transformer";
import DebatePreview from "@/components/home/DebatePreview.vue";
@Component({
  components: {DebatePreview}
})
export default class DebateFeed extends Vue {
  debateList!: Array<DebateModel> = [];

  async fetchDebates() {
    getAxios().get("debates").then((data) => {
      console.log(data.data)
      this.debateList = plainToClass(DebateModel, data.data)
      console.log(this.debateList)
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
