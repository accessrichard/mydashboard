<template>
  <v-menu attach="#header-frame" left offset-y v-model="menu" :close-on-content-click="false">
    <template v-slot:activator="{ on }">
      <v-btn slot="activator" v-on="on" flat>Weather</v-btn>
    </template>
    <app-embedded-frame-page></app-embedded-frame-page>
  </v-menu>
</template>


<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import AppEmbeddedFramePage from "./AppEmbeddedFramePage.vue";

@Component({
  components: {
    AppEmbeddedFramePage
  }
})
export default class AppEmbeddedFrame extends Vue {
  public menu: boolean = false;
}
</script>
