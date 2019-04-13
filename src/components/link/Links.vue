<template>
  <v-list dense>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title>Links</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <link-group></link-group>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ILink, ILinkCategory } from "../../types";
import LinkApi from "./LinkApi";
import LinkGroup from "./LinkGroup.vue";

@Component({
  components: {
    LinkGroup
  }
})
export default class Links extends Vue {
}
</script>