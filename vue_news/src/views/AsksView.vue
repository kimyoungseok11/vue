<template>
    <div>
        <div v-for="data in fetchedAsk" :key="data">{{data.title}}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import { mapState } from 'vuex';

export default {
    name: 'VueNewsAskview',
    computed:{
        ...mapGetters({
            fetchedAsk:'fetchedAsk'
        }),

        // 2
        // ...mapState({
        //     ask: state => state.asks
        // })

        // 1
        // ask(){
        //     return this.$store.state.ask;
        // }
    },
    created(){
        this.$store.dispatch('FETCH_ASKS');
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>