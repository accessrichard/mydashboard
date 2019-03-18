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
import { Route } from "vue-router";
import marked from "marked";
import wikiStore from "@/store/modules/WikiStore";

Component.registerHooks(["beforeRouteUpdate"]);

@Component({
  components: {
    MarkdownEditor
  }
})
export default class Edit extends Vue {
  public content: string = "";

  constructor() {
    super();
  }

  public beforeRouteUpdate(to: Route, from: Route, next: any) {
    this.load();
    next();
  }

  public toToc(): void {
    router.push({
      name: "wiki-toc"
    });
  }

  public async save(content: string) {
    const page = this.$route.params.page;
    await wikiStore.savePage({ page, content });

    this.content = "";

    router.push({
      name: "wiki-read",
      params: {
        page: this.$route.params.page
      }
    });
  }

  public created() {
    this.load();
  }

  private async load() {
    await wikiStore.getPage(this.$route.params.page);
    this.content = wikiStore.selectedPageContent;
  }
}
</script>