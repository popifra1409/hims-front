
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import BatimentService from "../../../service/BatimentService";
import { categorieColumns } from "../../../pages/gestionproduitressource/categoriedatatable/CategorieDatatableSource";
import React from 'react'
import { Link, useParams } from "react-router-dom"


const CategorieDatatable = () => {
  const {idBatiment} = useParams()
  const [rows, setCategories] = useState([]);
  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
          
          <Link to={`/ListCategorie/Single/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div 
            >
              <button className="deleteButton"  onClick={()=>deleteBatiment(params.id)}> Delete </button>
            </div>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const response = await BatimentService.getBatiments();
    setCategories(response.data.data);
   
    
  };

  const deleteBatiment = async (idBatiment) =>{
    await BatimentService.deleteBatiments(idBatiment);
    loadCategories();
    
  }
  return (
    
   
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/ListCategorie/NewFamille" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={categorieColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default CategorieDatatable

