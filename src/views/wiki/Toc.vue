<template>
  <div>
    <v-list dense>
      <v-list-tile
        v-for="(page, i) in pages"
        :key="i"
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
import WikiService from "@/api/WikiService";
import router from "@/router";
import { Route } from "vue-router";

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
    return this.newPageName;
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

  public mounted() {
    this.service.getPages().then(pages => {
      this.pages = pages;
    });
  }
}
</script>