import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PageHeading from "../../components/main/PageHeading"
import { Link } from "react-router-dom"
import { BiEditAlt } from 'react-icons/bi'
import { BiAddToQueue } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'

import React from 'react'

const listeCategorieProduit = () => {
    return (
        <Dashboard>
                <PageHeading heading="Liste categorie produit" />
                <div className="container ">
                    <div className="jumbotron ">
                        <div className="card ">



                            <div className="card-header bg-light"  >
                                <div className="row" >

                                    <div className="col-sm-4" >
                                        <select className="form-select w-100" type="tel">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>

                                        </select>
                                    </div>
                                    <div className="col-sm-3" >

                                    </div>

                                    <div className="col-sm-5" >
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end" >

                                            <label className="mt-2">Search:</label>  <input className="form-control me-md-2 w-100  " type="text" />

                                            <Link to={{ pathname: '/dashboard/listeCategorieProduit/categorieProduit' }} className="btn btn-primary w-100  ">Ajouter categorie<BiAddToQueue style={{ marginLeft: '3px' }} /> </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="card-body">

                                <table className="table  table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Libelle catégorie produit</th>
                                            <th scope="col">catégorie parente du produit</th>
                                            <th scope="col">Actions</th>



                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                <button className="btn btn-primary w-100 me-md-2">Modifier<BiEditAlt style={{ marginLeft: '3px' }} /></button>
                                                <button className="btn btn-danger w-100">Supprimer<MdDeleteOutline style={{ marginLeft: '3px' }} /></button>

                                            </td>
                                        </tr>

                                        <tr>
                                            <th>2</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                <button className="btn btn-primary w-100 me-md-2">Modifier<BiEditAlt style={{ marginLeft: '3px' }} /></button>
                                                <button className="btn btn-danger w-100">Supprimer<MdDeleteOutline style={{ marginLeft: '3px' }} /></button>

                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
        </Dashboard>
    )
}

export default listeCategorieProduit
