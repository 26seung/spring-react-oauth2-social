import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const join = (username, email, password) => {
    return axios.post(API_URL + "auth/join", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios.post(API_URL + "auth/login", {
        username,
        password,
    })
    .then((res) => {
        if(res.data.accessToken){
            localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
    });
}; 

const logout = () => {
    localStorage.removeItem("user");
};

/*const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};*/




export default {
    join,
    login,
    logout,
  };