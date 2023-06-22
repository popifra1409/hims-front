import "../../new/new.scss";
import "../../../style/dark.scss"
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import React, { useState } from "react";
import { Card, CardContent, Grid, Button, makeStyles, Typography, Input } from '@material-ui/core';
import { Form, Formik, Field, FieldArray } from 'formik';
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import * as Yup from "yup";
import moment from "moment";
import TextField from "../../../components/FormsUI/Textfield";
/* import { TextField } from "@material-ui/core"; */
import Select from "../../../components/FormsUI/Select";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { patientColumns } from "../../../pages/identification/patient/PatientTableSource";
import PatientAPI from "../../../services/identification/patientAPI";
import PatientDatatableReducedVersion from "../../../components/datatable/identification/patientDatatableReducedVersion";

const useStyles = makeStyles(theme => (
    {
        errorColor: {
            color: theme.palette.error.main
        },
        strech: {
            flexGrow: 2
        },
        text: {
            color: theme.palette.primary.main
        }
    }
));

const NewGroupePatient = ({ title }) => {

    const classes = useStyles();

    //Etat initial du formulaire (Champs de base)
    const INITIAL_FORM_STATE = {
        nom_groupe: "",
        motif: "",
        patient: []
    };

    //Validation du formulaire
    const FORM_VALIDATION = Yup.object().shape( {
        nom_groupe: Yup.string().required("Veuillez attribuer un nom au groupe s'il vous plait!").min(3, 
            'Le nom du groupe doit contenir au moins 3 caractères'),
        motif: Yup.string().required("Renseignez un motif s'il vous plaît").min(25, 'Entrez au moins 25 caractères')
    });

    const handleSubmit = (values) => {
        //Handle form submission if needed
    };

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <div>
                    <Navbar />
                </div>
                <div className="top">
                    <h1 style={{color: "dodgerblue", fontSize: "45px"}}>{title}</h1>
                </div>

                <div className="bottom">
                    <Card>
                        <CardContent>
                            <Formik
                                initialValues={{ ...INITIAL_FORM_STATE}}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={async(values) => {
                                    console.log('Données:', values)
                                    return new Promise(res=> setTimeout(res, 3000));
                                }}
                            >

                                {({values, errors, isSubmitting, handleChange}) => (
                                    <Form autoComplete="off">
                                        <Grid container spacing={5}>
                                            <Grid item xs={20}>
                                                <Typography variant="outline" className={classes.text}>
                                                    <h3 style={{fontSize: "25px"}}>Informations du groupe</h3>
                                                    <br></br>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Box>
                                            <div>
                                                <p style={{
                                                    width: "42em",

                                                }}>
                                                    <TextField 
                                                        required
                                                        id="outlined-required"
                                                        name="GroupeName"
                                                        label="Nom du groupe"
                                                    />
                                                </p>
                                                <br>
                                                </br>
                                                <p>
                                                    <TextField 
                                                        required
                                                        id="outlined-required"
                                                        name="Groupemotif"
                                                        label="Motif de création"
                                                    />
                                                </p>
                                            </div>
                                        </Box>

                                        <Grid container spacing={5}>
                                            <Grid item xs={20}>
                                                <Typography variant="outline" className={classes.text}>
                                                    <br />
                                                    <h3>Membres du groupe</h3>
                                                    <br></br>
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Box>
                                            <div>
                                                <div>
                                                <p style={{
                                                    position: "relative",
                                                    top: "-52px",
                                                    left: "350px",

                                                }}>
                                                    <input type="text" name="findingUser" placeholder="Rechercher un patient...." 
                                                    style={{width: "312px", height: "30px", fontSize: "18px", borderRadius: "20px", textAlign: "center", border: "0.1px solid dodgerblue"}}/>
                                                </p>

                                                <p>
                                                    <Typography variant="outline" className={classes.text}>
                                                        <h4 style={{position: "relative", right: "-492px"}}>Collection D'utilisateurs</h4>
                                                    </Typography>

                                                    <div style={{height: "300px", width: "670px", border: "0.3px solid dodgerblue"}}>

                                                    </div>
                                                    <br />
                                                    <Link to="/identification/groupePatients/newgroupepatient"  className="link">
                                                        
                                                        <Stack direction ="row" spacing={1}>
                                                            <Button variant="contained" color="primary" style={{width: "230px", position: "relative", right: "-442px"}}><h4 style={{}}>Créer</h4></Button>
                                                        </Stack>
                                                    </Link>
                                                </p>
                                                </div>
                                            </div>
                                        </Box>
                                    </Form>

                                )}

                            </Formik>
                        </CardContent>
                    </Card>

                    <Card style={{position: "relative", left: "20px", width: "850px"}}>
                        <CardContent>
                            <Grid container spacing={5} style={{position: "relative", left: "580px"}}>
                                <Grid item xs={20} >
                                    <Typography variant="outline" className={classes.text}>
                                        <h3>Selectionnez des patients</h3>
                                        <br></br>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <PatientDatatableReducedVersion />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}


export default NewGroupePatient;