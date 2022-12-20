<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>File Server</h1>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <LandingPage/>
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from './components/LandingPage';

export default {
  name: 'App',

  components: {
    LandingPage,
  },

  data: () => ({
    //
  }),
};
</script>
