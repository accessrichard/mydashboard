<template>
  <div>
    <v-dialog v-model="isWorkItemVisible" width="80%">
      <work-list-item-card v-bind:id="id" v-on:close="isWorkItemVisible = false"></work-list-item-card>
    </v-dialog>
    <v-expansion-panel>
      <v-expansion-panel-content expand v-for="(workItem, i) in workItems" :key="i">
        <template v-slot:header>
          <v-container>
            <v-layout row>
              <v-flex xs2>
                <span>
                  <a href v-on:click.prevent="openWorkItemDialog(workItem)">{{workItem.id}}</a>
                  <v-btn class="ma-0" icon :to="{ name: 'workItem', params: { id: workItem.id }}">
                    <v-icon small>open_in_new</v-icon>
                  </v-btn>
                  <v-btn class="ma-0" icon :to="{ name: 'workItem', params: { id: workItem.id }}">
                    <v-icon small>open_in_browser</v-icon>
                  </v-btn>
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
  </div>
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IWorkItemFields } from "@/types";
import WorkApi from "@/components/work/WorkApi";
import WorkListItemCard from "@/components/work/WorkListItemCard.vue";

@Component({
  components: {
    WorkListItemCard
  }
})
export default class WorkList extends Vue {
  public workItems: IWorkItemFields[] = [];

  public isWorkItemVisible: boolean = false;

  @Prop(Number)
  public id!: number;

  private service: WorkApi;

  constructor() {
    super();
    this.service = new WorkApi();
  }

  public openWorkItemDialog(workItem: IWorkItemFields) {
    this.id = workItem.id || 0;
    this.isWorkItemVisible = true;
  }

  public async created() {
    this.workItems = await this.service.getMyWork();
  }
}
</script>
