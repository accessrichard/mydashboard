<template>
  <v-layout>
    <v-layout row>
      <v-flex xs1 pa-3>
        <v-icon>info</v-icon>
      </v-flex>
      <v-flex>
        <v-layout column>
          <v-flex>
            <v-list class="zero-padding pa-0">
              <v-list-tile-sub-title>Summary</v-list-tile-sub-title>
            </v-list>
          </v-flex>
          <v-layout row align-start justify-start fill-height pa-0>
            <v-flex xs4>
              <v-list two-line class="zero-padding pt-0">
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>Assigned To</v-list-tile-sub-title>
                    <v-list-tile-title>{{workItem.assignedTo}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>Path</v-list-tile-sub-title>
                    <v-list-tile-title>{{workItem.areaPath}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
            <v-flex xs4>
              <v-list two-line class="zero-padding pt-0">
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>Type</v-list-tile-sub-title>
                    <v-list-tile-title>{{workItem.workItemType}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>State</v-list-tile-sub-title>
                    <v-list-tile-title>{{workItem.state}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
            <v-flex xs4>
              <v-list two-line class="zero-padding pt-0">
                   <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>Tags</v-list-tile-sub-title>
                    <v-list-tile-title>{{workItem.tags}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>Reason</v-list-tile-sub-title>
                    <v-list-tile-title>{{workItem.reason}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-layout>
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IChangeHistory, IComment, IWorkItemFields } from "@/types";
import WorkApi from "@/components/work/WorkApi";

@Component
export default class WorkListItemSummary extends Vue {
  @Prop({
    default: {} as IWorkItemFields
  })
  public workItem!: IWorkItemFields;
}
</script>

<style scoped>
.zero-padding div.v-list__tile {
  padding: 0;
}
</style>