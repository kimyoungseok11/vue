<template>
    <div class="navigation">
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Smart Sensor
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
                <v-list-item>
                    <v-list-item-icon>
                        <font-awesome-icon icon="bars" width="30px" height="30px"></font-awesome-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        Monitering
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <font-awesome-icon icon="bars" width="30px" height="30px"></font-awesome-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        Error
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <font-awesome-icon icon="bars" width="30px" height="30px"></font-awesome-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        Statistics
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'SmartsensorMenunav',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    .v-navigation-drawer{
        position: absolute;
        top:0; left:-40%;
        z-index: 99;
    }
</style>
