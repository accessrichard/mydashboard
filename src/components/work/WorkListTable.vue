<template>
  <div>
    <v-dialog v-model="isWorkItemVisible" width="80%">
      <work-list-item-card v-bind:id="id" v-on:close="isWorkItemVisible = false"></work-list-item-card>
    </v-dialog>

    <v-card>
      <v-card-title>
        Work
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="workItems" :search="search" hide-actions>
        <template v-slot:items="props">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.state }}</td>
          <td>{{ props.item.assignedTo }}</td>
          <td>{{ props.item.title }}</td>
          <td class="justify-center layout px-0">
            <v-icon small class="mr-2" v-on:click="openWorkItem(props.item)">open_in_new</v-icon>
            <v-icon small class="mr-2" v-on:click="openDialog(props.item)">open_in_browser</v-icon>
          </td>
        </template>
        <v-alert
          v-slot:no-results
          :value="true"
          color="error"
          icon="warning"
        >Your search for "{{ search }}" found no results.</v-alert>
      </v-data-table>
    </v-card>
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

  public search: string = "";

  public headers: any = [
    {
      text: "ID",
      align: "left",
      sortable: false,
      value: "id"
    },
    { text: "Status", value: "state" },
    { text: "Assigned To", value: "assignedTo" },
    { text: "Title", value: "title" },
    { text: "Actions", value: "id", sortable: false }
  ];

  public id: number = 0;

  private service: WorkApi;

  constructor() {
    super();
    this.service = new WorkApi();
  }

  public openDialog(workItem: IWorkItemFields) {
    this.id = workItem.id || 0;
    console.log(this.id);
    this.isWorkItemVisible = true;
  }

  public openWorkItem(workItem: IWorkItemFields) {
    this.$router.push({
      name: "workItem",
      params: { id: workItem.id} as any
    });
  }

  public async created() {
    this.workItems = await this.service.getWork();
  }
}
</script>
