import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../oauth2/OAuth';


const request = async (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    const response = await fetch(options.url, options);
    const json = await response.json();
    if (!response.ok) {
        return Promise.reject(json);
    }
    return json;
};

const getCurrentUser = () => {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/api/user/google",
        method: 'GET'
    });
}

// const login = (username, password) => {
//     return request({
//         url: API_BASE_URL + "/api/auth/login",
//         method: 'POST',
//         body: JSON.stringify(username, password)
//     });
// }

const login = (username, password) => {
    return axios.post(API_BASE_URL + "/api/auth/login", {
        username,
        password,
    })
    .then((res) => {
        if(res.data.accessToken){
            localStorage.setItem(ACCESS_TOKEN, JSON.stringify(res.data));
        }
        return res.data;
    });
}; 

const join = (username, email, password) => {
    return axios.post(API_BASE_URL + "/api/auth/join", {
        username,
        email,
        password,
    })
};

const getUserBoard = () => {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/api/user/user",
        method: 'GET'
    });
}

export default {
    getCurrentUser,
    login,
    join,
    getUserBoard,
}