<template>
  <div id="small">
    <component :is="type" v-bind:chart-data="this.$store.state.dataCollection"></component>
    <select v-model="type" class="type-select">
      <option v-for="type in ['LineChart','PieChart','BarChart']" :key="type" v-bind:value="type">{{type}}</option>
    </select>
    <button class="button is-primary" @click="fillData()">데이터 변경</button>
  </div>
</template>

<script>
import LineChart from './components/LineChart.vue'
import BarChart from './components/BarChart.vue'
import PieChart from './components/PieChart.vue'

export default {
  components:{
    LineChart,
    BarChart,
    PieChart,
  },
  data(){
    return{
      type:"LineChart",
    }
  },
  methods: {
    fillData() {
      this.$store.state.dataCollection = {
        // Data for the y-axis of the chart
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
        'September', 'October', 'November', 'December'],
        datasets: [
          {
            backgroundColor: '#f87969',
            // Data for the x-axis of the chart
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), 
            this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), 
            this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt() {
      // JS function to generate numbers to be used for the chart
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style>
  #small{
    max-width: 600px;
    margin:0 auto;
  }
</style>
