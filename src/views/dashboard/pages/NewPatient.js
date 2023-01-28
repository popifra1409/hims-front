import Dashboard from "../Dashboard"
import Main from "../layout/Main"
import PatientPersonalInfo from '../components/PatientPersonalInfo'
import AddressEtContact from '../components/AddressEtContact'
import PageHeading from "../components/PageHeading"
import { FaPlusCircle } from 'react-icons/fa'
import { useState } from "react"

const NewPatient = () => {
    const [step,setStep] = useState(1)
    return (
        <Dashboard>
            <Main>
                < PageHeading heading="Patients" stepName="Créer un nouveau patient" />
                <div className="main-content-child">
                    {/* heading */}
                    <div className="row border-bottom">
                        <h1 className="left-0 col-6 fs-4">Informations patient</h1>
                    </div>
                    <div className="row">
                        {/* patient's profil */}
                        <div className="col-3">
                            <div className="m-2 p-3 position-relative">
                                <img className="rounded-circle" style={{ width: '180px', height: '180px'}} src={require('../../../images/empty_person.png')} alt="profile img" />
                                <FaPlusCircle style={{ width: '30px', height: '30px', position: 'absolute',top:'140px',right:'150px'}} />
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item border-0" >Informations personnelles</li>
                                <li className="list-group-item border-0">Address et contact</li>
                                <li className="list-group-item border-0">Prise en charge</li>
                                <li className="list-group-item border-0">Télechargement de fichiers</li>
                            </ul>
                            <hr className="vertical-bar" />
                        </div>
                        {/* patient create forms */}
                        <div className="col-9 px-5 d-flex">
                            <div className="">
                                <div style={{ marginLeft: '-212px' }}>
                                    <h3 className="m-4 fs-5 text-primary"  style={{display:step === 1? '': 'none'}}>Informations personnelles</h3>
                                    <h3 className="m-4 fs-5 text-primary"  style={{display:step === 2? '': 'none' }}>Addresse et contact</h3>
                                </div>
                                <form>
                                    {/* personal infor */}
                                {/* <PatientPersonalInfo /> */}
                                {/* addresse et contact */}
                                <AddressEtContact />
                                    <div className="d-flex position-relative m-5">
                                        <input className="prev-form  p-2 bg-danger border-0 rounded text-white" type="button" name="to_next_step_2" value="Retour" />
                                        <input className="next-form p-2 bg-primary border-0 rounded text-white " type="button" name="to_next_step_2" value="Continuer" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </Dashboard>
    )
}

export default NewPatient
