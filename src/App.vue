<template>
  <div class="border" id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#/">Hem</b-nav-item>
          <b-nav-item href="#/schema">Schema</b-nav-item>
          <b-nav-item href="#/transport">Transport</b-nav-item>
          <b-nav-item href="#/food">Dryck och allergi</b-nav-item>
          <b-nav-item href="#/accomodation">Boende</b-nav-item>
          <b-nav-item href="#/dresscode">Dresscode</b-nav-item>
          <b-nav-item href="#/contact">Kontakt</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<!-- // <script>
// export default {
//   name: 'App'
// }
// </script> -->

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
a {
  color:#336699;
}

body {
  font-family:helvetica;
  padding:0px;
}

h1 {
  font-size: 2em;
  text-align: center;
}

h2, h3 {
  font-size: 1.5em;
}

p {
  font-size: 1em;
}

.border {
  margin:0.75em auto 0.75em auto;
  overflow:hidden;
  max-width:1024px;
  background-color:white;
  box-shadow: 0px 0px 18px #888888;
}
</style>
