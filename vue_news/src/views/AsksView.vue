<template>
    <div>
        <div v-for="data in asks" :key="data">{{data.title}}</div>
    </div>
</template>

<script>
import { fetchAsksList } from '../api/api.js'

export default {
    name: 'VueNewsAskview',

    data() {
        return {
            asks:[],
        }; 
    },
    created(){
        fetchAsksList()
        .then(response => {
            console.log(response);
            this.asks = response.data
        })
        .catch(error => console.log(error))
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>