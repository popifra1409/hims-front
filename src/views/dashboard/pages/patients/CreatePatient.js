import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PatientPersonalInfo from './InfoPersonnelDuPatient/PatientPersonalInfo'
import PageHeading from "../../components/main/PageHeading"
import PriseEnCharge from "./priseEnCharge/PriseEnCharge"
import { FaPlus } from 'react-icons/fa'
import PriseParametresSoins from './parametresSoins/parametresSoins'
import { AiOutlineSave } from 'react-icons/ai'
import { useEffect, useState } from "react"
import RestApi from "../../../../services/RestApi"

const CreatePatient = () => {
    const [step, setStep] = useState(1)

    function addPatient(data) {
        const api = new RestApi()

        console.log(data)

        return api.savePatient(data)
    }


    const Btn = () => {
        if (step < 3) {
            return (
                <div>
                    <input onClick={() => setStep(step + 1)} className="next-form p-2 bg-primary border-0 rounded text-white " type="button" name="to_next_step_2" value="Suivant" />
                </div>
            )
        }
        else {
            return (
                <div>
                    <button className="next-form p-2 btn btn-success  rounded text-white " type="button" name="to_next_step_2">Enregistrer<AiOutlineSave className="ms-2 fs-5" /></button>
                </div>
            );
        }
    }
    return (
        <Dashboard>
            <Main>
                < PageHeading heading="Patients" stepName="Nouveau " />
                <div className="main-content-child">
                    {/* étapes de création du patient */}
                    <div className="row pb-3 border-bottom" style={{ width: '100%' }}>
                        <div className="col-3">
                            <div className="row px-1">
                                <button className="pe-4 btn btn-primary col-1">1</button>
                                <p className="col-md-8 mt-2 fw-bold text-primary">Identité du patient</p>
                                <span className="col-md-1 mt-2 fw-bold"> {'>'}</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row px-1">
                                <button className="pe-4 btn border col-1">2</button>
                                <p className="col-md-8 mt-2"> prise en charge</p>
                                <span className="col-md-1 mt-2 fw-bold"> {'>'}</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row px-1">
                                <button className="pe-4 btn border col-1">3</button>
                                <p className="col-md-8 mt-2 ">parametres de soin</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* patient create forms */}
                        <div className="col-md-12">
                            {/* personal infor */}
                            <div style={{ display: step === 1 ? '' : 'none' }} >
                                <PatientPersonalInfo onAdd={addPatient} />
                            </div>
                            {/* Prise en charge */}
                            <div style={{ display: step === 2 ? '' : 'none' }}>
                                <PriseEnCharge />
                            </div>
                            {/* téléchargement de fichier */}
                            <div style={{ display: step === 3 ? '' : 'none' }}>
                                <PriseParametresSoins />
                            </div>
                            <div className="d-flex position-relative m-5">
                                <div style={{ display: step === 1 ? 'none' : '' }}>
                                    <input onClick={() => setStep(step - 1)} className="prev-form  p-2 bg-danger border-0 rounded text-white" type="button" name="to_next_step_2" value="Retour" />
                                </div>
                                <Btn />
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </Dashboard>
    )
}

export default CreatePatient
