<template>
  <div>
    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
      fixed
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="primary" dark fab>
          <v-icon>account_circle</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="green" @click="toggleLeftSidebar()">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-btn fab dark small color="blue" @click="isFrameVisible = true">
        <v-icon>assignment</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import layoutStore from "@/components/layout/LayoutStore";

@Component
export default class AppActionButton extends Vue {
  public fab: boolean = false;
  public top: boolean = true;
  public right: boolean = false;
  public left: boolean = true;
  public bottom: boolean = false;
  public direction: string = "bottom";
  public hover: boolean = true;
  public tabs: any = null;
  public transition: string = "slide-y";

  public toggleLeftSidebar() {
    layoutStore.leftSidebar.isVisible = !layoutStore.leftSidebar.isVisible;
  }
}
</script>
