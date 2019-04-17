<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0">{{page}}</h3>
    </v-card-title>
    <v-list-tile-content>
      <div class="pa-3">
        <div v-html="content"></div>
        <v-icon v-on:click="toEdit">edit</v-icon>
      </div>
    </v-list-tile-content>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import WikiApi from "@/components/wiki/WikiApi";
import MarkdownEditor from "@/components/wiki/markdown-editor.vue";
import marked from "marked";
import wikiStore from "@/components/wiki/WikiStore";

Component.registerHooks(["beforeRouteUpdate"]);

@Component
export default class Read extends Vue {
  @Prop(String) public page!: string;

  get content(): string {
    return marked(wikiStore.selectedPageContent, { sanitize: true });
  }

  public toEdit(): void {
    this.$router.push({
      name: "wiki-edit",
      params: { page: this.page } as any
    });
  }

  @Watch("page")
  public onPageChange(newPage: string, oldPage: string) {
    if (newPage === oldPage || newPage === "") {
      return;
    }

    wikiStore.getPage(this.page);
  }

  public created(): void {
    if (this.page) {
      wikiStore.getPage(this.page);
    }
  }
}
</script>