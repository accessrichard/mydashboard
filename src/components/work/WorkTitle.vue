<template>
  <v-layout column fill-height>
    <v-card-title>
      <h3 class="headline mb-0">{{workItem.title}}</h3>
      <v-spacer></v-spacer>
      {{workItem.id}}
      <v-btn icon v-if="workItem.workItemType == 'Bug'">
        <v-icon>bug_report</v-icon>
      </v-btn>
      <v-btn icon v-else>
        <v-icon>work_outline</v-icon>
      </v-btn>
      <v-btn icon to="/work">
        <v-icon>chevron_left</v-icon>
      </v-btn>
    </v-card-title>
  </v-layout>
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IChangeHistory, IComment, IWorkItemFields } from "@/types";
import WorkApi from "@/components/work/WorkApi";

@Component
export default class WorkTitle extends Vue {
  @Prop({
    default: {} as IWorkItemFields
  })
  public workItem!: IWorkItemFields;
}
</script>
