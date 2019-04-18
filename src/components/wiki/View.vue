<template>
  <v-container>
    <ViewPage :page="page"></ViewPage>
  </v-container>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Vue } from "vue-property-decorator";
import ViewPage from "@/components/wiki/ViewPage.vue";
import wikiStore from "@/components/wiki/WikiStore";

@Component({
  components: {
    ViewPage
  }
})
export default class Read extends Vue {

  get page(): string {
    return this.$route.params.page;
  }
}
</script>