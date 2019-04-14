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

      <v-list-group prepend-icon="link">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Links</v-list-tile-title>
          </v-list-tile>
        </template>
        <link-group></link-group>
      </v-list-group>

      <v-list-tile to="/contact">
        <v-list-tile-action>
          <v-icon>contacts</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Contact</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile to="/todo">
        <v-list-tile-action>
          <v-icon>assignment</v-icon>
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
        <v-list-tile to="/wiki/toc">
          <v-list-tile-action></v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Table Of Contents</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group no-action sub-group value="true">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Pages</v-list-tile-title>
            </v-list-tile>
          </template>
          <table-of-contents></table-of-contents>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import layoutStore from "@/components/layout/LayoutStore";
import TocList from "@/components/wiki/TocList.vue";
import LinkGroup from "@/components/link/LinkGroup.vue";

@Component({
  name: "AppWikibar",
  components: {
    "table-of-contents": TocList,
    LinkGroup
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
