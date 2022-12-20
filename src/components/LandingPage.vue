<template>
    <v-container>
      <v-row class="text-left">
        <v-col cols="12">
            <div>Upload File</div>
            <v-file-input
              outlined
              dense
              show-size
              truncate-length="30"
              v-model="chosenFile"></v-file-input>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'LandingPage',
  
      data: () => ({
       chosenFile: null,
      }),
    }
  </script>
  