<template>
  <div class="border" id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/">{{ home[this.$root.lang] }}</b-nav-item>
          <b-nav-item to="/schema">{{ schema[this.$root.lang] }}</b-nav-item>
          <b-nav-item to="/transport">{{ transport[this.$root.lang] }}</b-nav-item>
          <b-nav-item to="/food">{{ food[this.$root.lang] }}</b-nav-item>
          <b-nav-item to="/accomodation">{{ accomodation[this.$root.lang] }}</b-nav-item>
          <b-nav-item to="/dresscode">{{ dresscode[this.$root.lang] }}</b-nav-item>
          <b-nav-item to="/contact">{{ contact[this.$root.lang] }}</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item v-on:click="this.$root.setLangSv">SV</b-dropdown-item>
            <b-dropdown-item v-on:click="this.$root.setLangEn">EN</b-dropdown-item>
            <b-dropdown-item v-on:click="this.$root.setLangJp">JP</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-nav-text><b>{{ this.$root.lang }}</b></b-nav-text>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      home: {
        SV: 'Hem',
        EN: 'Home',
        JP: 'ホーム'
      },
      schema: {
        SV: 'Schema',
        EN: 'Schedule',
        JP: 'スケジュール'
      },
      transport: {
        SV: 'Transport',
        EN: 'Transport',
        JP: '交通'
      },
      food: {
        SV: 'Dryck och Allergi',
        EN: 'Food and Allergies',
        JP: '飲み物・アレルギー'
      },
      accomodation: {
        SV: 'Boende',
        EN: 'Accomodation',
        JP: '宿泊'
      },
      dresscode: {
        SV: 'Dresscode',
        EN: 'Dresscode',
        JP: '服装規定'
      },
      contact: {
        SV: 'Kontakt',
        EN: 'Contact',
        JP: 'コンタクト'
      }
    }
  }
}
</script>

<style>
#app {
  font-family:helvetica;
  padding:0px;
}

a {
  color:#336699;
}

h1 {
  padding-top: 0.75em;
  padding-bottom: 0.75em;
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
