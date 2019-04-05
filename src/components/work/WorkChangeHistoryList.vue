<template>
<div>
   <WorkChangeHistory v-for="(history, i) in historyList" :key="i" v-bind:history="history"></WorkChangeHistory>
</div>          
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IChangeHistory } from "@/types";
import WorkApi from "@/components/work/WorkApi";
import WorkChangeHistory from "@/components/work/WorkChangeHistory.vue";

@Component({
  components: {
    WorkChangeHistory
  }
})
export default class WorkChangeHistoryList extends Vue {
  @Prop({
      default: () => {
          return [];
      }
  })
  public historyList!: IChangeHistory[];
}
</script>