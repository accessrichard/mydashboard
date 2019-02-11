<template>
  <v-menu offset-y>
    <v-btn slot="activator" flat>Quick Links</v-btn>
    <v-list>
      <v-list-tile
        v-for="(link, index) in quickLinks"
        :key="index"
        :href="link.href"
        target="_blank"
      >
        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>


<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import { ILink } from '@/components/types';
import mock from "./quick-links.mock";

@Component
export default class QuickLinks extends Vue {
  public quickLinks: ILink[] = mock.links;
}
</script>
