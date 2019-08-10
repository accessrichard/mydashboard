 <template>
  <v-toolbar color="primary" dark fixed app :scroll-off-screen="true" >
    <v-toolbar-side-icon v-on:click.stop="toggleLeftSidebar()"></v-toolbar-side-icon>

  <v-toolbar-title>
      <router-link to="/" tag="button">Dashboard</router-link>
    </v-toolbar-title>
  </v-toolbar>
</template>


<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import layoutStore from "@/components/layout/LayoutStore";

@Component
export default class AppHeader extends Vue {
  public toggleLeftSidebar() {
    layoutStore.leftSidebar.isVisible = !layoutStore.leftSidebar.isVisible;
  }
}
</script>
