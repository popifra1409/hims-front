import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'
import Dashboard from "../../Dashboard"
import UpdateForm from "../../components/UpdateForm"
import { BsPencilSquare, BsChevronCompactLeft } from 'react-icons/bs'
import IdentificationResource from "../../../../services/IdentificationResource"
import { Box, Breadcrumbs, Button } from "@mui/material"
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Patient = () => {

  // components states
  const [patientAge, setPatientAge] = useState(0)
  const [patientBirthDay, setPatientBirthDay] = useState()
  const [patientFirstName, setPatientFirstName] = useState('')
  const [patientLastName, setPatientLastName] = useState('')
  const [patientNationalite, setPatientNationalite] = useState('')
  const [patientPlaceOfBirth, setPatientPlaceOfBirth] = useState('')
  const [patientProfession, setPatientProfession] = useState('')
  const [patientReligion, setPatientReligion] = useState('')
  const [telephone, setTelephone] = useState(0)
  const [patientSex, setPatientSex] = useState('')
  const [adresse, setAdresse] = useState('')
  const [email, setEmail] = useState('')
  const [patientBarCode, setPatientBarCode] = useState('')
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  // single patient
  const [patient, setPatient] = useState({})
  // api instance
  const api = new IdentificationResource()
  const location = useLocation()
  const { patientId } = location.state


  // getPatientById

  useEffect(() => {
    const getPatientById = async (id) => {
      await api.getPatientById(id).then((res) => setPatient(res.data.data))
      console.log(patient)
      // return res
    }
    getPatientById(patientId)

  }, [])

  const updatePatient = (e) => {
    e.preventDefault()
    const newPatient = {
      adresse, email, patientAge, patientBarCode, patientBirthDay, patientFirstName, patientLastName, patientNationalite, patientPlaceOfBirth, patientProfession, patientReligion, patientSex, telephone
    }
    console.log(newPatient)
    return api.updatePatient(patient.patientId, newPatient)
  }

  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });


  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <Dashboard>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 3 }}>
        <StyledBreadcrumb
          component="a"
          href="/dashboard"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
          variant="outlined"
        />
        <StyledBreadcrumb
          component="a"
          href="/dashboard/patients"
          label="Patients"
          variant="outlined"
        />
        <StyledBreadcrumb
          label="patient"
          variant="outlined"
        />
      </Breadcrumbs>
      <div className="p-3 m-2 main-content-child" style={{ display: showUpdateForm ? 'none' : '' }}>
        <div className="row">
          <div className="col-md-8 m-3 border rounded">
            <h3 className="d-block text-start px-3 fw-normal fs-4">Informations du patient</h3>
            <hr className=" mt-0 mb-4 opacity-1" style={{ opacity: '0.3' }} />
            <div className="border my-2 py-3">
              <div className="row mb-4 mx-3 text-start">
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-2"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15
                      }}
                    >
                      Nom
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-8"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      <span style={{color:'black',marginRight:'3px'}}>:</span>Djieuga Djoubi
                    </Box>
                  </div>
                </Box>
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-2"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15
                      }}
                    >
                      Prenom
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-8"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      <span style={{color:'black',marginRight:'3px'}}>:</span>Ryle Nathan
                    </Box>
                  </div>
                </Box>
              </div>
              <div className="row mb-4 mx-3 text-start">
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-2"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15
                      }}
                    >
                      Date de naissance
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-8"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      <span style={{color:'black',marginRight:'3px'}}>:</span>2022-05-12
                    </Box>
                  </div>
                </Box>
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-2"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15
                      }}
                    >
                      Age
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-8"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      <span style={{color:'black',marginRight:'3px'}}>:</span>13
                    </Box>
                  </div>
                </Box>
              </div>
              <div className="row mb-4 mx-3 text-start">
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-2"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15
                      }}
                    >
                      Lieu de naissance
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-8"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      <span style={{color:'black',marginRight:'3px'}}>:</span>quelque part
                    </Box>
                  </div>
                </Box>
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-2"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15
                      }}
                    >
                      Code Bar
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-8"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      <span style={{color:'black',marginRight:'3px'}}>:</span>codejwk1223245owi
                    </Box>
                  </div>
                </Box>
              </div>
              <div className="row mb-4 mx-3 text-start">
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-2"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15
                      }}
                    >
                      Sexe
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-8"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      <span style={{color:'black',marginRight:'3px'}}>:</span>masculin
                    </Box>
                  </div>
                </Box>
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-2"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15
                      }}
                    >
                      Adresse
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-8"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      <span style={{color:'black',marginRight:'3px'}}>:</span>akwa-nord
                    </Box>
                  </div>
                </Box>
              </div>
              <div className="row mb-4 mx-3 text-start">
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-3"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15
                      }}
                    >
                      Téléphone
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-7"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      <span style={{color:'black',marginRight:'3px'}}>:</span>6534567234
                    </Box>
                  </div>
                </Box>
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-3"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15
                      }}
                    >
                      nationalité
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-7"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      <span style={{color:'black',marginRight:'3px'}}>:</span>Camer
                    </Box>
                  </div>
                </Box>
              </div>
              <div className="row mb-4 mx-3 text-start">
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-3"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15
                      }}
                    >
                      Religion
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-7"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      <span style={{color:'black',marginRight:'3px'}}>:</span>musulman
                    </Box>
                  </div>
                </Box>
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-3"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15
                      }}
                    >
                      Profession
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-7"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                     <span style={{color:'black',marginRight:'3px'}}>:</span>Informaticien
                    </Box>
                  </div>
                </Box>
              </div>
              <div className="row mb-4 mx-3 text-start">
                <Box className='col-md-6'>
                  <div className="row">
                    <Box
                      class="col-md-3"
                      sx={{
                        color: 'text.primary',
                        fontSize: 15,
                        me:1
                      }}
                    >
                      Email 
                    </Box>
                    <Box
                      className="text-start text-wrap col-md-7"
                      sx={{
                        color: 'success.light',
                        fontWeight: 'bold',
                        mx: 2,
                        px: 1,
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                     <span style={{color:'black',marginRight:'3px'}}>:</span>User@mail.com
                    </Box>
                  </div>
                </Box>
              </div>
            </div>
            <div className="row mx-0 my-2">
              <Link to="/dashboard/patients" className="btn btn-light border text-wrap text-center p-1" style={{ width: '6rem' }}><BsChevronCompactLeft /><span className="fs-6">Retour</span></Link>
              <button onClick={() => setShowUpdateForm(!showUpdateForm)} className="mx-3 p-1 btn btn-primary text-wrap text-center " style={{ width: '6rem' }}><BsPencilSquare /><span className="ms-2 fs-6">Modifier</span></button>
            </div>
          </div>
          <div className="col-md-3 p-3 border rounded ">
            <h3 className="d-block text-start px-3 fw-normal fs-4">Gestion du patient</h3>
            <hr className=" mt-0 mb-4 opacity-1" style={{ opacity: '0.3' }} />
            <div className="mx-3" >
              <button  class="btn btn-light border text-wrap" style={{color: 'black',width: '7rem' }} >Hospitaliser</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: showUpdateForm ? '' : 'none' }}>
        {/* <PageHeading heading="Patients" stepName="modifier" /> */}
        <UpdateForm>
          <form className="me-5 g-3 " onSubmit={updatePatient}>
            <div className="row mb-3 text-start">
              <div className="col-md-6">
                <label className="col-2" for="nom">Nom *</label>
                <input className="form-control text-center" type="text" name="nom" onChange={(e) => setPatientFirstName(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="col-2" for="prenom">Prenom</label>
                <input className="form-control text-center" type="text" name="prenom" onChange={(e) => setPatientLastName(e.target.value)} />
              </div>
            </div>
            <div className="row mb-3 text-start">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <label className="col-md-12" for="date_naissance">Date de naissance *</label>
                    <input className="form-control text-center" type="date" name="date_naissance" onChange={(e) => setPatientBirthDay(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label className="col-md-6" for="age">Age *</label>
                    <input className="form-control text-center" type="number" name="age" onChange={(e) => setPatientAge(e.target.value)} />
                  </div>
                </div>

              </div>
              <div className="col-md-6 text-start">
                <label className="col-md-6" for="lieu_naissance">Lieu de naissance * </label>
                <input className="form-control text-center" type="text" name="lieu_naissance" onChange={(e) => setPatientPlaceOfBirth(e.target.value)} />
              </div>
            </div>
            <div className="row mb-3 text-start">
              <div className="col-md-6 d-none">
                <label className="col-2" for="lieu_naissance"> Code Bar </label>
                <input className="form-control text-center" type="text" name="lieu_naissance" onChange={(e) => setPatientBarCode(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="col-2" for="sexe">Sexe *</label>
                <select name="sexe" className="form-control text-center" onChange={(e) => setPatientSex(e.target.value)}>
                  <option value="">Choisir le genre </option>
                  <option value="NON_PRECISE" >NON_PRECISE</option>
                  <option value="MASCULIN" >Masculin</option>
                  <option value="FEMININ" >Feminin</option>
                </select>
              </div>
            </div>

            <div className="row mb-3 text-start">
              <div className="col-md-4">
                <label className="col-12" for="adresse">Adresse *</label>
                <input className="form-control text-center" type="text" name="adresse" onChange={(e) => setAdresse(e.target.value)} />
              </div>
              <div className="col-md-4">
                <label className="col-12" for="telephone">Téléphone *</label>
                <input className="form-control text-center" type="tel" name="telephone" onChange={(e) => setTelephone(e.target.value)} />
              </div>
              <div className="col-md-4">
                <label className="col-12 " for="nationalite">nationalité *</label>
                <input className="form-control text-center" type="text" name="nationalite" onChange={(e) => setPatientNationalite(e.target.value)} />
              </div>
            </div>
            <div className="row mb-3 text-start">
              <div className="col-md-4 ">
                <label className="col-12" for="religion">Religion</label>
                <input className="form-control text-center" type="text" name="religion" onChange={(e) => setPatientReligion(e.target.value)} />
              </div>
              <div className="col-md-4">
                <label className="col-12" for="profession">Profession *</label>
                <input className="form-control text-center" type="text" name="profession" onChange={(e) => setPatientProfession(e.target.value)} />
              </div>
              <div className="col-md-4">
                <label className="col-12" for="email">Email</label>
                <input className="form-control text-center" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="row mx-0 mt-4">
              <button onClick={() => setShowUpdateForm(!showUpdateForm)} className="btn btn-light border text-wrap" style={{ width: '7rem' }}>Annuler</button>
              <input type="submit" class="mx-3 px-2 btn btn-success text-wrap" value={'sauvegaurder'} style={{ width: '7rem' }} />
            </div>
          </form>
        </UpdateForm>
      </div>
    </Dashboard >
  )
}

export default Patient
