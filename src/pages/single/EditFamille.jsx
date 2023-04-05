import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//import Chart from "../../components/chart/Chart";
//import List from "../../components/table/Table";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import React from 'react'
import BatimentService from "../../service/BatimentService";

const EditFamille = () => {

   
    const {idBatiment} = useParams()
    let navigate = useNavigate()
    
    const [batiments, setBatiments] = useState({description:"", libelle:""});
    const {description, libelle} = batiments;
    
    const onInputChange = (e) => {
      setBatiments({...batiments, [e.target.name]: e.target.value});
  };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           
          await BatimentService.putBatiments(idBatiment,batiments).then((response)=>{
            console.log(response.data.data);
            navigate("/ListCategorie");
          })

            //console.log(response.data);
            // You can add a success message or redirect the user to another page here.
        } catch (error) {
            console.error(error);
            // You can add an error message here.
        }
    };
   
      
      useEffect(() => {
       BatimentService.getBatimentsById(idBatiment).then((res)=>{
        let bat = res.data.data
        setBatiments({description:bat.description, libelle:bat.libelle});
          });
      }, []); 
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />

                <br></br>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">description:</label>
                    <input type="text" name="description"  value={description} onChange={(e)=>onInputChange(e)} />

                    <label htmlFor="email">Libelle</label>

         
                        <input type="text" name="libelle" value={libelle} onChange={(e)=>onInputChange(e)}  />
                        


                    <button type="submit">Modifier</button>
                </form>
            </div>



        </div>
    )
}

export default EditFamille
