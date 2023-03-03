import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PageHeading from "../../components/main/PageHeading"
import { Link } from "react-router-dom"
import { BiEditAlt } from 'react-icons/bi'
import { BiAddToQueue } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import React from 'react'

const listeFactureFournisseur = () => {
    return (
        <Dashboard>
                <PageHeading heading="Liste facture fournisseur" />
                <div className="container ">
                    <form>
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


                                <div className="card-body" >
                                    <div className="table-responsive">

                                        <table className="table  table-bordered" >
                                            <thead>
                                                <tr>

                                                    <th scope="col">Reférence</th>
                                                    <th scope="col">Libellé</th>
                                                    <th scope="col">Qté Cdée</th>
                                                    <th scope="col">Qté livrée</th>
                                                    <th scope="col">Déjà fact</th>
                                                    <th scope="col">Reliquat</th>
                                                    <th scope="col">P.U HT</th>
                                                    <th scope="col">Remise(%)</th>
                                                    <th scope="col">TVA(%)</th>
                                                    <th scope="col">PU TTC</th>
                                                    <th scope="col">Total HT</th>
                                                    <th scope="col">Total TTC</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>

                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <th>1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <th>1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <th>1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>Otto</td>
                                                    <td className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                        <Link to={{ pathname: '/dashboard/listeBonCommandeFournisseur/ModifierBonCommande' }} className="w-100  text-dark"><BiEditAlt /></Link>
                                                        <Link className=" w-100 text-danger"><MdDeleteOutline /></Link>
                                                    </td>
                                                </tr>



                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>





                    </form>
                </div>
        </Dashboard>
    )
}

export default listeFactureFournisseur
