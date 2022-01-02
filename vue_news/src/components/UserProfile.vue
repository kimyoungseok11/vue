<template>
    <div>
        <div class="user-container">
            <div>
                <font-awesome-icon :icon="['fas','user']"></font-awesome-icon>
            </div>
            <div class="user-description">
                <slot name="username">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
                <div class="time">
                    <slot name="time">
                        <!-- 상위 컴포넌트에서 정의할 영역 -->
                    </slot>
                </div>
                <slot name="karma">
                    <!-- 상위 컴포넌트에서 정의할 영역 -->
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueNewsUserprofile',

    data() {
        return {
            
        };
    },

    props:{
        info:Object,
    },

    // computed:{
    //     userInfo(){
    //         return this.$store.state.user;
    //     }
    // },

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