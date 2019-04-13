<template>
  <v-layout row>
    <v-flex xs1 pa-3>
      <v-icon>comment</v-icon>
    </v-flex>
    <v-flex>
      <v-layout column>
        <v-flex>
          <v-list>
            <v-list-tile-sub-title>Comments</v-list-tile-sub-title>
          </v-list>
        </v-flex>
        <v-flex v-for="(comment, i) in comments" :key="i">
          {{comment.revisedBy.name}} - {{new Date(comment.revisedDate).toLocaleDateString()}}
          <div v-html="comment.text"></div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>


<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { IChangeHistory, IComment } from "@/types";
import WorkApi from "@/components/work/WorkApi";
import WorkChangeHistory from "@/components/work/WorkChangeHistory.vue";

@Component
export default class WorkListItemCommentList extends Vue {
  @Prop({
    default: () => {
      return [];
    }
  })
  public comments!: IComment[];
}
</script>