<template>
  <div>
    <v-dialog v-model="isWikiDialogVisible" width="80%">
      <view-page :page="page" v-on:close="isWikiDialogVisible = false"></view-page>
    </v-dialog>
    <v-list-tile
      v-for="(page, i) in filteredPages"
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
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import wikiStore from "@/components/wiki/WikiStore";
import ViewPage from "@/components/wiki/ViewPage.vue";

@Component({
  components: {
    ViewPage
  }
})
export default class TocList extends Vue {
  public isWikiDialogVisible: boolean = false;

  @Prop(String)
  public filter!: string;

  public localFilter: string = "";

  public page: string = "";

  private pages: string[] = [];

  get filteredPages(): string[] {
    if (this.localFilter === "") {
      return this.pages;
    }

    return this.pages.filter(page => page.includes(this.localFilter));
  }

  @Watch("filter")
  public filterPages(val: string) {
    this.localFilter = val;
  }

  public openViewDialog(page: string) {
    this.page = page;
    this.isWikiDialogVisible = true;
  }

  public async created() {
    this.pages = await wikiStore.getPages();
  }
}
</script>