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
    <Toc></Toc>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Toc from "@/components/wiki/Toc.vue";

@Component({
  name: "AppWikibar",
  components: {
    Toc
  }
})
export default class AppWikibar extends Vue {

  get drawer(): boolean {
    return this.$store.state.layout.wikiSidebar.visible;
  }

  set drawer(isVisible: boolean) {
    this.$store.dispatch("layout/toggleWikiSidebar", { visible: isVisible });
  }

  public toggleWikiSidebar() {
    this.$store.dispatch("layout/toggleWikiSidebar", {
      visible: !this.$store.state.layout.wikiSidebar.visible
    });
  }
}
</script>
