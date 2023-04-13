import "../../new/new.scss";
import "../../../style/dark.scss"
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import PatientService from '../../../services/PatientService';
import { useNavigate } from 'react-router-dom';

const NewPatient = ({ title }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
  
    let navigate = useNavigate();
  
    const initialValues = {
        adresse: "",
        email: "",
        patientAge: "",
        patientBarCode:"patient",
        patientBirthDay: "",
        patientLastName: "",
        patientFirstName: "",
        patientNationalite: "",
        patientPlaceOfBirth: "",
        patientProfession: "",
        patientReligion: "",
        patientSex: "",
        telephone: "",
    }
  
    const phoneRegExp =
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
   
    const userSchema = Yup.object().shape({
        patientAge: Yup.string().required("Renseignez l'age du patient"),
        patientFirstName: Yup.string().required("required"),
        patientLastName: Yup.string().required("required"),
        email: Yup.string().email("Email invalide").required("required"),
        patientNationalite: Yup.string().required("required"),
        adresse: Yup.string().required("required"),
        telephone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
        patientSex: Yup.string().required("required"),
        patientBirthDay: Yup.string().required("required"),
        patientPlaceOfBirth: Yup.string().required("required"),
        patientProfession: Yup.string().required("required"),
        patientFingerPrints: Yup.string().required("required"),
        patientReligion: Yup.string().required("required")
    
    })

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
      await DepartmentAPI.addDepartment(values, values.dept_parent)
        .then((response) => {
          console.log("DATA: " + response.data);
          setSubmitting(true);
          resetForm();
          navigate("/hrm/departments");
        })
        .catch((error) => {
          console.error(error.response.data);
          setSubmitting(false);
        });
    };
  
    return (
      <div className="new" m="20px">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <Box>
              <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={departmentSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box
                      display="grid"
                      gap="30px"
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                      sx={{
                        "& > div": {
                          gridColumn: isNonMobile ? undefined : "span 4",
                        },
                      }}
                    >
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Department Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.dept_name}
                        name="dept_name"
                        error={!!touched.dept_name && !!errors.dept_name}
                        helperText={touched.dept_name && errors.dept_name}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Téléphone"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.dept_number}
                        name="dept_number"
                        error={!!touched.dept_number && !!errors.dept_number}
                        helperText={touched.dept_number && errors.dept_number}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Decription"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.description}
                        name="dept_description"
                        error={!!touched.dept_description && !!errors.dept_description}
                        helperText={touched.dept_description && errors.dept_description}
                        sx={{ gridColumn: "span 4" }}
                      />
                      <label htmlFor="departement">Departement parent</label>
                      <Field
                        name="dept_parent"
                        as="select"
                        onChange={handleChange}
                        className={`form-control ${
                          errors.dept_parent && touched.dept_parent
                            ? "is-invalid"
                            : ""
                        }`}
                      >
                        {({ field, form }) => (
                          <select {...field}>
                            <option value="" selected disabled>
                              Select a department
                            </option>
                            {departments.map((department) => (
                              <option
                                key={department.departmentId}
                                value={department.departmentId}
                              >
                                {department.dept_name}
                              </option>
                            ))}
                          </select>
                        )}
                      </Field>
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                      <Button type="submit" color="secondary" variant="contained">
                        Create New Department
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            </Box>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewPatient;
  


//const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const initialValues = {
    adresse: "",
    email: "",
    patientAge: "",
    patientBarCode:"",
    patientBirthDay: "",
    patientFingerPrints: "",
    patientLastName: "",
    patientFirstName: "",
    patientNationalite: "",
    patientPlaceOfBirth: "",
    patientProfession: "",
    patientReligion: "",
    patientSex: "",
    telephone: "",
}




