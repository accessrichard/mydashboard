<template>
    <v-autocomplete
      v-model="selectedUsers"
      :items="members"
      :readonly="readonly"
      :loading="isLoading"
      small-chips
      multiple
      deletable-chips
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
  private model: any = [];

  get selectedUsers() {
    return this.model;
  }

  set selectedUsers(val: string) {
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
