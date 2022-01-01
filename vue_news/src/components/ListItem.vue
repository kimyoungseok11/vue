<template>
    <div>
        <ul class="news-list">
            <li v-for="data in listItems" :key="data" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{data.points || 0}}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <!-- 타이틀 영역 -->
                    <p class="news-title">
                        <template v-if="data.domain">
                            <a v-bind:href="data.url">
                                {{data.title}}
                            </a>
                        </template>
                        <template v-else>
                            <router-link :to="`item/${data.id}`">
                                {{data.title}}
                            </router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{data.time_ago}} by
                        <router-link 
                        v-if="data.user"
                        :to="`/user/${data.user}`">
                            {{data.user}}
                        </router-link>
                        <a :href="data.url" v-else>
                            {{data.url}}
                        </a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'VueNewsListitem',
    data() {
        return {
            
        };
    },

    created(){
        const name = this.$route.name;
        if(name === "news"){
            this.$store.dispatch('FETCH_NEWS');
        }
        else if(name === "jobs"){
            this.$store.dispatch('FETCH_JOBS');
        }
        else if(name === "asks"){
            this.$store.dispatch('FETCH_ASKS')
        }
    },

    computed:{
        listItems(){
            const name = this.$route.name;
            if(name === "news"){
                return this.$store.state.news;
            }
            else if(name === "jobs"){
                return this.$store.state.jobs;
            }
            else{
                return this.$store.state.asks;
            }
        }
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.news-list{
    margin:0;
    padding:0;
}
.post{
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom:1px solid #eee
}
.points{
    display: flex;
    align-items: center;
    width:80px;
    height:60px;
    justify-content: center;
    color:#41b883
}
.news-title{
    margin:0;
}
.link-text{
    color:#828282
}
</style>