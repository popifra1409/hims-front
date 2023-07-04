import "../../new/new.scss";
import "../../../style/dark.scss";
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import React, {useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Card, CardContent, Grid, IconButton, Button, makeStyles, Typography } from '@material-ui/core';
import { Form, Formik, FieldArray, useFormikContext } from 'formik';
import { CircularProgress } from "@mui/material";
import * as Yup from "yup";
import TextFieldWrapper from "../../../components/FormsUI/Textfield";
import SelectWrapper from "../../../components/FormsUI/Select";
import RadioSelectWrapper from "../../../components/FormsUI/RadioButton";
import professions from '../../../static/professions.json';
import nations from '../../../static/pays.json';
import religions from '../../../static/religions.json';
import PatientAPI from "../../../services/identification/patientAPI";
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles(theme => (
    {
        errorColor: {
            color: theme.palette.error.main
        },
        strech: {
            flexGrow: 1
        },
        text: {
            color: theme.palette.info.main
        }
    }
));

const INITIAL_FORM_STATE = {
   
    adresse: "",
    email: "",
    patientAge: "",
    patientBarCode: "patient",
    patientBirthDay: "",
    patientLastName: "",
    patientFirstName: "",
    patientNationalite: "",
    patientPlaceOfBirth: "",
    patientProfession: "",
    patientReligion: "",
    patientSex: false,
    telephone: ""
};

const AGE_REGEX = /^(0|[1-9]\d*)$/

const FORM_VALIDATION = Yup.object().shape({
    patientLastName: Yup.string().required("Renseignez le nom du patient").min(3, 'Le nom du patient doit contenir au moins 3 caractères'),
    telephone: Yup.number().integer().typeError('Numéro de téléphone invalide').required('Renseignez un numéro de téléphone').min(9, 'Le numéro doit contenir au moins 9 chiffres'),
    patientSex: Yup.string().required("Renseignez le genre"),
    patientBirthDay: Yup.date().required("Renseignez la date de naissance"),
    patientAge: Yup.string().matches(AGE_REGEX, "L'âge doit être un nombre entier positif").required('Required'),
    patientProfession: Yup.string().required("Renseignez la profession"),
    email: Yup.string().email("E-mail invalide"),
});

//calculer l'age à partir de la date de naissance
const calculateAgeFromDate = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age.toString();
};

//evaluer la date de naissance à partir de l'age fournir
const calculateBirthdateFromAge = (age) => {
    const today = new Date();
    const birthDate = new Date(today.getFullYear() - age, today.getMonth(), today.getDate());
    return birthDate.toISOString().split("T")[0];
    
}; 


  
  

const UpdatePatient = ({ title }) => {
    const { patientid } = useParams();  
    let Navigate = useNavigate();

    const classes = useStyles();

    const [birthDate, setBirthdate] = useState("");
    const [age, setAge] = useState("");
  
    

    

    //options gender
    const genre = [
        { value: '0', label: 'Masculin' },
        { value: '1', label: 'Féminin' },
        { value: '2', label: 'Non précisé' },
    ];

    /*  const handleBirthdateChange = (value, setFieldValue) => {
         const age = calculateAgeFromDate(value);
         setFieldValue("patientAge", age.toString());
         setFieldValue("patientBirthDate", value);
     };
 
     const handleAgeChange = (value, setFieldValue) => {
         const birthDate = calculateBirthdateFromAge(value);
         setFieldValue("patientAge", value);
         setFieldValue("patientBirthDate", birthDate);
     };
  */
     const [patientData, setPatientData] = useState("");

     useEffect(() => {
        const fetchPatientData = async () => {
            try {
                
                const response = await PatientAPI.getPatientsById(patientid);
                const patient = response.data.data;
                setPatientData(patient);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchPatientData();
    }, [patientid]);
    

    
    const handleSubmit = async (values) => {
        await PatientAPI.updatePatient(patientid, values).then((response) => {
            console.log("Data" + response.data.data);
            Navigate("/identification/patients");
        });
    };
    

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <Card>
                        <CardContent>
                            <Formik
                                enableReinitialize
                                initialValues={{ ...INITIAL_FORM_STATE, ...patientData }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={handleSubmit}
                            >
                                {({ values, errors, isSubmitting, setFieldValue, handleSubmit }) => (
                                    <Form autoComplete="off" onSubmit={handleSubmit}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="overline" className={classes.text}>
                                                    Informations du patient
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4} className={classes.strech}>
                                                <TextFieldWrapper
                                                    name="patientFirstName"
                                                    label="Nom(s)"
                                                    value={values.patientFirstName || ''}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldWrapper
                                                    type="date"
                                                    name="patientBirthDay"
                                                    label="Date de naissance"
                                                    value={birthDate}
                                                    onChange={(event) => {
                                                        const selectedDate = new Date(event.target.value);
                                                        setBirthdate(selectedDate.toISOString().slice(0, 10));
                                                        setFieldValue('patientBirthDay', selectedDate.toISOString().slice(0, 10));
                                                        const calculatedAge = calculateAgeFromDate(selectedDate.toISOString().slice(0, 10))
                                                        setFieldValue('patientAge', calculatedAge)
                                                        setAge(calculatedAge)
                                                    }}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                                <TextFieldWrapper
                                                    type="number"
                                                    name="patientAge"
                                                    label="Age du patient"
                                                    value={age}
                                                    onChange={(event) => {
                                                        setAge(parseInt(event.target.value));
                                                        const birthDate = calculateBirthdateFromAge(event.target.value);
                                                        setFieldValue('patientAge', age.toString());
                                                        setFieldValue("patientBirthDate", birthDate);
                                                        setBirthdate(birthDate);
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <SelectWrapper name="patientProfession" label="Profession" options={professions} value={values.patientProfession || ''}  />
                                            </Grid>
                                            <Grid item xs={4} className={classes.strech}>
                                                <TextFieldWrapper
                                                    name="patientLastName"
                                                    label="Prénom(s)"
                                                    value={values.patientLastName || ''}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldWrapper name="patientPlaceOfBirth" label="Lieu de naissance" value={values.patientPlaceOfBirth || ''} />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <SelectWrapper name="patientNationalite" label="Nationalité" options={nations} value={values.patientNationalite || ''} />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <RadioSelectWrapper label="Genre" name="patientSex" options={genre} vvalue={values.patientSex || ''}/>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <SelectWrapper name="patientReligion" label="Religion" options={religions}  value={values.patientReligion || ''}/>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="overline" className={classes.text}>
                                                    Coordonnées du patient
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldWrapper name="telephone" label="Contact (N° Téléphone)" value={values.telephone || ''} />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldWrapper name="email" label="Adresse électronique" value={values.email || ''} />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldWrapper name="adresse" label="Adresse postale" value={values.adresse || ''} />
                                            </Grid>

                                           
                                            <Grid item style={{ marginTop: '10px' }}>
                                                <Button
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    startIcon={isSubmitting ? <CircularProgress size="1rem" /> : undefined}
                                                >
                                                    {isSubmitting ? 'Enregistrement en cours' : 'Modifier'}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                        {/*   <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
                                    </Form>
                                )}
                            </Formik>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default UpdatePatient
