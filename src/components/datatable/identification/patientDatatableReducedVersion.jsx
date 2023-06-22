import "../../datatable/datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { patientColumnsReducedVersion } from "../../../pages/identification/patient/PatientTableSourceReducedVersion";
import PatientAPI from "../../../services/identification/patientAPI";
import { Card, CardContent, Grid, Button, makeStyles, Typography, Input } from '@material-ui/core';


const PatientDatatableReducedVersion = () => {
  const [pageSize, setPageSize] = useState(10);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    PatientAPI.getPatients().then((res) => {
      setPatients(res.data.data);
    });
    setLoading(false);
  }, []);


  const actionColumn = [
    {
      field: "action",
      headerName: "ACTIONS",
      width: 195,
      renderCell: (params) => {
        return (
          <div className="cellAction">

            <Link to={`/identification/patients/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            {
              
                <div>
                  <Button className="addToGroupButton" variant="contained" color="secondary" size="small"> Add to Group </Button>
                </div>
              
            }
          </div>
        );
      },
    },
  ];


  return (

    <div className="datatable">
      
      <DataGrid
        className="datagrid"
        rows={patients}
        columns={patientColumnsReducedVersion.concat(actionColumn)}
        loading={loading}
        getRowId={(rows) => rows.patientId}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        components={{
          Toolbar: GridToolbar,
        }}
        checkboxSelection
      />
    </div>
  )
}

export default PatientDatatableReducedVersion

