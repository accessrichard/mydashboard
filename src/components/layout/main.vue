<template>
  <v-app>
    <app-wikibar></app-wikibar>
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </v-app>
</template>
<script lang="ts">
import AppHeader from "@/components/layout/app-header.vue";
import AppWikibar from "@/components/layout/app-wikibar.vue";
import AppSidebar from "@/components/layout/app-sidebar.vue";
import AppContent from "@/components/layout/app-content.vue";
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({
  name: "DefaultLayout",
  components: {
    AppHeader,
    AppWikibar,
    AppSidebar,
    AppContent,
  }
})
export default class MainLayout extends Vue {}
</script>