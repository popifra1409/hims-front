import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//import Chart from "../../components/chart/Chart";
//import List from "../../components/table/Table";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import React from 'react'
import BatimentService from "../../service/BatimentService";

const NewFamille = () => {

    let navigate = useNavigate()
    const [description, setDescription] = useState("");
    const [libelle, setLibelle] = useState("");

 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        let batiment = {description, libelle};
       await BatimentService.postBatiments(batiment)
        //console.log('batiments =>'+ JSON.stringify(batiments));
            navigate("/ListCategorie");
            // You can add a success message or redirect the user to another page here.
        } catch (error) {
            console.error(error);
            // You can add an error message here.
        }
    };

    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />

                <br></br>
                <form onSubmit={handleSubmit}>
                    <label >description:</label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />

                    <label >Libelle</label>
                    <input type="text" name="libelle" value={libelle} onChange={(e) => setLibelle(e.target.value)} />

                    <button type="submit">save</button>
                </form>
            </div>



        </div>
    )
}

export default NewFamille
