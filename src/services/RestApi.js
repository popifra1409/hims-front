import http from "./axiosInstance";

class RestApi {

    // get all students
    getAllPatients = () => {
        return http.get('hims/patients')
    }
}

export default RestApi
