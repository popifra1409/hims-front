import "../../datatable/datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { groupePatientColumns } from "../../../pages/identification/groupepatient/GroupePatientTableSource";
import GroupePatientAPI from "../../../services/identification/groupePatientAPI";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Add } from "@material-ui/icons";
import { More } from "@mui/icons-material";
import { Details } from "@mui/icons-material";
import { Card, CardContent, Grid, makeStyles, Typography, Input } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import Divider from '@mui/material/Divider';




const GroupePatientDatatable = () => {
  const [pageSize, setPageSize] = useState(10);
  const [groupepatients, setGroupePatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    GroupePatientAPI.getGroupePatients().then((res) => {
      setGroupePatients(res.data.data);
    });
    setLoading(false);
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "ACTIONS",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="cellAction">

            <Link to={`/identification/groupePatients/${params.id}`} style={{ textDecoration: "none" }}>
              <IconButton aria-label="details">
                <Details />
              </IconButton>
            </Link>
            <div
            >
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        );
      },
    },
  ];

  const secondActionColumn = [
    {
      renderCell: (params2) => {
        return(
          <div>
            <Link to={`/identification/patients/${params2.id}`} style={{ textDecoration: "none" }}>
              <Stack direction="row" spacing={2}>
                <IconButton aria-label="details">
                  <Details />
                </IconButton>
              </Stack>
            </Link>
          </div>
        )
      }
    }
  ];


  return (

    <div>
      <div className="datatable" style={{width: "720px", }}>
      
        <div className="datatableTitle">
            GROUPES DE PATIENTS
          <Link to="/identification/groupePatients/newgroupepatient"  className="link">
            <Stack direction = "row" spacing={1}>
              <IconButton aria-label="add">
                <Add color="primary"/>
              </IconButton>
            </Stack>
          </Link>
        </div>
      
        <DataGrid
          className="datagrid"
          rows={groupepatients}
          columns={groupePatientColumns.concat(actionColumn)}
          loading={loading}
          getRowId={(rows) => rows.id}
          rowsPerPageOptions={[5, 10, 20]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          components={{
            Toolbar: GridToolbar,
          }}
          checkboxSelection
        />
      </div>
    
      <div className="groupHistory" style={{position: "absolute", right: "20px", width: "850px", top: "135px"}}>
        <Card>
          <Typography variant="outline" color="primary">
              <h3 style={{fontSize: "25px", position: "absolute", right: "0", padding: "10px"}}>Historique</h3>
          </Typography>
          <CardContent>
            <Typography variant="contained">
              <br />
              <h4 style={{textDecoration:"underline", color:"dodgerblue"}}>
                Patients récemment ajoutés
              </h4>
              <List sx={{width:"100%", bgcolor:"background.paper"}}>
                {[1,2,3,4,5].map((value) => (
                  <ListItem
                    key={value}
                    disableGutters
                    secondaryAction={
                      <IconButton aria-label={secondActionColumn}>
                        <More/>
                      </IconButton>
                    }
                    >
                      <ListItemText primary={`${value}) Patient`} />
                      <Divider variant="inset" component="li" />
                    </ListItem>
                    
                ))}
              </List>
              <br />
            </Typography>
            <hr color="dodgerblue"/>
            <Typography variant="contained" >
              <br />
              <h4 style={{textDecoration:"underline", color:"dodgerblue"}}>
                Déplacements récents
              </h4>
              <List sx={{width:"100%", bgcolor:"background.paper"}}>
                {[1,2,3,4,5].map((value) => (
                  <ListItem
                    >
                      <ListItemText primary={`${value}) `} />
                    </ListItem>
                ))}
              </List>
            </Typography>
          </CardContent>
        </Card>
      </div>
    
    </div>
  )
}

export default GroupePatientDatatable

