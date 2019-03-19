<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex text-xs-center fill-height>
        <todo></todo>
        <Read v-bind:page="page"></Read>
        <contact-list></contact-list>
        <Toc></Toc>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Toc from "@/views/wiki/Toc.vue";
import Todo from "@/views/todo/Todo.vue";
import ContactList from "@/views/contact/ContactList.vue";
import Read from "@/views/wiki/Read.vue";

@Component({
  name: "Home",
  components: {
    Todo,
    Toc,
    ContactList,
    Read
  }
})
export default class Home extends Vue {
  public page: string = "Home";

}
</script>
