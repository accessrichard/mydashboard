<template>
  <div>
    <v-dialog v-model="isWorkItemVisible" width="80%">
      <work-list-item-card v-bind:id="id" v-on:close="isWorkItemVisible = false"></work-list-item-card>
    </v-dialog>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">Work</h3>
        <v-spacer></v-spacer>
        <v-checkbox color="primary" v-model="isMyWorkOnly" :label="`My Work Only`"></v-checkbox>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="workItems"
        :loading="loading"
        :search="search"
        hide-actions
        class="v-table__overflow_hidden"
      >
        <v-progress-linear v-slot:progress color="primary" indeterminate></v-progress-linear>
        <template v-slot:items="props">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.workItemType }}</td>
          <td>{{ props.item.state }}</td>
          <td>{{ props.item.assignedTo }}</td>
          <td>{{ props.item.title }}</td>
          <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              v-on:click="addTodo(props.item)"
              :disabled="pinnedList.includes(props.item.id)"
            >playlist_add</v-icon>
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
import { IWorkItemFields, ITodo } from "@/types";
import WorkApi from "@/components/work/WorkApi";
import WorkListItemCard from "@/components/work/WorkListItemCard.vue";
import todoStore from "@/components/todo/TodoStore";

@Component({
  components: {
    WorkListItemCard
  }
})
export default class WorkList extends Vue {
  public workItems: IWorkItemFields[] = [];

  public isWorkItemVisible: boolean = false;

  public search: string = "";

  public loading: boolean = true;

  get isMyWorkOnly(): boolean {
    return this.$data.myWorkOnly;
  }

  set isMyWorkOnly(val: boolean) {
    if (this.$data.myWorkOnly !== val) {
      this.loadTable();
    }

    this.$data.myWorkOnly = val;
  }

  public pinnedList: number[] = [];

  public headers: any = [
    {
      text: "ID",
      align: "left",
      sortable: false,
      value: "id"
    },
    { text: "Type", value: "workItemType" },
    { text: "Status", value: "state" },
    { text: "Assigned To", value: "assignedTo" },
    { text: "Title", value: "title" },
    { text: "Actions", value: "id", sortable: false }
  ];

  public id: number = 0;

  private service: WorkApi;

  private myWorkOnly: boolean = true;

  constructor() {
    super();
    this.service = new WorkApi();
  }

  public addTodo(workItem: IWorkItemFields) {
    todoStore.addTodo({
      title: workItem.title,
      routerLinkUrl: "/work/" + workItem.id,
      urlName: workItem.id
    } as ITodo);

    this.pinnedList.push(workItem.id || 0);
  }

  public openDialog(workItem: IWorkItemFields) {
    this.id = workItem.id || 0;
    this.isWorkItemVisible = true;
  }

  public openWorkItem(workItem: IWorkItemFields) {
    this.$router.push({
      name: "workItem",
      params: { id: workItem.id } as any
    });
  }

  public async created() {
    this.loadTable();
  }

  private async loadTable() {
    this.loading = true;
    if (this.isMyWorkOnly) {
      this.workItems = await this.service.getMyWork();
    } else {
      this.workItems = await this.service.getWork();
    }

    this.loading = false;
  }
}
</script>

<style>
.v-table__overflow_hidden {
  overflow-x: hidden;
}

.v-table__overflow_hidden .v-table__overflow {
  overflow-x: hidden;
}
</style>
