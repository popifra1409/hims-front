import { BsPencilSquare } from "react-icons/bs"
import { FaPlus, FaTrash } from "react-icons/fa"

const parametresSoins = () => {
    return (
        <div>
            <div className="my-3 col-md-12 text-start">
                <h5 className="fs-6">Paramétres de soins</h5>
            </div>
            <div className="border p-3">
                <div className="mb-3 text-end">
                    <button className="btn btn-primary"><FaPlus className="me-2" />Ajouter</button>
                </div>
                <table className="table table-sm">
                    <thead className="table-light text-uppercase">
                        <tr>
                            <th>Parametre</th>
                            <th>date</th>
                            <th>valeur</th>
                            <th>unite</th>
                            <th>commentaire</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Temperature</td>
                            <td>Jan 9, 2023, 12:00 PM</td>
                            <td>40</td>
                            <td>Degres</td>
                            <td>Chauffe énormement</td>
                            <td>
                                <span className="mx-2"><BsPencilSquare /></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default parametresSoins
