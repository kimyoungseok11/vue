<template>
    <div>
        <div v-for="data in this.$store.state.news" :key="data">{{data.title}}</div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            news:[],
        };
    },
    created(){
        this.$store.dispatch('FETCH_NEWS');
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>