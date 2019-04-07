<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{htmlDialog.title}}</h3>
            <div class="pa-3" v-html="htmlDialog.html"></div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { IHtmlDialog } from "@/types";

@Component
export default class HtmlDialog extends Vue {
  @Prop({
    default: () => {
      return {
        title: "",
        html: "",
        isVisible: false
      };
    }
  })
  public readonly htmlDialog!: IHtmlDialog;
}
</script>


