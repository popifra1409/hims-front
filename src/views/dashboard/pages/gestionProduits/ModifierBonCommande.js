import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PageHeading from "../../components/main/PageHeading"
import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheckLg } from 'react-icons/bs'

const ModifierBonCommande = () => {
    return (
        <Dashboard>
            <Main>
                < PageHeading heading="Bon commande fournisseur" />
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">N° Bon de commande<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>

                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Service Commandeur<span className="p-1">*</span></label>
                                    <select className="form-select">
                                        <option selected>faite votre choix</option>
                                        <option selected>commande 1</option>
                                        <option selected>commande 2</option>
                                    </select>

                                </div>

                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Fournisseur<span className="p-1">*</span></label>
                                    <select className="form-select">
                                        <option selected>faite votre choix</option>
                                        <option selected>fournisseur 1</option>
                                        <option selected>fournisseur 2</option>
                                    </select>

                                </div>

                            </div>

                        </div><br></br>


                        <div className="row">
                            <div className="col-sm-12">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Observations</label>
                                    <textarea className="form-control"></textarea>

                                </div>

                            </div>

                        </div><br></br>

                        <div className='row' style={{ textAlign: 'justify', marginTop: '10px' }}>

                            <div className='col-sm-3'>

                                <label className='mb-1'>Date de commande</label>
                                <input type="date" className="form-control" />
                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" style={{ width: '30px' }} />
                                    <label htmlfor="" className=' p-2'> Commande transmise</label>
                                </div><br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" style={{ width: '30px' }} />
                                    <label htmlfor="" className=' p-2'> Commande livrée</label>
                                </div>
                            </div>


                            <div className='col-sm-7'>
                                <label className="mb-1 fw-bold">Option d'affectation du tarif de commande au fournisseur </label><br></br>


                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" style={{ width: '30px' }} />
                                    <label htmlfor="" className=' p-2'> Le tarif de commande ne modifie pas celui du fourniseur</label>
                                </div><br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" style={{ width: '30px' }} />
                                    <label htmlfor="" className=' p-2'> Le tarif de commande est affecté automatiquement au fourniseur</label>
                                </div><br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" style={{ width: '30px' }} />
                                    <label htmlfor="" className=' p-2'> Demande de confirmation pour affecter le tarif au fourniseur</label>
                                </div>
                            </div>
                        </div><br></br>


                        <div className="row">
                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Reférence<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Libellé<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Qté U.S Comdée<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>
                        </div><br></br>



                        <div className="row">
                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Qté U.U Comdée<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Qté déjà livrée<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Reliquat<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>
                        </div><br></br>



                        <div className="row">
                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Prix unitaire HT<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Taux TVA<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Taux Remise<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>
                        </div><br></br>



                        <div className="row">
                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Total TTC<span className="p-1">*</span></label>
                                    <input type="text" className="form-control" />

                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div style={{ textAlign: 'justify' }}>
                                    <label className="mb-1">Somme<span className="p-1">*</span></label>
                                    <input type="number" className="form-control" />

                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end" >
                                    <button className="btn btn-success me-md-2 w-100  fw-bold" type="submit">Valider<BsCheckLg style={{ marginLeft: '10px' }} /></button>
                                    <button className="btn btn-danger w-100  fw-bold " type="submit">Supprimer<MdOutlineCancel style={{ marginLeft: '10px' }} /></button>

                                </div>
                            </div>

                        </div>



                    </form>

                </div>
            </Main>
        </Dashboard>
    )
}

export default ModifierBonCommande
