import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "../../service/BatimentService"

import React from 'react'

const Famille = () => {
  const [rows, setRows] = useState([]);
  const columns = [
    {

      field: 'id', headerName: 'ID', width: 70
    },

    {
      field: 'description', headerName: 'Description', width: 280
    },


    {
      field: 'nomFamille', headerName: 'Libelle', width: 130
    },



  ];
  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    loadFamilles();
  }, []);

  const loadFamilles = async () => {
    const result = await axios.get("/hims/famille/all");
    setRows(result.data.data);
  };
  return (
    <div >
      <Sidebar />
      <div >
        <Navbar />
      </div>
      <div style={{ marginTop: '10px' }}>
        <h1>Bienvenue</h1>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid className="datagrid" rows={rows} columns={columns.concat(actionColumn)} pageSize={10} rowsPerPageOptions={[10]} />
        </div>
      </div>
    </div>

  )
}

export default Famille
