import "../../new/new.scss";
import "../../../style/dark.scss";
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import React, { useEffect, useState } from "react";
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
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import * as moment from 'moment';

const emptyInfoSup = { information: '', valeur: '' };
const emptyParametreSoin = { libelle: '', unite: '', poids: '' };
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
    telephone: "",
    infosup: [emptyInfoSup],
    parametreSoin: [emptyParametreSoin]
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

//evaluer la date de naissance à partrir de l'age fourni
const calculateBirthdateFromAge = (age) => {
    const today = new Date();
    const birthDate = new Date(today.getFullYear() - age, today.getMonth(), today.getDate());
    return birthDate.toISOString().split("T")[0];
};

const NewPatient = ({ title }) => {

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
    const handleSubmit = (values) => {
        console.log(values);
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
                                initialValues={{ ...INITIAL_FORM_STATE }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={handleSubmit}
                            >
                                {({ values, errors, isSubmitting, setFieldValue }) => (
                                    <Form autoComplete="off">
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="overline" className={classes.text}>
                                                    Informations du patient
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4} className={classes.strech}>
                                                <TextFieldWrapper
                                                    name="patientLastName"
                                                    label="Nom(s)"
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
                                                <SelectWrapper name="patientProfession" label="Profession" options={professions} />
                                            </Grid>
                                            <Grid item xs={4} className={classes.strech}>
                                                <TextFieldWrapper
                                                    name="patientFirstName"
                                                    label="Prénom(s)"
                                                    value={values.patientFirstName}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldWrapper name="patientPlaceOfBirth" label="Lieu de naissance" />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <SelectWrapper name="patientNationalite" label="Nationalité" options={nations} />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <RadioSelectWrapper label="Genre" name="patientSex" options={genre} />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <SelectWrapper name="patientReligion" label="Religion" options={religions} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="overline" className={classes.text}>
                                                    Coordonnées du patient
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldWrapper name="telephone" label="Contact (N° Téléphone)" />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldWrapper name="email" label="Adresse électronique" />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextFieldWrapper name="adresse" label="Adresse postale" />
                                            </Grid>

                                            {/* infos supplémentaires du patient */}
                                            <Card style={{ width: "100%", marginTop: "10px" }}>
                                                <CardContent >
                                                    <FieldArray name="infosup">
                                                        {({ push, remove }) => (
                                                            <React.Fragment>
                                                                <Grid item xs={12}>
                                                                    <Typography variant="overline" className={classes.text}>
                                                                        Informations supplémentaires
                                                                    </Typography>
                                                                </Grid>
                                                                {values.infosup.map((_, index) => (
                                                                    <Grid container item key={index} spacing={2}>
                                                                        <Grid item xs={5} className={classes.strech}>
                                                                            <TextFieldWrapper
                                                                                name={`infosup[${index}].information`}
                                                                                label="Information"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={5} className={classes.strech}>
                                                                            <TextFieldWrapper
                                                                                name={`infosup[${index}].valeur`}
                                                                                label="Valeur"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={2} >
                                                                            <IconButton
                                                                                aria-label="supprimer"
                                                                                size="small"
                                                                                variant="outlined"
                                                                                onClick={() => remove(index)}
                                                                            >
                                                                                <DeleteIcon />
                                                                            </IconButton>
                                                                            <IconButton
                                                                                aria-label="ajouter"
                                                                                size="small"
                                                                                variant="outlined"
                                                                                onClick={() => push(emptyInfoSup)}
                                                                            >
                                                                                <AddIcon />
                                                                            </IconButton>
                                                                        </Grid>
                                                                    </Grid>
                                                                ))}

                                                            </React.Fragment>
                                                        )}
                                                    </FieldArray>
                                                </CardContent>
                                            </Card>

                                            {/* paramètre de soins du patient */}
                                            <Card style={{ width: "100%", marginTop: '30px' }}>
                                                <CardContent  >
                                                    <FieldArray name="parametreSoin">
                                                        {({ push, remove }) => (
                                                            <React.Fragment>
                                                                <Grid item xs={12}>
                                                                    <Typography variant="overline" className={classes.text}>
                                                                        Paramètre de Soins du patient
                                                                    </Typography>
                                                                </Grid>
                                                                {values.parametreSoin.map((_, index) => (
                                                                    <Grid container item key={index} spacing={2}>
                                                                        <Grid item xs={3} className={classes.strech}>
                                                                            <TextFieldWrapper
                                                                                name={`parametreSoin[${index}].libelle`}
                                                                                label="Libelle"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={3} className={classes.strech}>
                                                                            <TextFieldWrapper
                                                                                name={`parametreSoin[${index}].unite`}
                                                                                label="Unite"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={4} className={classes.strech}>
                                                                            <TextFieldWrapper
                                                                                name={`parametreSoin[${index}].poids`}
                                                                                label="Poids"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={2} >
                                                                            <IconButton
                                                                                aria-label="supprimer"
                                                                                size="small"
                                                                                variant="outlined"
                                                                                onClick={() => remove(index)}
                                                                            >
                                                                                <DeleteIcon />
                                                                            </IconButton>
                                                                            <IconButton
                                                                                aria-label="ajouter"
                                                                                size="small"
                                                                                variant="outlined"
                                                                                onClick={() => push(emptyParametreSoin)}
                                                                            >
                                                                                <AddIcon />
                                                                            </IconButton>
                                                                        </Grid>
                                                                    </Grid>
                                                                ))}

                                                            </React.Fragment>
                                                        )}
                                                    </FieldArray>
                                                </CardContent>
                                            </Card>

                                            <Grid item style={{ marginTop: '10px' }}>
                                                <Button
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    startIcon={isSubmitting ? <CircularProgress size="1rem" /> : undefined}
                                                >
                                                    {isSubmitting ? 'Enregistrement en cours' : 'Enregistrer'}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                        {/*   <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
                                    </Form>
                                )}
                            </Formik>
                            {/* <div>
                                <label>Date de naissance:</label>
                                <input type="date" value={birthdate} onChange={handleBirthdateChange} />
                                <br />
                                <label>Âge:</label>
                                <input type="text" value={age} onChange={handleAgeChange} />
                            </div> */}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default NewPatient;
