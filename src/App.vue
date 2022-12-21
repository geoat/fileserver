<template>
  <v-app id="app">
      <v-app-bar
        app
        color="primary"
        dark
        >
        <div class="text-center">
          <h1>File Server</h1>
        </div>
    </v-app-bar>
    <LandingPage/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import LandingPage from './components/LandingPage.vue';

@Component({
  components: {
    HelloWorld,
    LandingPage,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin-top: 60px;
}

</style>
