<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Folder Contents</v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="selected !== null">
        <v-btn icon>
          <v-icon>mdi-rename</v-icon>
        </v-btn>
        <v-btn icon v-if="selected && isFolder(selected)">
          <v-icon>mdi-folder-arrow-right</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-download</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    <v-card class="mx-auto" color="grey lighten-4">
      <v-card-text>
        <v-list
          subheader
          two-line
          color="grey lighten-4"
          >
          <v-list-item-group
            v-model="selected">
            <v-list-item
              v-for="(content, i) in contents"
              :key="i"
              :value="content"
            >
              <v-list-item-avatar>
                <v-icon v-if="content.isFolder"
                  class="grey lighten-1">
                  mdi-folder
                </v-icon>
                <v-icon v-else
                  class="grey lighten-1">
                  mdi-file
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-h6">{{content.name}}</v-list-item-title>
                <v-list-item-subtitle v-text="content.name"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import FilesService from '../services/FilesService'
  import {Type} from '../common/models/FileModel'

  export default {
    name: 'FileBrowser',
    data: () => ({
     chosenFile: null,
     contents: null,
     FolderType: Type.Folder,
     selected: null
    }),
    props: {
      path: String
    },
    methods: {
      resetPublish: function () {
        FilesService.test()
      },
      isFolder(content) {
        return content.type === Type.Folder
      }
    },
  mounted: function () {
    this.contents = FilesService.getFiles(this.path)
    .map((content) => {
      return {...content, isFolder: this.isFolder(content)}
    })
  }
  }
</script>