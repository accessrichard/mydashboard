<template>
  <v-container fluid>
    <v-layout>
      <v-flex fill-height>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Notes</h3>
              <div>
                <read v-bind:page="page"></read>
              </div>
            </div>
          </v-card-title>
        </v-card>

           <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Todo</h3>
              <div>
                 <todos></todos>
              </div>
            </div>
          </v-card-title>
        </v-card>
        <v-card>
         <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Contacts</h3>
              <div>
                <contacts></contacts>
              </div>
            </div>
          </v-card-title>
        </v-card>

      
       
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "@/components/todo/TodoList.vue";
import ContactView from "@/components/contact/ContactView.vue";
import Read from "@/components/wiki/Read.vue";

@Component({
  name: "Home",
  components: {
    todos: TodoList,
    contacts: ContactView,
    Read
  }
})
export default class Home extends Vue {
  public page: string = "Home";
}
</script>
