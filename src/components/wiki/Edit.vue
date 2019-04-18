<template>
  <v-container>
    <v-layout align-center justify-center row fill-height>
      <v-icon v-on:click="toToc">toc</v-icon>
    </v-layout>
    <markdown-editor
      v-on:markdown-editor-save="save"
      v-on:markdown-editor-delete="removePage"
      v-bind:content="content"
    ></markdown-editor>
  </v-container>
</template>

<script lang="ts">
import MarkdownEditor from "@/components/wiki/markdown-editor.vue";
import { Component, Vue } from "vue-property-decorator";
import WikiPage from "./WikiPage";
import router from "@/router";
import { Route } from "vue-router";
import marked from "marked";
import wikiStore from "@/components/wiki/WikiStore";
import WikiApi from "@/components/wiki/WikiApi";

Component.registerHooks(["beforeRouteUpdate"]);

@Component({
  components: {
    MarkdownEditor
  }
})
export default class Edit extends Vue {
  public content: string = "";

  private service: WikiApi;

  constructor() {
    super();
    this.service = new WikiApi();
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
    const result = await this.service
      .savePage(page, content)
      .catch((err: Error) => {
        console.log(err);
        /// TODO: Display Msg;
        return err;
      });

    if (result instanceof Error) {
      return;
    }

    this.content = "";

    this.$store.commit("wiki/ADD_PAGE", page);

    this.$router.push({
      name: "wiki-read",
      params: {
        page
      }
    });
  }

  public created() {
    this.load();
  }

  private async removePage() {
    const page = this.$route.params.page;
    await this.service.removePage(page);
    this.$store.commit("wiki/REMOVE_PAGE", page);
    this.$router.push({
      name: "wiki-toc"
    });
  }

  private async load() {
    this.content = await this.service
      .getPage(this.$route.params.page)
      .catch((err: Error) => {
        return "# Create New Page\n\n Your page was not found.";
      });
  }
}
</script>