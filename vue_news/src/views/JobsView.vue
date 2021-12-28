<template>
    <div>
        <div v-for="data in this.$store.state.jobs" :key="data">{{data.title}}</div>
    </div>
</template>

<script>

export default {
    name: 'VueNewsAskview',

    data() {
        return {
            
        };
    },
    created(){
        this.$store.dispatch('FETCH_JOBS')
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>