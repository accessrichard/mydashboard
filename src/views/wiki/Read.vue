<template>
  <div>
    <div v-html="content"></div>
    <v-icon v-on:click="toEdit">edit</v-icon>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from "vue-property-decorator";
import WikiPage from "./WikiPage";
import WikiService from "@/api/WikiService";
import MarkdownEditor from "@/components/editor/markdown-editor.vue";
import marked from "marked";
import router from "@/router";
import { Route } from "vue-router";
import wikiStore from "@/store/modules/WikiStore";


Component.registerHooks(["beforeRouteUpdate"]);

@Component
export default class Read extends Vue {
  constructor() {
    super();
  }

  get content(): string {
    return marked(wikiStore.selectedPageContent, {sanitize: true});
  }

  public beforeRouteUpdate(to: Route, from: Route, next: any) {
    this.reloadContent(to.params.page);
    next();
  }

  public toEdit(): void {
    router.push({
      name: "wiki-edit",
      params: {
        page: this.$route.params.page
      }
    });
  }

  public reloadContent(pageName: string): void {
      wikiStore.getPage(pageName);
  }

  public created(): void {
    console.log("created");
    this.reloadContent(this.$route.params.page);
  }
}
</script>