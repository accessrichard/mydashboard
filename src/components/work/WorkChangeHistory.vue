<template>
  <v-layout column>
    <v-flex>
      <span>Date: {{history.changedDate}}</span>
    </v-flex>
    <v-flex>
      <span>Changed By: {{history.changedBy}}</span>
    </v-flex>

    <v-flex>
      <div>Revision: {{revision}}</div>
    </v-flex>
  </v-layout>
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IChangeHistory } from "@/types";
import WorkApi from "@/components/work/WorkApi";

@Component
export default class WorkAttachment extends Vue {
  @Prop({
    default: () => {
      return {
        changedDate: null,
        changedBy: ""
      };
    }
  })
  public history!: IChangeHistory;

  get revision() {
    const clone = Object.assign({}, this.history);
    delete clone.changedBy;
    delete clone.changedDate;
    const key = Object.keys(clone)[0];
    return key + " " + clone[key];
  }
}
</script>