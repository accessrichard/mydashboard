<template>
  <v-layout row pt-3 pb-3>
    <v-flex xs12 sm10 offset-md1>
      <v-card>
        <WorkTitle v-bind:workItem="workItem"></WorkTitle>

        <v-divider inset></v-divider>

        <WorkItemSummary v-bind:workItem="workItem"></WorkItemSummary>

        <v-divider inset></v-divider>

        <WorkDescription v-bind:workItem="workItem"></WorkDescription>

        <v-divider inset></v-divider>

        <WorkComments v-bind:comments="workItem.comments"></WorkComments>

        <v-divider inset></v-divider>

        <WorkAttachmentList v-bind:attachments="workItem.attachments"></WorkAttachmentList>

        <v-divider inset></v-divider>

        <WorkChangeHistoryList v-bind:historyList="workItem.revisions"></WorkChangeHistoryList>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { IWorkItemFields } from "@/types";
import WorkApi from "@/components/work/WorkApi";
import WorkAttachmentList from "@/components/work/WorkAttachmentList.vue";
import WorkChangeHistoryList from "@/components/work/WorkChangeHistoryList.vue";
import WorkComments from "@/components/work/WorkComments.vue";
import WorkItemSummary from "@/components/work/WorkItemSummary.vue";
import WorkTitle from "@/components/work/WorkTitle.vue";
import WorkDescription from "@/components/work/WorkDescription.vue";

@Component({
  components: {
    WorkAttachmentList,
    WorkChangeHistoryList,
    WorkComments,
    WorkItemSummary,
    WorkDescription,
    WorkTitle
  }
})
export default class WorkItem extends Vue {
  public workItem: IWorkItemFields = {} as IWorkItemFields;

  @Prop()
  public id!: number;

  public isDialog(): boolean {
    return typeof this.$route.params.id === "undefined";
  }

  private service: WorkApi;

  constructor() {
    super();
    this.service = new WorkApi();
  }

  public async created() {
    this.workItem = await this.service.getWorkItem(this.getId());
  }

  private getId(): number | any {
    if (this.id > 0) {
      return this.id;
    }

    if (!this.isDialog()) {
      return parseInt(this.$route.params.id, 10);
    }
  }
}
</script>