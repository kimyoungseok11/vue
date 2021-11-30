<script>
  //Importing Line class from the vue-chartjs wrapper
  import {Line, mixins} from 'vue-chartjs'
  const {reactiveProp} = mixins
  //Exporting this so it can be used in other components
  export default { 
    extends: Line,
    mixins:[reactiveProp],
    props:{
        options:Object,
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.chartData, this.options)
    }
  }
</script>
