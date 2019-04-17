<template>
  <div>
    <v-dialog v-model="isWikiDialogVisible" width="80%">
      <view-page :page="page" v-on:close="isWikiDialogVisible = false"></view-page>
    </v-dialog>
    <v-list-tile
      v-for="(page, i) in pages"
      :key="page + i"
      :to="{ name: 'wiki-read', params: { page: page }}"
    >
      <v-list-tile-content>
        <v-list-tile-title>{{page}}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
          <v-btn icon ripple @click.prevent="openViewDialog(page)">
        <v-icon small color="grey lighten-1">open_in_browser</v-icon>
          </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import wikiStore from "@/components/wiki/WikiStore";
import ViewPage from "@/components/wiki/ViewPage.vue";


@Component({
  components: {
    ViewPage
  }
})
export default class TocList extends Vue {
  get pages(): string[] {
    return wikiStore.pages;
  }

  public isWikiDialogVisible: boolean = false;

  public page: string = "";

  public openViewDialog(page: string) {
    this.page = page;
    this.isWikiDialogVisible = true;
  }

  public created() {
    if (wikiStore.pages.length === 0) {
      wikiStore.getPages();
    }
  }
}
</script>