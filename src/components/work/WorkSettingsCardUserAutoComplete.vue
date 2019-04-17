<template>
  <div>
    <v-autocomplete
      v-model="selectedUser"
      :items="members"
      :readonly="readonly"
      :loading="isLoading"
    >
      clearable
      label="Search"
      >
      <template v-slot:append-outer>
        <v-slide-x-reverse-transition mode="out-in">
          <v-icon
            :key="`icon-${isEditing}`"
            :color="isEditing ? 'success' : 'info'"
            @click="isEditing = !isEditing"
            v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
          ></v-icon>
        </v-slide-x-reverse-transition>
      </template>
    </v-autocomplete>
  </div>
</template>


<script lang='ts'>
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { IWorkFilter } from "@/types";
import workStore from "@/components/work/WorkStore";

@Component
export default class WorkSettingsCardAutoComplete extends Vue {
  public readonly: boolean = false;
  public isEditing: boolean = false;
  public isLoading: boolean = false;
  public search: string = "";
  private model: string = "";

  get selectedUser() {
    return this.model;
  }

  set selectedUser(val: string) {
    this.model = val;
    this.$emit("selected", val);
  }

  get members() {
    return workStore.members;
  }

  public async created() {
    this.isLoading = true;
    await workStore.getMembers();
    this.isLoading = false;
  }
}
</script>
