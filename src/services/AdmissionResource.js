import http from "./axiosInstance";

class AdmissionResource {

    /*** Batiment  ***/

    // listBatiments
    getBatiments = async () => {
        return await http.get('/hims/batiment/all')
    }


    /*** Chambre ***/
    
    // listChambres
    getChambres = async () => {
        return await http.get('/hims/chambre/all')
    }


    /*** Lit  ***/

    // listLits
    getLits = async () =>{
        return await http.get('/hims/lit/all')
    }

}

export default AdmissionResource