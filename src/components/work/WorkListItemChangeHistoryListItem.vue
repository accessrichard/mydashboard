<template>
  <v-layout row align-center>
    <v-flex xs4>{{new Date(history.changedDate).toLocaleDateString()}}</v-flex>
    <v-flex xs4>{{history.changedBy}}</v-flex>
    <v-flex xs4>
      <v-btn icon v-on:click="$emit('openRevision', revision)">
        <v-icon small>open_in_new</v-icon>
      </v-btn>
      {{revision.key}}
    </v-flex>
  </v-layout>
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IChangeHistory, IHtmlDialog, IKeyValue } from "@/types";
import WorkApi from "@/components/work/WorkApi";

@Component
export default class WorkListItemChangeHistoryListItem extends Vue {
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
    return this.getChangedItem();
  }

  private getChangedItem() {
    const clone = Object.assign({}, this.history);
    delete clone.changedBy;
    delete clone.changedDate;
    const key = Object.keys(clone)[0];
    return {
      key: this.camelCaseToHumanReadable(key),
      value: clone[key]
    } as IKeyValue;
  }

  private camelCaseToHumanReadable(str: string): string {
    return str.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase());
  }
}
</script>