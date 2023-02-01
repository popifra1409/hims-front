import { Link } from 'react-router-dom'
import { BsAppIndicator, BsThreeDotsVertical } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
import RestApi from '../../../../services/RestApi'

const PatientsTable = () => {

    const [patients, setPatients] = useState([])

    useEffect(() => {

        async function getAllPatients() {

            const api = new RestApi();
            const res = await api.getAllPatients().then(res => setPatients(res.data.data))
            //charger les données
            return res
        }

        // Invocation de la fonction
        // fetchData()
        getAllPatients()
        console.log(patients)
    }, [])


    return (
        <div className="main-content-child">
            <div className="d-flex justify-between ">
                <div className="">
                    <div className="paginator">
                        <span className="me-2">Show</span>
                        <select name='paginate' className='p-1 border rounded'>
                            <option value="5" >5</option>
                            <option value="10">10</option>
                            <option value="15" >15</option>
                            <option value="20">20</option>
                        </select>
                        <span className="ms-2" >entries</span>
                    </div>
                </div>
                <div className="d-flex justify-between search-addPatient">
                    <div className="d-flex justify-between">
                        <label className="me-2">Search</label>
                        <input className="p-1 border rounded" type="search" name="searchPatient" />
                    </div>
                    <Link to="/dashboard/newPatient" className="ms-md-4 px-2 py-1 border-0 rounded bg-primary text-white text-decoration-none">Ajouter un patient</Link>
                </div>
            </div>
            <div className="mt-3 table-responsive">
                <table className="table">
                    <thead>
                        <tr className="table-light text-uppercase">
                            <th className="fw-normal">nom</th>
                            <th className="fw-normal">Prenom</th>
                            <th className="fw-normal">profession</th>
                            <th className="fw-normal"  >nationalite</th>
                            <th className="fw-normal">email</th>
                            <th className="fw-normal">sexe</th>
                            <th className="fw-normal">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients.map(
                         (p) => (
                            <tr key={p.id} style={{ opacity: '0.8' }}>
                            <td>{p.patientFirstName}</td>
                            <td>{p.patientLastName}</td>
                            <td>{p.patientProfession}</td>
                            <td>{p.patientNationalite}</td>
                            <td>{p.patientBarCode}</td>
                            <td>{p.patientSex}</td>
                            <td><BsThreeDotsVertical /></td>
                        </tr>
                         )
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PatientsTable
