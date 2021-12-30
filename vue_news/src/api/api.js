import axios from 'axios';

const config = {
    baseUrl:"https://api.hnpwa.com/v0/"
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchAsksList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`)
}

function fetchItemInfo(itemname){
    return axios.get(`${config.baseUrl}item/${itemname}.json`)
}


export{
    fetchItemInfo,
    fetchNewsList,
    fetchJobsList,
    fetchAsksList,
    fetchUserInfo,
}