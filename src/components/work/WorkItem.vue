<template>
  <v-container id="grid" fluid grid-list-sm tag="section">
    <v-layout row wrap>
      <v-flex tag="h1" class="headline">Lorem Ipsum</v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text>
                <v-layout row>
                  <v-flex xs1>
                    <span>Description</span>
                  </v-flex>
                  <v-flex xs11>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat}</span>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card flat>
              <v-card-text>
                <v-layout row>
                  <v-flex xs1>
                    <span>User</span>
                  </v-flex>
                  <v-flex xs11>
                    <span>Richard</span>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>