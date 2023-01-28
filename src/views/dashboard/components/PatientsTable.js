import {Link} from 'react-router-dom'
import {BsThreeDotsVertical} from 'react-icons/bs'
const PatientsTable = () => {
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
                        <span className="ms-2">entries</span>
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
                        <tr style={{opacity:'0.8'}}>
                            <td>ryle</td>
                            <td>nathan</td>
                            <td>full stack dev</td>
                            <td>cameroon</td>
                            <td>nath@gmail.com</td>
                            <td>Masculin</td>
                            <td><BsThreeDotsVertical /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PatientsTable
