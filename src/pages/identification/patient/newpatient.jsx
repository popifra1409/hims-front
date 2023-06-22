import "../../new/new.scss";
import "../../../style/dark.scss"
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import React, { useState } from "react";
import { Card, CardContent, Grid, Button, makeStyles, Typography } from '@material-ui/core';
import { Form, Formik, Field, FieldArray } from 'formik';
import { CircularProgress } from "@mui/material";
import * as Yup from "yup";
import DateTimePicker from "../../../components/FormsUI/DateTimePicker";
import moment from "moment";
import TextField from "../../../components/FormsUI/Textfield";
/* import { TextField } from "@material-ui/core"; */
import Select from "../../../components/FormsUI/Select";
import Radio from "../../../components/FormsUI/RadioButton";
import professions from '../../../static/professions.json';
import nations from '../../../static/pays.json';
import religions from '../../../static/religions.json';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const emptyInfoSup = { information: '', valeur: '' };
const emptyParametreSoin = { libelle: '', unite: '', poids:'' };
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

const NewPatient = ({ title }) => {

    const classes = useStyles();

    const INITIAL_FORM_STATE = {
        adresse: "",
        email: "",
        patientAge: 0,
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

    //options gender
    const genre = [
        { value: '0', label: 'MASCULIN' },
        { value: '1', label: 'FEMININ' },
        { value: '2', label: 'NON PRECISE' },
    ];

    //calcul de la date de naissance
    const [values, setValues] = useState(INITIAL_FORM_STATE);

    /* const calculateDob = (age) => {
        const today = new Date();
        const birthYear = today.getFullYear() - age;
        const birthDate = new Date(birthYear, today.getMonth(), today.getDate());
        return birthDate;
    };

    const handleAgeChange = (e) => {
        const patientAge = e.target.value ? parseInt(e.target.value, 10) : '';
        const patientBirthDay = patientAge ? calculateDob(patientAge) : '';
        console.log('affichage age' + patientBirthDay);
        setValues({ ...values, patientAge, patientBirthDay });
    };  */

    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState('');

    const handleBirthdateChange = (event) => {
        const selectedDate = new Date(event.target.value);
        setBirthdate(selectedDate.toISOString().slice(0, 10)); // Formatage de la date

        const today = new Date();
        const selectedYear = selectedDate.getFullYear();
        const currentYear = today.getFullYear();

        const calculatedAge = currentYear - selectedYear;
        setAge(calculatedAge.toString());
    };

    const handleAgeChange = (event) => {
        const inputAge = parseInt(event.target.value);
        setAge(inputAge.toString());

        const today = new Date();
        const currentYear = today.getFullYear();
        const selectedYear = currentYear - inputAge;

        const selectedDate = new Date(selectedYear, 0, 1);
        setBirthdate(selectedDate.toISOString().slice(0, 10));
    };



    //fin calcul

    const FORM_VALIDATION = Yup.object().shape({
        patientLastName: Yup.string().required("Renseignez le nom du patient").min(3, 'Le nom du patient doit contenir au moins 3 caractères'),
        telephone: Yup.number().integer().typeError('Numéro de téléphone invalide').required('Renseignez un numéro de téléphone').min(9, 'Le numéro doit contenir au moins 9 chiffres'),
        patientSex: Yup.string().required("Renseignez le genre"),
        patientBirthDay: Yup.date().required("Renseignez la date de naissance"),
        patientAge: Yup.number().required('Required').positive('Insérer un nombre positif').max(999999999),
        patientProfession: Yup.string().required("Renseignez la profession"),
        email: Yup.string().email("E-mail invalide"),
    })

    const handleSubmit = (values) => {
        // Handle form submission if needed
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
                                onSubmit={async (values) => {
                                    console.log('Mes données:', values)
                                    return new Promise(res => setTimeout(res, 2500));
                                }}
                            >
                                {({ values, errors, isSubmitting }) => (
                                    <Form autoComplete="off">
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="overline" className={classes.text}>
                                                    Informations du patient
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} className={classes.strech}>
                                                <TextField
                                                    name="patientLastName"
                                                    label="Nom(s)"
                                                />
                                            </Grid>
                                            <Grid item xs={6} className={classes.strech}>
                                                <TextField
                                                    name="patientFirstName"
                                                    label="Prénom(s)"
                                                    value={values.patientFirstName}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <DateTimePicker
                                                    name="patientBirthDay"
                                                    label="Date de naissance"
                                                    value={values.patientBirthDay}
                                                />
                                                <TextField
                                                    name="patientAge"
                                                    label="Age du patient"
                                                    type="number"
                                                    value={values.patientAge}
                                                    onChange={handleAgeChange}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField name="patientPlaceOfBirth" label="Lieu de naissance" />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Select name="patientProfession" label="Profession" options={professions} />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Radio label="Genre" name="patientSex" options={genre} />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Select name="patientNationalite" label="Nationalité" options={nations} />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Select name="patientReligion" label="Religion" options={religions} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="overline" className={classes.text}>
                                                    Coordonnées du patient
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField name="telephone" label="Contact (N° Téléphone)" />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField name="email" label="Adresse électronique" />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField name="adresse" label="Adresse postale" />
                                            </Grid>

                                            {/* paramètre de soins du patient */}

                                            <Grid item xs={12}>
                                                <Typography variant="overline" className={classes.text}>
                                                    Paramètre de soins du patient
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField name="libelle" label="libelle" />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField name="unite" label="Unité" />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <TextField name="Poids" label="Poids" />
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
                                                                            <TextField
                                                                                name={`infosup[${index}].information`}
                                                                                label="Information"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={5} className={classes.strech}>
                                                                            <TextField
                                                                                name={`infosup[${index}].valeur`}
                                                                                label="Valeur"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={1} >
                                                                            <Button
                                                                                variant="contained"
                                                                                color="secondary"
                                                                                style={{ height: "50px" }}
                                                                                onClick={() => remove(index)}><DeleteIcon /></Button>
                                                                        </Grid>

                                                                        <Grid item xs={1}>
                                                                            <Button
                                                                                variant="contained"
                                                                                color="primary"
                                                                                style={{ color: "white", height: "50px" }}
                                                                                onClick={() => push(emptyInfoSup)}
                                                                            ><AddIcon /></Button>
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
                                                                            <TextField
                                                                                name={`parametreSoin[${index}].libelle`}
                                                                                label="Libelle"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={3} className={classes.strech}>
                                                                            <TextField
                                                                                name={`parametreSoin[${index}].unite`}
                                                                                label="Unite"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={4} className={classes.strech}>
                                                                            <TextField
                                                                                name={`parametreSoin[${index}].poids`}
                                                                                label="Poids"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={1} >
                                                                            <Button variant="contained" color="secondary" style={{ color: "white", height: "50px" }} onClick={() => remove(index)}><DeleteIcon /></Button>
                                                                        </Grid>

                                                                        <Grid item xs={1}>
                                                                            <Button
                                                                                color="primary"
                                                                                style={{ color: "white", height: "50px" }}
                                                                                variant="contained"
                                                                                onClick={() => push(emptyParametreSoin)}
                                                                            ><AddIcon />
                                                                            </Button>
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
                                        <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
                                    </Form>
                                )}
                            </Formik>
                            <div>
                                <label>Date de naissance:</label>
                                <input type="date" value={birthdate} onChange={handleBirthdateChange} />
                                <br />
                                <label>Âge:</label>
                                <input type="text" value={age} onChange={handleAgeChange} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default NewPatient;
