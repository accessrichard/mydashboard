<template>
  <div class="links">
    <h1>Test Links Page</h1>
    <ul>
      <li v-for="(linkGroup, index) in links" :key="`linkGroup.${index}`">
        {{ linkGroup.header }}
        <a
          v-for="(link, i) in linkGroup.links"
          :key="i"
          :href="link.href"
          class="subheading mx-3"
          target="_blank"
        >{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import mockLinks from "@/views/links/links.mock";
import { ILinks } from "@/types";

@Component
export default class Links extends Vue {
  public links: ILinks[] = mockLinks.links;
}
</script>
