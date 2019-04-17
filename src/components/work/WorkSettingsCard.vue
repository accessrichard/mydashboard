<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="$emit('close')">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>Work Settings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat @click="$emit('update')">Update</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-layout row>
      <v-flex md4 sm6 xs12>
        <v-list>
          <v-subheader>User</v-subheader>

          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="isMyWorkOnly" color="primary"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>Only My Work</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-if="!isMyWorkOnly">
            <v-list-tile-action>
              <user-auto-complete v-on:selected="selectUser($event)"></user-auto-complete>
            </v-list-tile-action>
          </v-list-tile>

          <v-subheader>Iteration</v-subheader>

          <v-list-tile v-for="(iteration, i) in iterations" :key="i">
            <v-list-tile-action>
              <v-switch
                :input-value="iteration.isOn"
                @change="toggleIteration(iteration, $event)"
                color="primary"
              ></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>{{iteration.iteration.path}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex md4 sm6 xs12>
        <v-list>
          <v-subheader>Type</v-subheader>
          <v-list-tile v-for="(type, i) in types" :key="i">
            <v-list-tile-action>
              <v-switch :input-value="type.isOn" @change="toggleType(type, $event)" color="primary"></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>{{type.name}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-subheader>Status</v-subheader>
        <v-list>
          <v-list-tile v-for="(status, i) in statuses" :key="i">
            <v-list-tile-action>
              <v-switch
                :input-value="status.isOn"
                @change="toggleStatus(status, $event)"
                color="primary"
              ></v-switch>
            </v-list-tile-action>
            <v-list-tile-title>{{status.name}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-card>
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
import UserAutoComplete from "@/components/work/WorkSettingsCardUserAutoComplete.vue";
import todoStore from "@/components/todo/TodoStore";
import workStore from "@/components/work/WorkStore";

@Component({
  components: {
    UserAutoComplete
  }
})
export default class WorkList extends Vue {
  public menu: boolean = false;

  get iterations(): IIterationSetting[] {
    return workStore.iterations;
  }

  get statuses(): ISelectedWork[] {
    return workStore.statuses;
  }

  get types(): ISelectedWork[] {
    return workStore.types;
  }

  get isMyWorkOnly(): boolean {
    return workStore.user === "@me";
  }

  set isMyWorkOnly(val: boolean) {
    this.$store.commit("work/SET_USER", val ? "@me" : "");
  }

  public selectUser(user: string) {
    this.$store.commit("work/SET_USER", "'" + user + "'");
  }

  public toggleStatus(setting: ISelectedWork, e: any) {
    setting.isOn = typeof e === "boolean" && e;
    this.$store.commit("work/SET_STATUS", setting);
  }

  public toggleType(setting: ISelectedWork, e: any) {
    setting.isOn = typeof e === "boolean" && e;
    this.$store.commit("work/SET_TYPE", setting);
  }

  public toggleIteration(setting: ISelectedWork, e: any) {
    setting.isOn = typeof e === "boolean" && e;
    this.$store.commit("work/SET_ITERATION", setting);
  }

  public async created() {
    workStore.getStatuses();
    workStore.getTypes();
    workStore.getIterations();
  }
}
</script>
