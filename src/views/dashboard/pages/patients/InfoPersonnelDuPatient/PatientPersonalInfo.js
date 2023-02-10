import { useState, useRef } from "react"
import { BsPencilSquare} from 'react-icons/bs'
import { FaTrash,FaPlus } from 'react-icons/fa'

const PatientPersonalInfo = ({ onAdd }) => {
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

  // sibler directement les inputs
  const patientFirstNameRef = useRef(null)
  const patientAgeRef = useRef(null)
  const patientBirthDayRef = useRef(null)
  const patientLastNameRef = useRef(null)
  const patientNationaliteRef = useRef(null)
  const patientPlaceOfBirthRef = useRef(null)
  const patientProfessionRef = useRef(null)
  const patientReligionRef = useRef(null)
  const patientTelephoneRef = useRef(null)
  const patientSexRef = useRef(null)
  const patientAdresseRef = useRef(null)
  const patientEmailRef = useRef(null)
  const patientCodeBarRef = useRef(null)

  const OnSubmit = (e) => {
    e.preventDefault()
    onAdd({ patientFirstName, patientLastName, patientBirthDay, patientAge, patientNationalite, patientPlaceOfBirth, patientProfession, patientReligion, telephone, patientSex, adresse, patientBarCode, email })
    // clear field
    clearField()
  }

  const clearField = () => {
    // Liberer les chants
    setPatientFirstName('')
    patientFirstNameRef.current.value = ''

    setPatientLastName('')
    patientLastNameRef.current.value = ''

    setPatientBirthDay()
    patientBirthDayRef.current.value = ''

    setPatientAge(0)
    patientAgeRef.current.value = ''

    setPatientPlaceOfBirth('')
    patientPlaceOfBirthRef.current.value = ''

    setPatientNationalite('')
    patientNationaliteRef.current.value = ''

    setPatientProfession('')
    patientProfessionRef.current.value = ''

    setPatientReligion('')
    patientReligionRef.current.value = ''

    setTelephone(0)
    patientTelephoneRef.current.value = ''

    setPatientSex('')
    patientSexRef.current.value = ''

    setAdresse('')
    patientAdresseRef.current.value = ''

    setEmail('')
    patientEmailRef.current.value = ''

    setPatientBarCode('')
    patientCodeBarRef.current.value = ''

  }

  return (
    <>
      <div className="my-3 col-md-12 text-start">
        <h5 className="fs-6">Identité du patient</h5>
      </div>
      <form className="border p-3">
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="col-md-12 text-start" for="nom">Nom *</label>
            <input ref={patientFirstNameRef} className="form-control" type="text" name="nom" onChange={(e) => setPatientFirstName(e.target.value)} />
          </div>
          <div className="col-md-4">
            <label className="my-1 col-md-12 text-start" for="prenom">Prenom</label>
            <input ref={patientLastNameRef} className="form-control" type="text" name="prenom" onChange={(e) => setPatientLastName(e.target.value)} />
          </div>
          <div className="col-md-4">
            <div className="col-md-12">
              <div className="col-md-12">
                <label className="my-1 col-md-12 text-start" for="date_naissance">Date de naissance *</label>
                <input ref={patientBirthDayRef} className="form-control " type="date" name="date_naissance" onChange={(e) => setPatientBirthDay(e.target.value)} />
              </div>
              <div className="col-md-12">
                <label className="my-1 col-md-12 text-start" for="age">Age *</label>
                <input ref={patientAgeRef} className="form-control" type="number" name="age" onChange={(e) => setPatientAge(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">

          <div className="col-md-4">
            <div className="col-md-12">
              <label className="my-1 col-md-12 text-start" for="lieu_naissance">Lieu de naissance * </label>
              <input ref={patientPlaceOfBirthRef} className="form-control" type="text" name="lieu_naissance" onChange={(e) => setPatientPlaceOfBirth(e.target.value)} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-12">
              <label className="my-1 col-md-12 text-start" for="lieu_naissance"> Code Bar </label>
              <input ref={patientCodeBarRef} className="form-control" type="text" name="lieu_naissance" onChange={(e) => setPatientBarCode(e.target.value)} />
            </div>
          </div>
          <div className="col-md-4">
            <label className="my-1 col-md-12 text-start" for="sexe">Sexe *</label>
            <select ref={patientSexRef} className="p-2 col-md-12 rounded" name="sexe" onChange={(e) => setPatientSex(e.target.value)}>
              <option value="">Choisir le genre </option>
              <option value="NON_PRECISE" >NON_PRECISE</option>
              <option value="MASCULIN" >Masculin</option>
              <option value="FEMININ" >Feminin</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="my-1 col-md-12 text-start" for="adresse">Adresse *</label>
            <input ref={patientAdresseRef} className="form-control" type="text" name="adresse" onChange={(e) => setAdresse(e.target.value)} />
          </div>
          <div className="col-md-4">
            <label className="my-1 col-md-12 text-start" for="telephone">Téléphone *</label>
            <input ref={patientTelephoneRef} className="form-control" type="tel" name="telephone" onChange={(e) => setTelephone(e.target.value)} />
          </div>
          <div className="col-md-4">
            <label className="my-1 col-md-12 text-start" for="nationalite">nationalité *</label>
            <input ref={patientNationaliteRef} className="form-control" type="text" name="nationalite" onChange={(e) => setPatientNationalite(e.target.value)} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <label className="my-1 col-md-12 text-start" for="religion">Religion</label>
            <input ref={patientReligionRef} className="form-control" type="text" name="religion" onChange={(e) => setPatientReligion(e.target.value)} />
          </div>
          <div className="col-md-4 mb-2">
            <label className="my-1 col-md-12 text-start" for="profession">Profession *</label>
            <input ref={patientProfessionRef} className="form-control" type="text" name="profession" onChange={(e) => setPatientProfession(e.target.value)} />
          </div>
          <div className="col-md-4">
            <label className="my-1 col-md-12 text-start" for="email">Email</label>
            <input ref={patientEmailRef} className="form-control" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <input className="btn btn-primary" type="button" value="Submit" onClick={OnSubmit} />
      </form>
      <div className="my-3 col-md-12 text-start">
        <h5 className="fs-6">Infos supplémentaires</h5>
      </div>
      <div className="border p-3">
        <div className="mb-3 text-end">
          <button className="btn btn-primary"><FaPlus className="me-2"/>Ajouter</button>
        </div>
        <table className="table">
          <thead className="table-light text-uppercase">
            <tr>
              <th>libelle</th>
              <th>value</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Telephone secondaire</td>
              <td>677898139</td>
              <td>
                <span className="mx-2"><BsPencilSquare /></span>
                <span className="mx-2"><FaTrash /></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PatientPersonalInfo
