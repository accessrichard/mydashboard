<template>
  <div>
    <a :href="attachment.name">{{attachment.url}}</a>
  </div>
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IWorkItemRelation } from "@/types";
import WorkApi from "@/components/work/WorkApi";

@Component
export default class WorkListItemAttachmentListItem extends Vue {
  @Prop({
    default: () => {
      return {
        name: "",
        url: "",
        creationDate: ""
      };
    }
  })
  public attachment!: IWorkItemRelation;
}
</script>