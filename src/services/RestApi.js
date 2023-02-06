import http from "./axiosInstance";

class RestApi {

    // Lister tout les patients
    getAllPatients = () => {
        return http.get('/hims/patients')
    }

    // créer un nouveau patient
    savePatient = (patient) => {
        return http.post('/hims/patients/save',patient)
    }
}

export default RestApi