const AddPatients = () => {
    let Navigate = useNavigate();

    const isMobile = useMediaQuery("(min-width : 600px)");

   

    const handleSubmit = async (values) => {
        await PatientService.postPatients(values).then((response) => {
        console.log("Data" + response.data.data);
        Navigate("/ListPatients");
            
        })
    }

    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />

                <Box m="20px"><h5>loic</h5>

                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={initialValues}
                        validationSchema={userSchema}
                    >
                        {({ values, errors, handleSubmit, touched, handleBlur, handleChange }) => (
                            <form onSubmit={handleSubmit}>
                                <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                    sx={{ " & > div ": { gridColumn: isMobile ? undefined : "span 4" }, }}>

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Age"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="patientAge"
                                        value={values.patientAge}
                                        error={!!touched.patientAge && !!errors.patientAge}
                                        helperText={touched.patientAge && errors.patientAge}
                                        sx={{ gridColumn: "span 1" }}
                                    />

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="noms"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="patientFirstName"
                                        value={values.patientFirstName}
                                        error={!!touched.patientFirstName && !!errors.patientFirstName}
                                        helperText={touched.patientFirstName && errors.patientFirstName}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Prenoms"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="patientLastName"
                                        value={values.patientLastName}
                                        error={!!touched.patientLastName && !!errors.patientLastName}
                                        helperText={touched.patientLastName && errors.patientLastName}
                                        sx={{ gridColumn: "span 1" }}
                                    />

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="email"
                                        value={values.email}
                                        error={!!touched.email && !!errors.email}
                                        helperText={touched.email && errors.email}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Adresse"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="adresse"
                                        value={values.adresse}
                                        error={!!touched.adresse && !!errors.adresse}
                                        helperText={touched.adresse && errors.adresse}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Nationalite"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="patientNationalite"
                                        value={values.patientNationalite}
                                        error={!!touched.patientNationalite && !!errors.patientNationalite}
                                        helperText={touched.patientNationalite && errors.patientNationalite}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Profession"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="patientProfession"
                                        value={values.patientProfession}
                                        error={!!touched.patientProfession && !!errors.patientProfession}
                                        helperText={touched.patientProfession && errors.patientProfession}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Religion"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="patientReligion"
                                        value={values.patientReligion}
                                        error={!!touched.patientReligion && !!errors.patientReligion}
                                        helperText={touched.patientReligion && errors.patientReligion}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Sexe"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="patientSex"
                                        value={values.patientSex}
                                        error={!!touched.patientSex && !!errors.patientSex}
                                        helperText={touched.patientSex && errors.patientSex}
                                        sx={{ gridColumn: "span 2" }}
                                    />


                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Telephone"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="telephone"
                                        value={values.telephone}
                                        error={!!touched.telephone && !!errors.telephone}
                                        helperText={touched.telephone && errors.telephone}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="date"
                                        label="Date Naissance"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="patientBirthDay"
                                        value={values.patientBirthDay}
                                        error={!!touched.patientBirthDay && !!errors.patientBirthDay}
                                        helperText={touched.patientBirthDay && errors.patientBirthDay}
                                        sx={{ gridColumn: "span 2" }}
                                    />


                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Lieu de Naissance"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="patientPlaceOfBirth"
                                        value={values.patientPlaceOfBirth}
                                        error={!!touched.patientPlaceOfBirth && !!errors.patientPlaceOfBirth}
                                        helperText={touched.patientPlaceOfBirth && errors.patientPlaceOfBirth}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Empreinte digitale"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="patientFingerPrints"
                                        value={values.patientFingerPrints}
                                        error={!!touched.patientFingerPrints && !!errors.patientFingerPrints}
                                        helperText={touched.patientFingerPrints && errors.patientFingerPrints}
                                        sx={{ gridColumn: "span 2" }}
                                    />

                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Code Barre"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        name="patientBarCode"
                                        value={values.patientBarCode}
                                        error={!!touched.patientBarCode && !!errors.patientBarCode}
                                        helperText={touched.patientBarCode && errors.patientBarCode}
                                        sx={{ gridColumn: "span 3" }}
                                    />


                                </Box>

                                <Box display="flex" justifyContent="end" mt="20px">
                                    <Button type="submit" color="secondary" variant="contained">
                                        Save Patient
                                    </Button>
                                </Box>

                            </form>
                        )}


                    </Formik>
                </Box>

            </div>

        </div>
    )
}
