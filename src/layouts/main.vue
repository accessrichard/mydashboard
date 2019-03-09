<template>
  <v-app>
    <app-wikibar :key="wikiKey"></app-wikibar>
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
    <app-footer></app-footer>
  </v-app>
</template>
<script lang="ts">
import AppHeader from "@/components/app-header.vue";
import AppWikibar from "@/components/app-wikibar.vue";
import AppSidebar from "@/components/app-sidebar.vue";
import AppContent from "@/components/app-content.vue";
import AppFooter from "@/components/app-footer.vue";
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({
  name: "DefaultLayout",
  components: {
    AppHeader,
    AppWikibar,
    AppSidebar,
    AppContent,
    AppFooter
  }
})
export default class MainLayout extends Vue {
  public wikiKey: number = 0;

  @Watch("$route") //// TODO: Probably a better way to do this.
  private onRouteChange(to: Route, from: Route, next: any) {
    if (to.name === "wiki-read" && from.name === "wiki-edit") {
      this.wikiKey = this.wikiKey + 1;
    }
  }
}
</script>