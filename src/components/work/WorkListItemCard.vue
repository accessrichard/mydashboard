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
import { Component, Prop, Vue } from "vue-property-decorator";
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

  public isDialog(): boolean {
    return typeof this.$route.params.id === "undefined";
  }

  public async created() {
    const id = this.getId();
    if (id) {
      this.workItem = await this.service.getWorkItem(this.getId());
    }
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