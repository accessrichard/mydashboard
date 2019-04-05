<template>
  <v-expansion-panel>
    <v-expansion-panel-content expand v-for="(workItem, i) in workItems" :key="i">
      <template v-slot:header>
        <v-container>
          <v-layout row>
            <v-flex xs1>
              <span>
                <router-link to="/work/1">
                  <a>{{workItem.id}}</a>
                </router-link>
              </span>
            </v-flex>
            <v-flex xs2>
              <span>{{workItem.workItemType}}</span>
            </v-flex>
            <v-flex xs2>
              <span>{{workItem.state}}</span>
            </v-flex>
            <v-flex xs2>
              <span>{{workItem.assignedTo}}</span>
            </v-flex>
            <v-flex xs5>
              <span>{{workItem.title}}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </template>
      <v-card>
        <v-card-text>{{workItem.description}}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>


<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { IWorkItemFields } from "@/types";
import WorkApi from "@/components/work/WorkApi";

@Component
export default class WorkList extends Vue {
  public workItems: IWorkItemFields[] = [];

  private service: WorkApi;

  constructor() {
    super();
    this.service = new WorkApi();
  }

  public async created() {
    this.workItems = await this.service.getWork();
  }
}
</script>