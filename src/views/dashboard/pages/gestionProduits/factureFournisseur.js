import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PageHeading from "../../components/main/PageHeading"
import React from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { BiAddToQueue } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import { BsCheckLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const factureFournisseur = () => {
    return (
        <Dashboard>
                <PageHeading heading="Facture fournisseur" />
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">N°Commande fourniseur</label>
                                    <select className="form-select">
                                        <option selected>faite votre choix</option>
                                        <option >commande 1</option>
                                        <option >commande 2</option>
                                    </select>

                                </div>

                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Service Commandeur</label>
                                    <select className="form-select">
                                        <option selected>faite votre choix</option>
                                        <option >commande 1</option>
                                        <option >commande 2</option>
                                    </select>

                                </div>

                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Fournisseur</label>
                                    <select className="form-select">
                                        <option selected>faite votre choix</option>
                                        <option >fournisseur 1</option>
                                        <option >fournisseur 2</option>
                                    </select>

                                </div>

                            </div>

                        </div><br></br>

                        <div className="row">
                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">N° Facture<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>

                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">N° Facture chez le fourniseur<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>

                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Date de facturation<span className="p-1">*</span></label>
                                    <input type="date" className="form-control" />

                                </div>

                            </div>
                        </div><br></br>


                        <div className='row' style={{ textAlign: 'justify', marginTop: '10px' }}>

                            <div className='col-sm-'>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="radio" style={{ width: '30px' }} />
                                    <label htmlfor="" className=' p-2'> Facture proforma</label>
                                </div><br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="radio" disabled style={{ width: '30px' }} />
                                    <label htmlfor="" className=' p-2 ' > Facture définitive</label>
                                </div>
                            </div>

                            <div className='col-sm-2'>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" style={{ width: '30px' }} />
                                    <label htmlfor="" className=' p-2'> Facture payée</label>
                                </div><br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" disabled style={{ width: '30px' }} />
                                    <label htmlfor="" className=' p-2 ' >  Engagée</label>
                                </div>
                            </div>

                            <div className="col-sm-8">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Observations</label>
                                    <textarea className="form-control"></textarea>

                                </div>

                            </div>

                        </div><br></br>

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

                                                <Link to={{ pathname: '/dashboard/listeProduit/' }} className="btn btn-primary w-100  ">Ajouter un produit<BiAddToQueue style={{ marginLeft: '3px' }} /> </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="card-body">
                                    <div className="table-responsive">

                                        <table className="table  table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Reférence</th>
                                                    <th scope="col">Libellé</th>
                                                    <th scope="col">Qté U.S Comdée</th>
                                                    <th scope="col">Qté U.U Comdée</th>
                                                    <th scope="col">Qté déjà livrée</th>
                                                    <th scope="col">Reliquat</th>
                                                    <th scope="col">PU TH</th>
                                                    <th scope="col">Taux TVA</th>
                                                    <th scope="col">Taux Remise</th>
                                                    <th scope="col">Total TTC</th>
                                                    <th scope="col">Qté Util Stock</th>
                                                    <th scope="col">Somme</th>


                                                    <th scope="col">Actions</th>



                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>1</th>
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
                                                    <td>OttoOttoOtto</td>
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

                        </div><br></br>


                        <div className='row' >
                            <div className='col-sm-4'></div>
                            <div className='col-sm-4'></div>


                            <div className='col-sm-4' >
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end" >
                                    <button className="btn btn-success me-md-2 w-100 mb-5 fw-bold" type="submit">Valider<BsCheckLg style={{ marginLeft: '10px' }} /></button>
                                    <button className="btn btn-danger w-100 mb-5 fw-bold " type="submit">Annuler<MdDeleteOutline style={{ marginLeft: '10px' }} /> </button>
                                </div>
                            </div>
                        </div>



                    </form>
                </div>
        </Dashboard>
    )
}

export default factureFournisseur
