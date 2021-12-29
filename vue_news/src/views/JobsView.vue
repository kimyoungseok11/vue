<template>
    <div>
        <!-- <div v-for="data in this.$store.state.jobs" :key="data">{{data.title}}</div> -->
        <p v-for="data in this.$store.state.jobs" :key="data">
            <a v-bind:href="data.url">{{data.title}}</a>
            <small> {{data.time_ago}}, {{data.domain}}</small>
        </p>
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