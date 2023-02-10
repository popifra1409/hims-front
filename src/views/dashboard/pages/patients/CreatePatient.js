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


    // const Btn = () => {
    //     if (step > 1) {
    //         return (
    //             <div>
    //                 <input onClick={() => setStep(step + 1)} className="next-form p-2 bg-primary border-0 rounded text-white " type="button" name="to_next_step_2" value="Suivant" />
    //             </div>
    //         )
    //     }
    //     else { 
    //         return (
                
    //         );
    //     }
    // }
    return (
        <Dashboard>
            <Main>
                < PageHeading heading="Patients" stepName="Nouveau " />
                <div className="main-content-child">
                    <div className="row">
                        {/* patient create forms */}
                        <div className="col-md-12">
                            {/* personal infor */}
                            <div>
                                <PatientPersonalInfo onAdd={addPatient} />
                            </div>
                            {/* Prise en charge
                            <div style={{ display: step === 2 ? '' : 'none' }}>
                                <PriseEnCharge />
                            </div>
                            {/* téléchargement de fichier */}
                            {/* <div style={{ display: step === 3 ? '' : 'none' }}>
                                <PriseParametresSoins />
                            </div>                        */}
                        </div>
                    </div>
                </div>
            </Main>
        </Dashboard>
    )
}

export default CreatePatient
