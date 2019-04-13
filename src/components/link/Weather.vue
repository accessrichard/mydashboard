<template>
  <v-menu offset-y v-model="menu" :close-on-content-click="false">
    <template v-slot:activator="{ on }">
      <v-btn slot="activator" v-on="on" flat>Weather</v-btn>
    </template>
    <div style="width: 210px;">
      <!-- A temporary placeholder widget -->
      <!-- Not intended for actual usage and will not refresh -->
      <!-- Using a real widget for production usage. -->
      <iframe
        style="display: block;"
        src="https://cdnres.willyweather.com/widget/loadView.html?id=106885"
        width="210"
        height="228"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <a
        style="z-index: 1;text-indent: -9999em;margin: -20px 0 0 0;display: block;height: 20px;position: relative"
        href="https://www.willyweather.com/mn/hennepin-county/minneapolis.html"
        rel="nofollow"
      >https://www.willyweather.com/mn/hennepin-county/minneapolis.html</a>
    </div>
  </v-menu>
</template>


<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Weather extends Vue {
  public menu: boolean = false;
}
</script>
