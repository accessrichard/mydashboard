<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex text-xs-center fill-height>
        <todo></todo>
        <Read v-bind:page="page"></Read>
        <contact-view></contact-view>
        <Toc></Toc>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Toc from "@/components/wiki/Toc.vue";
import Todo from "@/components/todo/Todo.vue";
import ContactView from "@/components/contact/ContactView.vue";
import Read from "@/components/wiki/Read.vue";

@Component({
  name: "Home",
  components: {
    Todo,
    ContactView,
    Read,
    Toc
  }
})
export default class Home extends Vue {
  public page: string = "Home";
}
</script>
