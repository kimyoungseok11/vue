<template>
    <div>
        <!-- <div v-for="data in fetchedAsk" :key="data">{{data.title}}</div> -->
        <p v-for="data in fetchedAsk" :key="data">
            <router-link :to="`/item/${data.id}`">{{data.title}}</router-link>
            <small> {{data.time_ago}}, {{data.user}}</small>
        </p>
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