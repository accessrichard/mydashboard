<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="headline mb-0">Table Of Contents</h3>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-list dense>
            <table-of-contents-list :filter="search"></table-of-contents-list>
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
  public newPageName: string = "";

  public search: string = "";

  public toEdit(): void {
    router.push({
      name: "wiki-edit",
      params: {
        page: this.newPageName
      }
    });

    this.newPageName = "";
  }
}
</script>