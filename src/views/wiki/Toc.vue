<template>
  <div>
    <v-list dense>
      <v-list-tile
        v-for="(page, i) in pages"
        :key="i"
        :to="{ name: 'wiki-read', params: { page: replaceSpaces(page) }}"
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
        <v-btn color="success" :to="{ name: 'wiki-edit', params: { page: createNewPage }}">Create</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WikiService from "./WikiService";
import mock from "./toc.mock";

@Component
export default class WikRead extends Vue {
  public pages: string[] = [];
  public newPageName: string = "";
  private service: WikiService;
  constructor() {
    super();
    this.service = new WikiService();
  }

  get createNewPage(): string {
    return this.replaceSpaces(this.newPageName);
  }

  public replaceSpaces(pageName: string): string {
    return pageName.split(" ").join("_");
  }

  public replaceUnderscores(pageName: string): string {
    return pageName.split("_").join(" ");
  }

  public mounted() {
    this.service.getPages().then(pages => {
      this.pages = pages.map(item => {
        return this.replaceUnderscores(item);
      });
    });
  }
}
</script>