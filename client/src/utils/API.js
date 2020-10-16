import axios from "axios";

export default {
    createUser: function(userData){
        return axios.post("/api/signup", userData)
    } 
}