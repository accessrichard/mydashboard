<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex text-xs-center fill-height>
        <div class="home">
          <img alt="Vue logo" src="../../assets/logo.png">
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
