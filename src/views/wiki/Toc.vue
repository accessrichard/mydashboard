<template>
  <div>
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
    <v-form>
      <v-container>
        <v-text-field v-model="newPageName">
          <template slot="label">New Page Name</template>
        </v-text-field>
        <v-btn color="success" v-on:click="toEdit">Create</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import wikiStore from "@/store/modules/WikiStore";
import router from "@/router";
import { Route } from "vue-router";

@Component
export default class WikRead extends Vue {
  get pages(): string[] {
    return wikiStore.pages;
  }

  public newPageName: string = "";

  constructor() {
    super();
  }

  public toEdit(): void {
    router.push({
      name: "wiki-edit",
      params: {
        page: this.newPageName
      }
    });

    this.newPageName = "";
  }

  public created() {
    wikiStore.getPages();
  }
}
</script>