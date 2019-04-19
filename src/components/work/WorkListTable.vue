<template>
  <div>
    <v-dialog v-model="isWorkItemVisible" width="80%">
      <work-list-item-card v-bind:id="id" v-on:close="isWorkItemVisible = false"></work-list-item-card>
    </v-dialog>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">Work</h3>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        <v-dialog
          v-model="isSetttingsOpen"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>settings</v-icon>
            </v-btn>
          </template>
          <work-settings-card
            @update="isSetttingsOpen = false; loadTable()"
            v-on:close="isSetttingsOpen = false"
          ></work-settings-card>
        </v-dialog>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="workItems"
        :loading="loading"
        :search="search"
        hide-actions
        class="v-table__overflow_hidden"
        :no-data-text="noDataText"
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
import {
  IWorkItemFields,
  ITodo,
  IIterationPath,
  IIterationSetting,
  ISelectedWork,
  IWorkFilter
} from "@/types";
import WorkApi from "@/components/work/WorkApi";
import WorkListItemCard from "@/components/work/WorkListItemCard.vue";
import WorkSettingsCard from "@/components/work/WorkSettingsCard.vue";
import todoStore from "@/components/todo/TodoStore";
import workStore from "@/components/work/WorkStore";

@Component({
  components: {
    WorkListItemCard,
    WorkSettingsCard
  }
})
export default class WorkList extends Vue {
  public workItems: IWorkItemFields[] = [];

  public isWorkItemVisible: boolean = false;

  public search: string = "";

  public loading: boolean = true;

  public isSetttingsOpen: boolean = false;

  public pinnedList: number[] = [];

  public readonly defaultNoData: string = "No Data Available";

  public noDataText: string = this.defaultNoData;

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
    const types = workStore.getTypes();
    const iterations = workStore.getIterations();
    const statuses = workStore.getStatuses();

    workStore.getMembers();

    await Promise.all([types, iterations, statuses]);
    this.loadTable();
  }

  private async loadTable() {
    this.loading = true;

    const filter = {
      users: workStore.selectedUsers,
      iterations: workStore.selectedIterations.map(x => x.iteration.path),
      statuses: workStore.selectedStatuses.map(x => x.name),
      types: workStore.selectedTypes.map(x => x.name),
      text: workStore.searchText
    } as IWorkFilter;

    const results = await this.service.query(filter).catch((error: Error) => {
      this.workItems = [];
      console.log(error);
    });

    if (results instanceof Error) {
      this.noDataText = results.message;
    } else {
      this.noDataText = this.defaultNoData;
      this.workItems = results as IWorkItemFields[];
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
