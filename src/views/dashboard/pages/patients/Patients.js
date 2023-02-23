import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PageHeading from "../../components/main/PageHeading"
import Table from "../../components/Table"
import IdentificationResource from "../../../../services/IdentificationResource"
import { useEffect, useRef, useState } from "react"
import { BsPencilSquare, BsEye } from 'react-icons/bs'
import {FaTrash} from 'react-icons/fa'
import { Link } from "react-router-dom"

const Patients = () => {
    const [patients, setPatients] = useState([])
    const api = new IdentificationResource();


    const getAllPatients = async () => {
        //charger les données
        await api.getAllPatients().then((res) => setPatients(res.data.data))

        // return res
    }

    // supprimer patient
    const deletePatient = (id) => {
        return  api.deletePatient(id)
    }

    useEffect(() => {
        // Invocation de la fonction
        // fetchData()
        getAllPatients()
        console.log(patients)
    }, [])
    
    const List = () => {
        if (patients.length === 0) {
            return (
                <td colSpan={8} className="m-5 p-5">Pas de patients</td>
            )
        }
        else {
            return (
                <tbody>
                    {patients.map(
                        (p) => (
                            <tr key={p.patientId} style={{ opacity: '0.8' }}>
                                <td>{p.patientFirstName}</td>
                                <td>{p.patientLastName}</td>
                                <td>{p.patientProfession}</td>
                                <td>{p.patientNationalite}</td>
                                <td>{p.email}</td>
                                <td>{p.patientSex}</td>
                                <td>
                                    <Link className="m-2" to={'/dashboard/patients/patient'} state={{ patientId: p.patientId }} ><BsEye title={`Voir les informations de ${p.patientId}`} /></Link>
                                    <Link className="m-2" onClick={() => deletePatient(p.patientId)}><FaTrash title={`Supprimer ${p.patientId}`} /></Link>
                                </td>
                            </tr>
                        )
                    )
                    }
                </tbody>
            )
        }
    }

    // const updatePatient = (data) => {
    //     return (
    //         <link to="/" />
    //     )
    // }

    return (
        <Dashboard>
            {/* <Main> */}
                < PageHeading heading="Patients" stepName="" />
                <Table btnName="Ajouter un patient">
                    <table className="table text-start">
                        <thead >
                            <tr className="table-light text-uppercase">
                                <th className="fw-normal">nom</th>
                                <th className="fw-normal">Prenom</th>
                                <th className="fw-normal">profession</th>
                                <th className="fw-normal">nationalite</th>
                                <th className="fw-normal">email</th>
                                <th className="fw-normal">sexe</th>
                                <th className="fw-normal">actions</th>
                            </tr>
                        </thead>

                        <List />

                    </table>
                    <div className="p-2" style={{ position: 'relative' }}> <updatePatient /></div>

                </Table>
            {/* </Main> */}
        </Dashboard>
    )
}

export default Patients
