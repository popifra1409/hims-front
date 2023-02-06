import { useRef, useState } from "react"

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
  const [patientBarCode,setPatientBarCode] = useState('')

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
    onAdd({ patientFirstName, patientLastName, patientBirthDay, patientAge, patientNationalite, patientPlaceOfBirth, patientProfession, patientReligion, telephone, patientSex, adresse,patientBarCode,email })
    // clear field
    // clearField()
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
      <div className="row m-3 p-2">
        <label className="col-2" for="nom">Nom *</label>
        <input ref={patientFirstNameRef} className="col-10 w-full" type="text" name="nom" onChange={(e) => setPatientFirstName(e.target.value)} />
      </div>
      <div className="row m-3 p-2">
        <label className="col-2" for="prenom">Prenom</label>
        <input ref={patientLastNameRef} className="col-10" type="text" name="prenom" onChange={(e) => setPatientLastName(e.target.value)} />
      </div>
      <div className="row m-3 p-2">
        <div className="col-md-6">
          <div className="row">
            <label className="col-4" for="date_naissance">Date de naissance *</label>
            <input ref={patientBirthDayRef} className="col-7 " type="date" name="date_naissance" onChange={(e) => setPatientBirthDay(e.target.value)} />
          </div>
          <div className="row">
            <label className="col-4" for="age">Age *</label>
            <input ref={patientAgeRef} className="col-7 " type="number" name="age" onChange={(e) => setPatientAge(e.target.value)} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <label className="col-2" for="lieu_naissance">Lieu de naissance * </label>
            <input ref={patientPlaceOfBirthRef} className="col-10" type="text" name="lieu_naissance" onChange={(e) => setPatientPlaceOfBirth(e.target.value)} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <label className="col-2" for="lieu_naissance"> Code Bar </label>
            <input ref={patientCodeBarRef} className="col-10" type="text" name="lieu_naissance" onChange={(e) => setPatientBarCode(e.target.value)} />
          </div>
        </div>

      </div>
      <div className="row m-3 p-2">
        <label className="col-2" for="sexe">Sexe *</label>
        <select ref={patientSexRef} name="sexe" onChange={(e) => setPatientSex(e.target.value)}>
          <option value="">Choisir le genre </option>
          <option value="NON_PRECISE" >NON_PRECISE</option>
          <option value="MASCULIN" >Masculin</option>
          <option value="FEMININ" >Feminin</option>
        </select>
      </div>

      <div className="row m-3 p-2">
        <label className="col-3" for="adresse">Adresse *</label>
        <input ref={patientAdresseRef} className="col-9 w-full" type="text" name="adresse" onChange={(e) => setAdresse(e.target.value)} />
      </div>
      <div className="row m-3 p-2">
        <label className="col-3" for="telephone">Téléphone *</label>
        <input ref={patientTelephoneRef} className="col-9" type="tel" name="telephone" onChange={(e) => setTelephone(e.target.value)} />
      </div>
      <div className="row m-3 p-2">
        <label className="col-3" for="nationalite">nationalité *</label>
        <input ref={patientNationaliteRef} className="col-9" type="text" name="nationalite" onChange={(e) => setPatientNationalite(e.target.value)} />
      </div>
      <div className="row m-3 p-2">
        <label className="col-3" for="religion">Religion</label>
        <input ref={patientReligionRef} className="col-9" type="text" name="religion" onChange={(e) => setPatientReligion(e.target.value)} />
      </div>
      <div className="row mx-3 px-2">
        <label className="col-3" for="profession">Profession *</label>
        <input ref={patientProfessionRef} className="col-9" type="text" name="profession" onChange={(e) => setPatientProfession(e.target.value)} />
      </div>
      <div className="row mx-3 px-2">
        <label className="col-3" for="email">Email</label>
        <input ref={patientEmailRef} className="col-9" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <input type="button" value="Submit" onClick={OnSubmit} />
    </>
  )
}

export default PatientPersonalInfo
