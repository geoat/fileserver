<template>
    <v-container class="px-5">
      <v-row class="text-left">
        <v-col cols="12">
            <h2>Upload File</h2>
            <div>
              <v-layout>
                  <v-file-input
                    outlined
                    dense
                    show-size
                    truncate-length="30"
                    v-model="chosenFile"></v-file-input>
                  <v-btn text @click="resetPublish()">Test</v-btn>
              </v-layout>
            </div>
        </v-col>
      </v-row>
      <FileBrowser/>
    </v-container>
  </template>
  
  <script>
    import FilesService from '../services/FilesService'
    import FileBrowser from '../components/FileBrowser';

    export default {
      components: { FileBrowser },
      name: 'LandingPage',
      
      data: () => ({
       chosenFile: null,
      }),
      methods: {
        resetPublish: function () {
          FilesService.test()
        },
      },
    }
  </script>
  