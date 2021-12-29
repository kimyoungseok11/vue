<template>
    <div>
        <!-- <div v-for="data in this.$store.state.news" :key="data">
            {{data.title}}
        </div> -->
        <p v-for="data in this.$store.state.news" :key="data">
            <a v-bind:href="data.url">{{data.title}}</a>
            <small> {{data.time_ago}} by {{data.user}}</small>
        </p>
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