import axios from "axios";

export default {
    // USER REQUESTS 
    userLogin: function(userData){
        console.log("CLIENT - LOGIN")
        return axios.post("/api/login", userData)
    },
    logMeOut: function(){
        return axios.get("/logout")
    },
    isLoggedIn:function(){
        console.log("LOG IN?")
        return axios.get("/dashboard")
    },
    getAllUsers: function() {
        console.log("Client - AllUsers")
        return axios.get("/api/allusers")
    },
    getRandomUsers: function(){
        return axios.get("https://randomuser.me/api/?results=50&nat=us")
    },
    getOneUser: function(id) {
        return axios.get("/api/user/" + id)
    },
    getProfileInfo: function() {
        return axios.get("/api/profile")
    },
    updateProfileInfo: function(form) {
        console.log("Client - updating user")
        return axios.put("/api/user/" + form.id, form)
    },
    createUser: function(){
        return axios.post("/api/user")
    },
    // DATE REQUESTS
    getDates: function(){
        console.log("CLIENT - getting dates")
        return axios.get("/api/dates")
    },
    createDate: function(dateData){
        console.log("CLIENT - Posting Date")
        return axios.post("/api/dates", dateData)
    },
    deleteDate: function(id){
        console.log("CLIENT - deleting Date")
        return axios.delete("/api/dates/" + id)
    },
    
    // Matches
    newMatch: function(matchData){
        console.log("CLIENT - creating new match")
        return axios.get("/api/match", matchData)
    },
    getMatches: function(){
        console.log("CLIENT - getting matches")
        console.log()
        return axios.get("/api/match")
    },
    deleteMatch: function(id){
        console.log("CLIENT - deleting match")
        return axios.delete("/api/matches/" + id)
    },

    recover: function(accountInfo){
        return axios.put("/api/user/recover", accountInfo)
    },

    
}