<template>
  <layout></layout>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Layout from '@/components/layout/main';

@Component({
  name: 'App',
  components: {
    Layout
  }
})
export default class App extends Vue {
}
</script>
