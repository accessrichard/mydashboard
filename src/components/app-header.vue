 <template>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon v-on:click.stop="toggleSidebar()"></v-toolbar-side-icon>
    <v-toolbar-title>Dashboard</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <quick-links></quick-links>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import QuickLinks from './quick-links.vue';

@Component({
  components: {
    QuickLinks
  }
})
export default class AppHeader extends Vue {

  public toggleSidebar() {
    this.$store.dispatch("layout/toggleSidebar", {
      visible: !this.$store.state.layout.sidebar.visible
    });
  }
}
</script>
