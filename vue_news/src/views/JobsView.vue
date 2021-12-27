<template>
    <div>
        <div v-for="data in jobs" :key="data">{{data.title}}</div>
    </div>
</template>

<script>
import { fetchJobsList } from '../api/api.js'

export default {
    name: 'VueNewsAskview',

    data() {
        return {
            jobs:[],
        };
    },
    created(){
        fetchJobsList()
        .then(response => this.jobs = response.data)
        .catch(error => console.log(error))
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>