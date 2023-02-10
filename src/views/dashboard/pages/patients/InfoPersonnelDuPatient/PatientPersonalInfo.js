import { useState, useRef } from "react"
import { AiOutlineSave } from "react-icons/ai"
import { BsPencilSquare } from 'react-icons/bs'
import { FaTrash, FaPlus } from 'react-icons/fa'

const PatientPersonalInfo = ({ onAdd }) => {
  const [patientAge, setPatientAge] = useState(0)
  const [patientBirthDay, setPatientBirthDay] = useState('')
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
  var age

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

  // Calcule l'age
  const computeAge = () => {
    let dob = new Date(patientBirthDayRef.current.value)
    let dobString = patientBirthDayRef.current.value

    //calculate month difference from current date in time.
    var month_diff = Date.now() - dob.getTime();
    //convert the calculated difference in date format.
    var age_dt = new Date(month_diff);
    //extract year from date.
    var year = age_dt.getUTCFullYear();
    var month = age_dt.getUTCFullYear()
    var dd = age_dt.getDay()
    var mm = age_dt.getMonth() + 1
    var yy = dob.getFullYear()

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    age = Math.abs(year - 1970)

    setPatientBirthDay(age)

    patientAgeRef.current.value = age
    const f = dd + '/' + mm + '/' + yy
    console.log(mm)
    // console.log()
  }

  const computeBirthDate = (value) => {

    let age = value
    let current_year = new Date().getFullYear()
    let birth_year = current_year - value
    console.log(birth_year)
  }

  return (
    <>
      <div className="my-3 col-md-12 text-start">
        <h5 className="fs-6">Identité du patient</h5>
      </div>
      <form className="border p-3">
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="my-1 col-md-12 text-start" for="nom">Nom <i className="text-danger">*</i></label>
            <input ref={patientFirstNameRef} className="form-control" type="text" name="nom" onChange={(e) => setPatientFirstName(e.target.value)} />
          </div>
          <div className="col-md-4">
            <label className="my-1 col-md-12 text-start" for="prenom">Prenom</label>
            <input ref={patientLastNameRef} className="form-control" type="text" name="prenom" onChange={(e) => setPatientLastName(e.target.value)} />
          </div>
          <div className="col-md-4">
            <div className="col-md-12">
              <div className="col-md-12">
                <label className="my-1 col-md-12 text-start" for="date_naissance">Date de naissance <i className="text-danger">*</i></label>
                <input ref={patientBirthDayRef} className="form-control " type="date" name="date_naissance" onChange={computeAge} />
              </div>
              <div className="col-md-12">
                <label className="my-1 col-md-12 text-start" for="age">Age <i className="text-danger">*</i></label>
                <input ref={patientAgeRef} className="form-control" type="number" name="age" onChange={(e) => computeBirthDate(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">

          <div className="col-md-4">
            <div className="col-md-12">
              <label className="my-1 col-md-12 text-start" for="lieu_naissance">Lieu de naissance <i className="text-danger">*</i></label>
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
            <label className="my-1 col-md-12 text-start" for="sexe">Sexe <i className="text-danger">*</i></label>
            <select ref={patientSexRef} className=" form-select" name="sexe" onChange={(e) => setPatientSex(e.target.value)}>
              <option value="">Choisir le genre </option>
              <option value="NON_PRECISE" >NON_PRECISE</option>
              <option value="MASCULIN" >Masculin</option>
              <option value="FEMININ" >Feminin</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="my-1 col-md-12 text-start" for="adresse">Adresse <i className="text-danger">*</i></label>
            <input ref={patientAdresseRef} className="form-control" type="text" name="adresse" onChange={(e) => setAdresse(e.target.value)} />
          </div>
          <div className="col-md-4">
            <label className="my-1 col-md-12 text-start" for="telephone">Téléphone <i className="text-danger">*</i></label>
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
            <label className="my-1 col-md-12 text-start" for="profession">Profession <i className="text-danger">*</i></label>
            <input ref={patientProfessionRef} className="form-control" type="text" name="profession" onChange={(e) => setPatientProfession(e.target.value)} />
          </div>
          <div className="col-md-4">
            <label className="my-1 col-md-12 text-start" for="email">Email</label>
            <input ref={patientEmailRef} className="form-control" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
      </form>
      <div className="my-3 col-md-12 text-start">
        <h5 className="fs-6">Infos supplémentaires</h5>
      </div>
      <div className="border p-3">
        <div className="mb-3 text-end">
          <button className="mb-3 p-1 text-wrap btn btn-primary" style={{ width: '6rem' }}><FaPlus className="me-2" />Ajouter</button>
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

      <div className="mt-3 me-3 ">
        <button onClick={OnSubmit} className="btn btn-success px-0 text-wrap rounded text-white" type="button" style={{ width: '6rem' }}>Enregistrer<AiOutlineSave /></button>
      </div>
    </>
  )
}

export default PatientPersonalInfo
