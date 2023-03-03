import http from "./axiosInstance";

class IdentificationResource {

    // Lister tout les patients
    getAllPatients = async () => {
        return await http.get('/hims/patients/all')
    }

    // getPatientById
    getPatientById = async (id) => {
        return await http.get(`/hims/patients/${id}`)
    }

    // créer un nouveau patient
    savePatient = async (patient) => {
        return await http.post('/hims/patients/save', patient)
    }

    // Modifier le patient
    updatePatient =  (id, newPatient) => {
        return  http.put(`/hims/patients/update/${id}`, newPatient)
    }

    // Supprimer un patient
    deletePatient = (id) => {
       return http.delete(`/hims/patients/delete/${id}`)
    }
}

export default IdentificationResource
