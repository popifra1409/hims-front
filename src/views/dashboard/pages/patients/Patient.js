import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'
import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PageHeading from "../../components/main/PageHeading"
import UpdateForm from "../../components/UpdateForm"
import { BsPencilSquare, BsChevronCompactLeft} from 'react-icons/bs'
import IdentificationResource from "../../../../services/IdentificationResource"

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
    //  console.log(newPatient)
    return api.updatePatient(patient.patientId, newPatient)
  }

  return (
    <Dashboard>
      {/* <Main> */}
        <PageHeading heading="Patients" stepName={showUpdateForm ? `${patient.patientId}/ Modifier` : patient.patientId} />
        <div className="main-content-child" style={{ display: showUpdateForm ? 'none' : '' }}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="col-2">Nom *</label>
              <span className="form-control text-center">{patient.patientFirstName}</span>
            </div>
            <div className="col-md-6">
              <label className="col-2">Prenom</label>
              <span className="form-control text-center">{patient.patientLastName}</span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <label className="col-md-12">Date de naissance *</label>
                  <span className="form-control text-center">{patient.patientBirthDay}</span>
                </div>
                <div className="col-md-6">
                  <label className="col-md-6" >Age *</label>
                  <span className="form-control text-center">{patient.patientAge}</span>
                </div>
              </div>

            </div>
            <div className="col-md-6">
              <label className="col-md-6" >Lieu de naissance * </label>
              <span className="form-control text-center">{patient.patientPlaceOfBirth}</span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="col-2" for="lieu_naissance"> Code Bar </label>
              <span className="form-control text-center">{patient.patientBarCode}</span>
            </div>
            <div className="col-md-6">
              <label className="col-2" for="sexe">Sexe *</label>
              <span className="form-control text-center">{patient.patientSex}</span>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label className="col-12" for="adresse">Adresse *</label>
              <span className="form-control text-center">{patient.adresse}</span>
            </div>
            <div className="col-md-4">
              <label className="col-12" for="telephone">Téléphone *</label>
              <span className="form-control text-center">{patient.telephone}</span>
            </div>
            <div className="col-md-4">
              <label className="col-12 " for="nationalite">nationalité *</label>
              <span className="form-control text-center">{patient.patientNationalite}</span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4 ">
              <label className="col-12" for="religion">Religion</label>
              <span className="form-control text-center">{patient.patientReligion}</span>
            </div>
            <div className="col-md-4">
              <label className="col-12" for="profession">Profession *</label>
              <span className="form-control text-center">{patient.patientProfession}</span>
            </div>
            <div className="col-md-4">
              <label className="col-12" for="email">Email</label>
              <span className="form-control text-center">{patient.email}</span>
            </div>
          </div>
          <div className="row py-2">
            <Link to="/dashboard/patients" className="m-4 btn btn-light col-md-3"><BsChevronCompactLeft /><span className="ms-3">Retour</span></Link>
            <button onClick={() => setShowUpdateForm(!showUpdateForm)} className="m-4 btn btn-primary col-md-3"><BsPencilSquare/><span className="ms-3">Modifier</span></button>
          </div>
        </div>
        <div style={{ display: showUpdateForm ? '' : 'none' }}>
          {/* <PageHeading heading="Patients" stepName="modifier" /> */}
          <UpdateForm>
            <form className="me-5 g-3" onSubmit={updatePatient}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="col-2" for="nom">Nom *</label>
                  <input className="form-control text-center" type="text" name="nom" onChange={(e) => setPatientFirstName(e.target.value)} />
                </div>
                <div className="col-md-6">
                  <label className="col-2" for="prenom">Prenom</label>
                  <input className="form-control text-center" type="text" name="prenom" onChange={(e) => setPatientLastName(e.target.value)} />
                </div>
              </div>
              <div className="row mb-3">
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
                <div className="col-md-6">
                  <label className="col-md-6" for="lieu_naissance">Lieu de naissance * </label>
                  <input className="form-control text-center" type="text" name="lieu_naissance" onChange={(e) => setPatientPlaceOfBirth(e.target.value)} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
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

              <div className="row mb-3">
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
              <div className="row mb-3">
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
              <div className="row py-3">
                <button onClick={() => setShowUpdateForm(!showUpdateForm)} className="m-4 btn btn-light col-md-3">Annuler</button>
                <input type="submit" class="m-4 btn btn-success col-md-3" value={'sauvegaurder'} />
              </div>
            </form>
          </UpdateForm>
        </div>
      {/* </Main> */}
    </Dashboard >
  )
}

export default Patient
