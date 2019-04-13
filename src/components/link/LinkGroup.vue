<template>
  <div>
    <v-list-group sub-group no-action v-for="(category, i) in categories" :key="i">
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-title>{{category.text}}</v-list-tile-title>
        </v-list-tile>
      </template>
      <v-list-tile v-for="(link, i) in category.links" :key="i" v-on:click="openLink(link)">
        <v-list-tile-title>{{link.text}}</v-list-tile-title>
      </v-list-tile>
    </v-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ILink, ILinkCategory } from "../../types";
import LinkApi from "./LinkApi";

@Component
export default class Links extends Vue {
  public categories: ILinkCategory[] = [];

  private service: LinkApi;

  constructor() {
    super();
    this.service = new LinkApi();
  }

  public openLink(link: ILink) {
    window.open(link.href);
  }

  public async created() {
    this.categories = await this.service.getLinks();
  }
}
</script>