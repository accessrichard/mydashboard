<template>
  <v-app>
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
    <app-footer></app-footer>
  </v-app>
</template>
<script lang="ts">

import AppHeader from "@/components/app-header.vue";
import AppSidebar from "@/components/app-sidebar.vue";
import AppContent from "@/components/app-content.vue";
import AppFooter from "@/components/app-footer.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "DefaultLayout",
  components: {
    AppHeader,
    AppSidebar,
    AppContent,
    AppFooter
  }
})
export default class MainLayout extends Vue { }
</script>