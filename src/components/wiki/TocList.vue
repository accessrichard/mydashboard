<template>
  <v-list dense>
    <v-list-tile
      v-for="(page, i) in pages"
      :key="page + i"
      :to="{ name: 'wiki-read', params: { page: page }}"
    >
      <v-list-tile-content>
        <v-list-tile-title>{{page}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import wikiStore from "@/components/wiki/WikiStore";
import router from "@/router";
import { Route } from "vue-router";

@Component
export default class TocList extends Vue {
  get pages(): string[] {
    return wikiStore.pages;
  }

  constructor() {
    super();
  }

  public created() {
    if (wikiStore.pages.length === 0) {
      wikiStore.getPages();
    }
  }
}
</script>