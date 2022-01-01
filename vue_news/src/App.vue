<template>
    <div>
        <comp-header></comp-header>
        <transition name='page'>
          <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue'

export default {
    name: 'VueNewsHeader',
    components:{
      CompHeader
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style>
  body{
    margin:0;
    padding:0
  }
  .page-enter-active, .page-leave-active {
  transition: opacity .5s;
  }
  a{
    color:#34495e;
    text-decoration: none;
  }
  a:hover{
    color:#42b883;
    text-decoration: underline;
  }
  a.router-link-exact-active{
    text-decoration: underline;
  }
  .page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>