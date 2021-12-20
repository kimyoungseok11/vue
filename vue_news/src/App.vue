<template>
    <div>
        <comp-header></comp-header>
        <router-view></router-view>
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
</style>