<template>
  <v-layout row pt-3 pb-3>
    <v-flex xs12 sm10 offset-md1>      
      <work-list-item-card></work-list-item-card>
    </v-flex>
  </v-layout>
</template>


<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { IWorkItemFields } from "@/types";
import WorkListItemCard from "@/components/work/WorkListItemCard.vue";

@Component({
  components: {
    WorkListItemCard
  }
})
export default class WorkListItem extends Vue {}
</script>