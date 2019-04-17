<template>
  <v-app>
    <app-action-button v-if="$route.name === 'home_disabled'"></app-action-button>
    <app-header v-else></app-header>

    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </v-app>
</template>
<script lang="ts">
import AppHeader from "@/components/layout/AppHeader.vue";
import AppSidebar from "@/components/layout/AppSidebar.vue";
import AppContent from "@/components/layout/AppContent.vue";
import AppActionButton from "@/components/layout/AppActionButton.vue";
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({
  name: "DefaultLayout",
  components: {
    AppHeader,
    AppSidebar,
    AppContent,
    AppActionButton
  }
})
export default class Layout extends Vue {}
</script>