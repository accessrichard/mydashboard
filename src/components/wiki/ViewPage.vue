<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0">{{page}}</h3>
    </v-card-title>
    <v-list-tile-content>
      <div class="pa-3">
        <div v-html="pageContent"></div>
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

  public pageContent: string = "";

  private service: WikiApi;

  constructor() {
    super();
    this.service = new WikiApi();
  }

  public toEdit(): void {
    this.$router.push({
      name: "wiki-edit",
      params: { page: this.page } as any
    });
  }

  @Watch("page")
  public async onPageChange(newPage: string, oldPage: string) {
    if (newPage === oldPage || newPage === "") {
      return;
    }

    this.setPageContent(newPage);
  }

  public async created() {
    if (this.page) {
      this.setPageContent(this.page);
    }
  }

  private async setPageContent(page: string) {
    const content = await this.service.getPage(page).catch(err => {
      return "# Create New Page\n\n Your page was not found.";
    });

    this.pageContent = marked(content, { sanitize: true });
  }
}
</script>