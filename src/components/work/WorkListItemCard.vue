<template>
  <v-card class="pa-3">
    <work-list-item-title v-bind:workItem="workItem"></work-list-item-title>

    <v-divider inset></v-divider>

    <work-list-item-summary v-bind:workItem="workItem"></work-list-item-summary>

    <v-divider inset></v-divider>

    <work-list-item-description v-bind:workItem="workItem"></work-list-item-description>

    <v-divider inset></v-divider>

    <work-list-item-comment-list v-bind:comments="workItem.comments"></work-list-item-comment-list>

    <v-divider inset></v-divider>

    <work-list-item-attachment-list v-bind:attachments="workItem.attachments"></work-list-item-attachment-list>

    <v-divider inset></v-divider>

    <work-list-item-change-history-list v-bind:historyList="workItem.revisions"></work-list-item-change-history-list>
  </v-card>
</template>


<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { IWorkItemFields } from "@/types";
import WorkApi from "@/components/work/WorkApi";
import WorkListItemAttachmentList from "@/components/work/WorkListItemAttachmentList.vue";
import WorkListItemChangeHistoryList from "@/components/work/WorkListItemChangeHistoryList.vue";
import WorkListItemCommentList from "@/components/work/WorkListItemCommentList.vue";
import WorkListItemSummary from "@/components/work/WorkListItemSummary.vue";
import WorkListItemTitle from "@/components/work/WorkListItemTitle.vue";
import WorkListItemDescription from "@/components/work/WorkListItemDescription.vue";

@Component({
  components: {
    WorkListItemTitle,
    WorkListItemSummary,
    WorkListItemDescription,
    WorkListItemAttachmentList,
    WorkListItemChangeHistoryList,
    WorkListItemCommentList
  }
})
export default class WorkListItemCard extends Vue {
  public workItem: IWorkItemFields = {} as IWorkItemFields;

  @Prop()
  public id!: number;

  private service: WorkApi;

  constructor() {
    super();
    this.service = new WorkApi();
  }

  @Watch("id")
  public async onIdChanged(val: number, oldVal: number) {
    if (val === oldVal || val === 0) {
      return;
    }

    if (this.id) {
      this.workItem = await this.service.getWorkItem(this.id);
    }
  }

  public async created() {
    if (this.id !== 0) {
      this.workItem = await this.service.getWorkItem(this.id);
    }
  }
}
</script>