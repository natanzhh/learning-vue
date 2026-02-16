<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Meu Projeto</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/" router>Home</v-btn>
      <v-btn text to="/about" router>About</v-btn>
      <v-btn text to="/natan" router>Natan</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
