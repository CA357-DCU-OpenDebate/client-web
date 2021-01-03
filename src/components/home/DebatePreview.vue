<template>
  <div class="debate-preview" @click="redirectToDebateView()">
    {{debate.title}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import DebateModel from "@/models/DebateModel";

@Component
export default class DebatePreview extends Vue {
  @Prop() debate!: DebateModel;

  redirectToDebateView() {
    this.$router.push({name: "Debate", params: { id: this.debate.id.toString() }})
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
