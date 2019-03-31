<template>
  <v-navigation-drawer fixed v-model="drawer" app>
    <v-list dense>
      <v-list-tile to="/">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile to="/links">
        <v-list-tile-action>
          <v-icon>http</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Links</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile to="/contact">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Contact</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile to="/todo">
        <v-list-tile-action>
          <v-icon>details</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Todo</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile to="/work">
        <v-list-tile-action>
          <v-icon>work</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Work</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-group prepend-icon="toc">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Wiki</v-list-tile-title>
          </v-list-tile>
        </template>
        <table-of-contents></table-of-contents>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import layoutStore from "@/components/layout/LayoutStore";
import Toc from "@/components/wiki/Toc.vue";

@Component({
  name: "AppWikibar",
  components: {
    "table-of-contents": Toc
  }
})
export default class AppSidebar extends Vue {
  get drawer(): boolean {
    return layoutStore.leftSidebar.isVisible;
  }

  set drawer(isVisible: boolean) {
    layoutStore.leftSidebar.isVisible = isVisible;
  }
}
</script>
