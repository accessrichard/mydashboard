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

@Component
export default class Read extends WikiPage {
  constructor() {
    super();
  }

  public toEdit(): void {
    router.push({
      name: "wiki-edit",
      params: {
        page: this.getPageName()
      }
    });
  }

  public mounted() {
    this.getHtmlContent().then(content => {
      this.content = content;
    });
  }
}
</script>