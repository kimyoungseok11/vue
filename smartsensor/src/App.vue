<template>
  <v-app>
    <smart-header></smart-header>
    <menu-nav></menu-nav>
    <router-view></router-view>
  </v-app>
</template>

<script>
import SmartHeader from './components/SmartHeader.vue'
import MenuNav from './components/MenuNav.vue'

export default {
  name: 'App',

  components: {
    SmartHeader,
    MenuNav,
  },

  data() {
    return {
            
    };
  },
};
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  body{
    padding-top:60px;
  }
</style>