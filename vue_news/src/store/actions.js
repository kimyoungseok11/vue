import { fetchNewsList, fetchJobsList, fetchAsksList } from '../api/api.js'

export default{
    FETCH_NEWS(context){
        fetchNewsList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_JOBS(context){
        fetchJobsList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_JOBS', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ASKS(context){
        fetchAsksList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_ASKS', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}