import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PageHeading from "../../components/main/PageHeading"
import Table from "../../components/Table"
import IdentificationResource from "../../../../services/IdentificationResource"
import { useEffect, useRef, useState } from "react"
import { BsPencilSquare, BsEye } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material"

const Patients = () => {
    const [patients, setPatients] = useState([])
    const api = new IdentificationResource();

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];



    const getAllPatients = async () => {
        //charger les données
        await api.getAllPatients().then((res) => setPatients(res.data.data))

        // return res
    }

    // supprimer patient
    const deletePatient = async (id) => {
        await api.deletePatient(id)
        setPatients(patients.filter((patient)=> patient.id !== id))
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
            </Table> 
            {/* </Main> */}
        </Dashboard>
    )
}

export default Patients
