<template>
  <v-app-bar app clipped-left clipped-right color="primary" dark>
    <v-app-bar-nav-icon
      class="d-block"
      @click="$vuetify.breakpoint ? setSidebarDrawer(!Sidebar_drawer) : $emit('input', !value)"
    />
    <v-spacer />
    <!---right part -->
  </v-app-bar>
</template>
<script>
// Utilities
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
  }),

  computed: {
    ...mapState(["Sidebar_drawer"])
  },

  methods: {
    ...mapMutations({
      setSidebarDrawer: "SET_SIDEBAR_DRAWER"
    })
  }
};
</script>