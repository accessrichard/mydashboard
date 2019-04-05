<template>
 <v-list>
  <v-list-tile v-for="(attachment, i) in attachments" :key="i">
      <v-list-tile-action>
        <v-icon>attachment</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
            <WorkAttachment v-bind:attachment="attachment"></WorkAttachment>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IWorkItemRelation } from "@/types";
import WorkApi from "@/components/work/WorkApi";
import WorkAttachment from "@/components/work/WorkAttachment.vue";

@Component({
  components: {
    WorkAttachment
  }
})
export default class WorkAttachmentList extends Vue {
  @Prop({
      default: () => {
          return [];
      }
  })
  public attachments!: IWorkItemRelation[];
}
</script>