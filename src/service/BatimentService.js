import axios from "axios";

const Batiment_API_BASE_URL = "http://localhost:9091/hims/batiment";

class BatimentService {
    getBatiments = async() =>{
        return await axios.get(Batiment_API_BASE_URL  + "/all");
    };
     getBatimentsById = async (idBatiment) =>{
        return await  axios.get(Batiment_API_BASE_URL +  "/" + idBatiment);};

    postBatiments = async(batiment) =>{
        return await axios.post(Batiment_API_BASE_URL, batiment)
    };

    putBatiments = async ( idBatiment, batiment)=>{
        return await axios.put(Batiment_API_BASE_URL + "/update/" + idBatiment, batiment);
    };

    deleteBatiments = async(idBatiment)=>{
        return await axios.delete(Batiment_API_BASE_URL + "/delete/" + idBatiment);
    };
  
}
export default new BatimentService()