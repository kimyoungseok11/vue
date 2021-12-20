<template>
    <div class="header">
        <router-link to="/news">news</router-link>
        <router-link to="/asks">asks</router-link>
        <router-link to="/jobs">jobs</router-link>
    </div>
</template>

<script>
export default {
    name: 'VueNewsHeader',

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

<style scoped>
    .header{
        width:100%;
        height:40px;
        background-color: rgb(0, 216, 144);
        padding:0 5px;
        display: flex;
        align-items: center;
    }
    a{
        padding:2px;
        text-decoration: none;
        font-weight: 400;
        color:black
    }
    .router-link-exact-active{
        color:blue;
        text-decoration: underline;
    }
</style>