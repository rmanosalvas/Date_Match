import axios from "axios";

export default {
    getUsers: function() {
        return axios.get("/api/user")
    },
    getUser: function(id) {
        return axios.get("/api/user" + id)
    },
    createUser: function(userData){
        return axios.post("/api/user", userData)
    },
    userLogin: function(userData){
        console.log("CLIENT - LOGIN")
        return axios.post("/api/login", userData)
    },
    createDate: function(dateData){
        return axios.post("/api/dates", dateData)
    },
    recover: function(accountInfo){
        return axios.put("/api/user/recover", accountInfo)
    },
    logout: function(){
        return axios.get("/logout")
    }
    
}