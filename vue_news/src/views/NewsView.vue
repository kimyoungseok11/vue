<template>
    <div>
        <div v-for="data in news" :key="data">{{data.title}}</div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/api.js'

export default {

    data() {
        return {
            news:[],
        };
    },
    created(){
        fetchNewsList()
        .then(response => this.news = response.data)
        .catch(error => console.log(error))
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>