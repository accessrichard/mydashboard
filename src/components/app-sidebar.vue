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
      <v-list-tile to="/wiki/toc">
        <v-list-tile-action>
          <v-icon>toc</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Wiki</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile to="/contacts">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Contact</v-list-tile-title>
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
    return this.$store.state.layout.sidebar.visible;
  }

  set drawer(isVisible: boolean) {
    this.$store.dispatch("layout/toggleSidebar", { visible: isVisible });
  }
}
</script>
