<template>
  <div>
    <div v-html="content"></div>
    <v-icon v-on:click="toEdit">edit</v-icon>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from "vue-property-decorator";
import WikiPage from "./WikiPage";
import WikiService from "./WikiService";
import MarkdownEditor from "@/components/editor/markdown-editor.vue";
import marked from "marked";
import router from "@/router";
import { Route } from "vue-router";

Component.registerHooks(["beforeRouteUpdate"]);

@Component
export default class Read extends WikiPage {
  constructor() {
    super();
  }

  public beforeRouteUpdate(to: Route, from: Route, next: any) {
    this.reloadContent(to.params.page);
    next();
  }

  public toEdit(): void {
    router.push({
      name: "wiki-edit",
      params: {
        page: this.getPageName()
      }
    });
  }

  public reloadContent(pageName: string): void {
    this.getHtmlContent(pageName).then(content => {
      this.content = content;
    });
  }

  public mounted(): void {
    this.reloadContent(this.getPageName());
  }
}
</script>