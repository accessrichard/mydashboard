<template>
  <v-layout row>
    <v-flex xs1 pa-3>
      <v-icon>work</v-icon>
    </v-flex>
    <v-flex>
      <v-layout column>
        <v-flex>
          <v-list>
            <v-list-tile-sub-title>Description</v-list-tile-sub-title>
          </v-list>
        </v-flex>
        <v-flex>
          <div v-if="workItem.description" v-html="workItem.description"></div>
          <div v-if="workItem.reproSteps" v-html="workItem.reproSteps"></div>
          <div v-if="workItem.systemInfo">
            <v-list>
              <v-list-tile-sub-title>System Info</v-list-tile-sub-title>
            </v-list>
            <div v-html="workItem.systemInfo"></div>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IChangeHistory, IComment, IWorkItemFields } from "@/types";
import WorkApi from "@/components/work/WorkApi";

@Component
export default class WorkListItemDescription extends Vue {
  @Prop({
    default: {} as IWorkItemFields
  })
  public workItem!: IWorkItemFields;
}
</script>
