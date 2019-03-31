<template>
  <v-form>
    <v-container>
      <v-text-field v-model="newPageName" label="New Page Name">
      </v-text-field>
      <v-btn color="success" v-on:click="toEdit">Create</v-btn>
    </v-container>
  </v-form>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import router from "@/router";

@Component({
  name: "create-wiki-page"
})
export default class Create extends Vue {
  public newPageName: string = "";

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