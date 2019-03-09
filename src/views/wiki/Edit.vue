<template>
  <v-container>
    <v-layout align-center justify-center row fill-height>
      <v-icon v-on:click="toToc">toc</v-icon>
    </v-layout>
    <markdown-editor v-on:markdown-editor-save="save" v-bind:content="content"></markdown-editor>
  </v-container>
</template>

<script lang="ts">
import MarkdownEditor from "@/components/editor/markdown-editor.vue";
import { Component, Vue } from "vue-property-decorator";
import WikiPage from "./WikiPage";
import router from "@/router";

@Component({
  components: {
    MarkdownEditor
  }
})
export default class Edit extends WikiPage {
  constructor() {
    super();
  }

  public toToc(): void {
    router.push({
      name: "wiki-toc"
    });
  }

  public save(content: string) {
    this.saveMarkdown(content).then(() => {
      router.push({
        name: "wiki-read",
        params: {
          page: this.getPageName()
        }
      });
    });
  }

  public mounted() {
    this.getMarkdownContent(this.getPageName()).then(content => {
      this.content = content;
    }).catch((err) => {
      this.content = "# Create New Page\n\n Your page was not found.";
    });
  }
}
</script>