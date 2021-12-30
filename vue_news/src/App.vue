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
  *{
    margin:0;
    padding:0
  }
  .page-enter-active, .page-leave-active {
  transition: opacity .5s;
  }
  .page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>