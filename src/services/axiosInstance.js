import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:9091/',
    config: {
        headers: {
            'Content-Type':'application/json'
        }
    }
})