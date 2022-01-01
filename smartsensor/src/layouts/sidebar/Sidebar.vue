<template>
  <v-navigation-drawer
    v-model="Sidebar_drawer"
    :dark="SidebarColor !== 'white'"
    :color="SidebarColor"
    mobile-break-point="960"
    app
    id="main-sidebar"
  >
    <v-list dense nav>
      <!---USer Area -->
      <v-list-item two-line class="px-0">
        <v-list-item-content>
          <v-list-item-subtitle class="caption">Smart Sensor</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-icon 
          style="position:absolute; right:0px"
          @click="$vuetify.breakpoint ? setSidebarDrawer(!Sidebar_drawer) : $emit('input', !value)"
          >
          mdi-close
          </v-icon>
        </v-list-item-content>
      </v-list-item>
      <!---USer Area -->
      <!---Sidebar Items -->
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        :active-class="`success white--text`"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
          <!-- <font-awesome-icon :icon="item.icon" style="width:20px"></font-awesome-icon> -->
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!---Sidebar Items -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Sidebar",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: [
      {
        title: "실시간 모니터링",
        // icon: "mdi-view-dashboard",
        icon: "mdi-monitor",
        to: "/dashboard/basic-dashboard"
      },

      {
        title: "미세먼지 지표",
        // icon: "mdi-account-circle",
        icon: "mdi-alert-circle",
        to: "/pages/profile"
      },

      {
        title: "항목 별 통계",
        // icon: "mdi-alert",
        icon: "mdi-chart-areaspline-variant",
        to: "/pages/alerts"
      },
    ]
  }),
  computed: {
    ...mapState(["SidebarColor", "SidebarBg"]),
    Sidebar_drawer: {
      get() {
        return this.$store.state.Sidebar_drawer;
      },
      set(val) {
        this.$store.commit("SET_SIDEBAR_DRAWER", val);
      },
      ...mapState(["Sidebar_drawer"])
    }
  },
  watch: {
    "$vuetify.breakpoint.smAndDown"(val) {
      this.$emit("update:expandOnHover", !val);
    }
  },

  methods: {
    ...mapMutations({
      setSidebarDrawer: "SET_SIDEBAR_DRAWER"
    })
  }
};
</script>
<style lang="scss">
#main-sidebar{
  box-shadow:1px 0 20px rgba(0,0,0,.08);
  -webkit-box-shadow:1px 0 20px rgba(0,0,0,.08);
  .v-navigation-drawer__border{
    display: none;
  }
  .v-list{
    padding: 8px 15px;
  }
  .v-list-item{
      &__icon--text,
      &__icon:first-child{
        justify-content: center;
        text-align: center;
        width: 20px;
        
    } 
  }    
}
</style>