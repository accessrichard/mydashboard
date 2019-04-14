<template>
  <v-layout>
    <v-layout row>
      <v-flex xs1 pa-3 hidden-sm-and-down>
        <v-icon>history</v-icon>
      </v-flex>
      <v-flex>
        <v-layout column>
          <v-flex>
            <v-list>
              <v-list-tile-sub-title>Change History</v-list-tile-sub-title>
            </v-list>
          </v-flex>

          <v-flex v-for="(history, i) in historyList" :key="i">
            <WorkChangeHistory v-bind:history="history"  v-on:openRevision="openRevision($event)"></WorkChangeHistory>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-dialog v-model="htmlDialog.isVisible" width="620">
      <HtmlDialog
        v-bind:htmlDialog="htmlDialog"       
        v-on:close="htmlDialog.isVisible = false"
      ></HtmlDialog>
    </v-dialog>
  </v-layout>
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IChangeHistory, IHtmlDialog, IKeyValue } from "@/types";
import WorkApi from "@/components/work/WorkApi";
import WorkChangeHistory from "@/components/work/WorkListItemChangeHistoryListItem.vue";
import HtmlDialog from "@/components/layout/dialog/HtmlDialog.vue";

@Component({
  components: {
    WorkChangeHistory,
    HtmlDialog
  }
})
export default class WorkListItemChangeHistoryList extends Vue {
  @Prop({
    default: () => {
      return [];
    }
  })
  public historyList!: IChangeHistory[];

  public htmlDialog: IHtmlDialog = {} as IHtmlDialog;

  public openRevision(e: IKeyValue) {
    console.log(e);
    this.htmlDialog = {
      title: e.key,
      html: e.value,
      isVisible: true
    } as IHtmlDialog;
  }
}
</script>