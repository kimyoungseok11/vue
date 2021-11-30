import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        dataCollection:{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                  label: 'Data One',
                  backgroundColor: '#f87979',
                  pointBackgroundColor: 'white',
                  borderWidth: 1,
                  pointBorderColor: '#249EBF',
                  //Data to be represented on y-axis
                  data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
                }
            ]
        },
    },
    mutations:{

    },
    actions:{
    },
})

export default store;