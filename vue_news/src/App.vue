<template>
    <div>
        <comp-header></comp-header>
        <transition name='page'>
          <router-view mode="out-in"></router-view>
        </transition>
        <spinner :loading="loadingStatus"></spinner>
    </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus.js'

export default {
    name: 'VueNewsHeader',
    components:{
      CompHeader,
      Spinner
    },
    data() {
      return {
        loadingStatus:false,
      }
    },
    created() {
      bus.$on('start:spinner',this.startSpinner);
      bus.$on('end:spinner',this.endSpinner);
    },
    beforeDestroy() {
      bus.$off('start:spinner',this.startSpinner);
      bus.$off('end:spinner',this.endSpinner);
    },
    mounted() {
        
    },

    methods: {
      startSpinner(){
        this.loadingStatus = true;
      },
      endSpinner(){
        this.loadingStatus = false;
      }
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