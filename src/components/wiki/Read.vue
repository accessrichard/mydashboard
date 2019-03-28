<template>
  <div>
    <div v-html="content"></div>
    <v-icon v-on:click="toEdit">edit</v-icon>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Vue } from "vue-property-decorator";
import WikiPage from "./WikiPage";
import WikiApi from "@/components/wiki/WikiApi";
import MarkdownEditor from "@/components/wiki/markdown-editor.vue";
import marked from "marked";
import router from "@/router";
import { Route } from "vue-router";
import wikiStore from "@/components/wiki/WikiStore";

Component.registerHooks(["beforeRouteUpdate"]);

@Component
export default class Read extends Vue {
  @Prop(String) public page!: string;

  get content(): string {
    return marked(wikiStore.selectedPageContent, { sanitize: true });
  }

  public beforeRouteUpdate(to: Route, from: Route, next: any) {
    this.reloadContent(to.params.page);
    next();
  }

  public toEdit(): void {
    router.push({
      name: "wiki-edit",
      params: {
        page: this.getPage()
      }
    });
  }

  public reloadContent(pageName: string): void {
    wikiStore.getPage(pageName);
  }

  public created(): void {
    this.reloadContent(this.getPage());
  }

  private getPage(): string {
    return this.page || this.$route.params.page;
  }
}
</script>