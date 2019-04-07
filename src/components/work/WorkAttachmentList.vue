<template>
  <v-layout>
    <v-layout row>
      <v-flex xs1 pa-3>
        <v-icon>attachment</v-icon>
      </v-flex>
      <v-flex>
        <v-layout column>
          <v-flex>
            <v-list>
              <v-list-tile-sub-title>Attachments</v-list-tile-sub-title>
            </v-list>
          </v-flex>

          <v-flex v-for="(attachment, i) in attachments" :key="i">
            <WorkAttachment v-bind:attachment="attachment"></WorkAttachment>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-layout>
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