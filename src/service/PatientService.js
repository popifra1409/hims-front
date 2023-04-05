import axios from "axios";

const Patient_API_BASE_URL = "http://localhost:9091/hims/patients";

class PatientService {
    getPatients = async() =>{
        return await axios.get(Patient_API_BASE_URL + "/all");
    };

    getPatientsById = async (idPatient) =>{
        return await  axios.get(Patient_API_BASE_URL +  "/" + idPatient);
    };

    postPatients = async(patient) =>{
        return await axios.post(Patient_API_BASE_URL + "/save",  patient);
    };
}

export default new PatientService()