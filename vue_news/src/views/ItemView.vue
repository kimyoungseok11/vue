<template>
    <div>
        <section>
            <!-- 질문 상세 정보 -->
            <div class="user-container">
                <div>
                    <font-awesome-icon :icon="['fas','user']"></font-awesome-icon>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${itemInfo.user}`">
                        {{itemInfo.user}}
                    </router-link>
                    <div class="time">
                        {{itemInfo.time_ago}}
                    </div>
                </div>
            </div>
            <h2>{{itemInfo.title}}</h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <div>
                <p v-html="itemInfo.content"></p>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'VueNewsItemview',

    data() {
        return {
            
        };
    },
    computed:{
        itemInfo(){
            return this.$store.state.item;
        },
    },
    created(){
        const id = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',id);
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.user-container{
    display: flex;
    align-items: center;
    padding:0.5rem;
}
.fa-user{
    font-size: 2.5rem;
}
.user-description{
    padding-left: 8px;
}
.time{
    font-size:14px;
}
</style>