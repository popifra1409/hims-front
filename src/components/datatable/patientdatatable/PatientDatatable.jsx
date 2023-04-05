
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import PatientService  from "../../../service/PatientService";
import { patientColumns } from "../../../pages/gestionproduitressource/patientdatatable/PatientDatatableSource";
import React from 'react'
import { Link} from "react-router-dom"


const PatientDatatable = () => {
  
  const [rows, setPatients] = useState([]);
  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
          
          <Link to={`/ListPatients/SinglePatient/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div 
            >
              <button className="deleteButton"  > Delete </button>
            </div>
          </div>
        );
      },
    },
  ];

  useEffect(()=>{
    loadPatients();
  }, []);

  const loadPatients = async () => {
    await PatientService.getPatients().then((response)=>{
        setPatients(response.data.data);
    });
   
  }

 
  return (
    
    <div className="datatable">
      <div className="datatableTitle">
        Ajouter un nouveau Patient
        <Link to="/ListPatients/AddPatients" className="link">
          Nouveau
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        getRowId={(rows) => rows.patientId}
        rows={rows}
        columns={patientColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default PatientDatatable

