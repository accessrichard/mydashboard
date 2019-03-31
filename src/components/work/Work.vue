<template>
  <v-expansion-panel>
    <v-expansion-panel-content expand v-for="(item,i) in 5" :key="i">
      <template v-slot:header>
        <v-container>
          <v-layout row>
            <v-flex xs1>
              <span>
                <router-link to="/work/1">
                  <a>ID</a>
                </router-link>
              </span>
            </v-flex>
            <v-flex xs2>
              <span>Type</span>
            </v-flex>
            <v-flex xs2>
              <span>Status</span>
            </v-flex>
            <v-flex xs2>
              <span>User</span>
            </v-flex>
            <v-flex xs5>
              <span>Title</span>
            </v-flex>
          </v-layout>
        </v-container>
      </template>
      <v-card>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>