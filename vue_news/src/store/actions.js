import { fetchUserInfo, fetchItemInfo, fetchList } from '../api/api.js'

export default{
    // FETCH_NEWS(context){
    //     fetchNewsList()
    //     .then(response => {
    //         context.commit('SET_NEWS', response.data);
    //         return response;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    // FETCH_JOBS(context){
    //     fetchJobsList()
    //     .then(response => {
    //         context.commit('SET_JOBS', response.data);
    //         return response;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    // FETCH_ASKS(context){
    //     fetchAsksList()
    //     .then(response => {
    //         context.commit('SET_ASKS', response.data);
    //         return response;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    FETCH_USER(context, name){
        fetchUserInfo(name)
        .then(response => {
            console.log(response.data);
            context.commit('SET_USER', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ITEM(context,item){
        fetchItemInfo(item)
        .then(response => {
            console.log(response.data);
            context.commit('SET_ITEM',response.data)
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_LIST({commit},pageName){
        fetchList(pageName)
        .then(({data}) => commit('SET_LIST',data))
        .catch(error => console.log(error));
    }
}