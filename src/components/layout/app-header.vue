 <template>
  <v-toolbar color="primary" dark fixed app>
    <v-toolbar-side-icon v-on:click.stop="toggleLeftSidebar()"></v-toolbar-side-icon>

  <v-toolbar-title>
      <router-link to="/" tag="button">Dashboard</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <weather></weather>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import Weather from "@/components/link/Weather.vue";
import layoutStore from "@/components/layout/LayoutStore";

@Component({
  components: {
    Weather
  }
})
export default class AppHeader extends Vue {
  public toggleLeftSidebar() {
    layoutStore.leftSidebar.isVisible = !layoutStore.leftSidebar.isVisible;
  }
}
</script>
