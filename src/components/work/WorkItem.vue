<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0">{{workItem.title}}</h3>
    </v-card-title>

    <v-container id="grid" fluid grid-list-xs>
      <v-layout row wrap>
        <v-flex xs2 class="border-table">
          <span>Id</span>
        </v-flex>
        <v-flex sm10 xs12 class="border-table">
          <span>{{workItem.id}}</span>
        </v-flex>
        <v-flex sm2 xs12 class="border-table">
          <span>Assigned To</span>
        </v-flex>
        <v-flex xs10 class="border-table">
          <span>{{workItem.assignedTo}}</span>
        </v-flex>
          <v-flex sm2 xs12 class="border-table">
          <span>Created By</span>
        </v-flex>
        <v-flex xs10>
          <span>{{workItem.createdBy}}</span>
        </v-flex>
        <v-flex xs2>
          <span>Iteration</span>
        </v-flex>
        <v-flex xs10>
          <span>{{workItem.iterationPath}}</span>
        </v-flex>

        <v-flex xs2>
          <span>State</span>
        </v-flex>
        <v-flex xs10>
          <span>{{workItem.state}}</span>
        </v-flex>
        <v-flex xs2>
          <span>Reason</span>
        </v-flex>
        <v-flex xs10>
          <span>{{workItem.reason}}</span>
        </v-flex>
        <v-flex xs2>
          <span>Tags</span>
        </v-flex>
        <v-flex xs10>
          <span>{{workItem.tags}}</span>
        </v-flex>
        <v-flex xs2>
          <span>Description</span>
        </v-flex>
        <v-flex xs10>
          <span v-html="workItem.description"></span>
        </v-flex>
        <v-flex xs2>
          <span>Repro Steps</span>
        </v-flex>
        <v-flex xs10>
          <span>{{workItem.reproSteps}}</span>
        </v-flex>

        <v-flex xs2>
          <span>System Info</span>
        </v-flex>

        <v-flex xs10>
          <span>{{workItem.systemInfo}}</span>
        </v-flex>

        <v-flex xs2>
          <span>Attachments</span>
        </v-flex>

        <v-flex xs10>
          <WorkAttachmentList v-bind:attachments="workItem.attachments"></WorkAttachmentList>
        </v-flex >

        <v-flex xs2>
          <span>History</span>
        </v-flex>

        <v-flex xs10>
          <WorkChangeHistoryList v-bind:historyList="workItem.revisions"></WorkChangeHistoryList>
        </v-flex >
      </v-layout>
    </v-container>
  </v-card>
</template>


<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { IWorkItemFields } from "@/types";
import WorkApi from "@/components/work/WorkApi";
import WorkAttachmentList from "@/components/work/WorkAttachmentList.vue";
import WorkChangeHistoryList from "@/components/work/WorkChangeHistoryList.vue";

@Component({
  components: {
    WorkAttachmentList,
    WorkChangeHistoryList
  }
})
export default class WorkItem extends Vue {
  public workItem: IWorkItemFields = {} as IWorkItemFields;

  private service: WorkApi;

  constructor() {
    super();
    this.service = new WorkApi();
  }

  public async created() {
    this.workItem = await this.service.getWorkItem(
      parseInt(this.$route.params.id, 10)
    );
  }
}
</script>

<style>
.border-table {
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
}
</style>