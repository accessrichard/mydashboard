<template>
  <v-layout column fill-height>
    <v-card-title>
      <v-flex xs1 hidden-sm-and-down>
        <v-icon v-if="workItem.workItemType == 'Bug'">bug_report</v-icon>
        <v-icon v-else>work_outline</v-icon>
      </v-flex>
      <v-flex>
        <h3 class="headline mb-0">{{workItem.title}}</h3>
      </v-flex>
    </v-card-title>
  </v-layout>
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IChangeHistory, IComment, IWorkItemFields } from "@/types";
import WorkApi from "@/components/work/WorkApi";

@Component
export default class WorkListItemTitle extends Vue {
  @Prop({
    default: {} as IWorkItemFields
  })
  public workItem!: IWorkItemFields;
}
</script>
