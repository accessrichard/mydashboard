<template>
  <v-navigation-drawer fixed v-model="drawer" right clipped app>
    <v-list dense>
      <v-list-tile @click.stop="toggleWikiSidebar()">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Table of Contents</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <table-of-contents></table-of-contents>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Toc from "@/components/wiki/Toc.vue";
import layoutStore from '@/components/layout/LayoutStore';

@Component({
  name: "AppWikibar",
  components: {
    "table-of-contents": Toc
  }
})
export default class AppWikibar extends Vue {

  get drawer(): boolean {
    return layoutStore.wikiSidebar.isVisible;
  }

  set drawer(isVisible: boolean) {
    layoutStore.wikiSidebar.isVisible = isVisible;
  }

  public toggleWikiSidebar() {
      layoutStore.wikiSidebar.isVisible = !layoutStore.wikiSidebar.isVisible;
  }
}
</script>
