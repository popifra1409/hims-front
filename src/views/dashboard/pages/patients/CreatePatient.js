import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PatientPersonalInfo from './InfoPersonnelDuPatient/PatientPersonalInfo'
import AddressEtContact from '../../components/patient/AddressEtContact'
import PageHeading from "../../components/main/PageHeading"
import PriseEnCharge from "../../components/patient/PriseEnCharge"
import PatientImgUpload from "../../components/patient/PatientImgUpload"
import { FaPlusCircle } from 'react-icons/fa'
import { useEffect, useState } from "react"
import RestApi from "../../../../services/RestApi"

const CreatePatient = () => {
    const [step, setStep] = useState(1)

     function addPatient (data) {
        const api = new RestApi()

        console.log(data)

      return  api.savePatient(data)
    }


    const Btn = () => {
        if (step < 4) {
            return (
                <div>
                    <input onClick={() => setStep(step + 1)} className="next-form p-2 bg-primary border-0 rounded text-white " type="button" name="to_next_step_2" value="Continuer" />
                </div>
            )
        }
        else {
            return (
                <div>
                    <input className="next-form p-2 bg-primary border-0 rounded text-white " type="button" name="to_next_step_2" value="Enregistrer" />
                </div>
            );
        }
    }
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
                     
                        {/* patient create forms */}
                        <div className="col-9 px-5 d-flex">
                            <div className="">
                                <div style={{ marginLeft: '-212px' }}>
                                    <h3 className="m-4 fs-5 text-primary" style={{ display: step === 1 ? '' : 'none' }}>Informations personnelles</h3>
                                    <h3 className="m-4 fs-5 text-primary" style={{ display: step === 2 ? '' : 'none' }}>Addresse et contact</h3>
                                    <h3 className="m-4 fs-5 text-primary" style={{ display: step === 3 ? '' : 'none' }}>Prise en charge</h3>
                                    <h3 className="m-4 fs-5 text-primary" style={{ display: step === 4 ? '' : 'none' }}>Téléchargement de fichiers</h3>
                                </div>
                                <form>
                                    {/* personal infor */}
                                    <div style={{ display: step === 1 ? '' : 'none' }} >
                                        <PatientPersonalInfo onAdd={addPatient} />
                                    </div>

                                    {/* addresse et contact */}
                                    <div style={{ display: step === 2 ? '' : 'none' }}>
                                        <AddressEtContact />
                                    </div>
                                    {/* Prise en charge */}
                                    <div style={{ display: step === 3 ? '' : 'none' }}>
                                        <PriseEnCharge />
                                    </div>
                                    {/* téléchargement de fichier */}
                                    <div style={{ display: step === 4 ? '' : 'none' }}>
                                        <PatientImgUpload />
                                    </div>
                                    <div className="d-flex position-relative m-5">
                                        <div style={{ display: step === 1 ? 'none' : '' }}>
                                            <input onClick={() => setStep(step - 1)} className="prev-form  p-2 bg-danger border-0 rounded text-white" type="button" name="to_next_step_2" value="Retour" />
                                        </div>
                                        <Btn />
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

export default CreatePatient
