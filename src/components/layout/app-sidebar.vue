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
      <v-list-tile @click.stop="toggleWikiSidebar()">
        <v-list-tile-action>
          <v-icon>toc</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Wiki</v-list-tile-title>
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
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class AppSidebar extends Vue {
  get drawer(): boolean {
    return this.$store.state.layout.leftSidebar.visible;
  }

  set drawer(isVisible: boolean) {
    this.$store.dispatch("layout/toggleLeftSidebar", { visible: isVisible });
  }

  public toggleWikiSidebar() {
    this.$store.dispatch("layout/toggleWikiSidebar", {
      visible: !this.$store.state.layout.wikiSidebar.visible
    });
  }
}
</script>
