<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Table Of Contents</h3>
            </div>
          </v-card-title>
          <v-list dense>
          <table-of-contents-list></table-of-contents-list>
          </v-list>
          <create></create>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import wikiStore from "@/components/wiki/WikiStore";
import router from "@/router";
import { Route } from "vue-router";
import TocList from "@/components/wiki/TocList.vue";
import Create from "@/components/wiki/Create.vue";

@Component({
  name: "table-of-contents",
  components: {
    "table-of-contents-list": TocList,
    Create
  }
})
export default class Toc extends Vue {
  get pages(): string[] {
    return wikiStore.pages;
  }

  public newPageName: string = "";

  constructor() {
    super();
  }

  public toEdit(): void {
    router.push({
      name: "wiki-edit",
      params: {
        page: this.newPageName
      }
    });

    this.newPageName = "";
  }

  public created() {
    if (wikiStore.pages.length === 0) {
      wikiStore.getPages();
    }
  }
}
</script>