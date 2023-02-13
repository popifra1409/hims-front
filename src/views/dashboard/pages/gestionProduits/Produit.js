import React from 'react'
import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PageHeading from "../../components/main/PageHeading"
import { BsSave2 } from 'react-icons/bs'
import { BsCheckLg } from 'react-icons/bs'


const Produit = () => {
    return (
        <Dashboard>
            <Main>
                < PageHeading heading="Produit - Nouveau" />
                <div className='container'>
                    <form>
                        <h5 className='fw-bold' style={{ textAlign: 'justify', marginBottom: '15px' }}>Saisie produit</h5>

                        <div className='row'>

                            <div className='col-sm-4'>
                                <div className='refproduit' style={{ textAlign: 'justify' }}>
                                    <label className='mb-1'>Référence<span className='text-danger p-1'>*</span></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                            <div className='col-sm-4'>
                                <div className='refproduit' style={{ textAlign: 'justify' }}>
                                    <label className='mb-1'>Code-Barre<span className='text-danger p-1'>*</span></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                            <div className='col-sm-4'>
                                <div className='refproduit' style={{ textAlign: 'justify' }}>
                                    <label className='mb-1'>Fournisseur<span className='text-danger p-1'>*</span></label>
                                    <select className='form-select'>
                                        <option selected>Faite votre choix</option>
                                        <option>Ekame julien</option>
                                        <option>Hounang Loic</option>
                                    </select>
                                </div>
                            </div>


                        </div>

                        <div className='row' style={{ textAlign: 'justify', marginTop: '10px' }}>
                            <div className='col-sm-8'>

                                <label className='mb-1'>Libelle<span className='text-danger p-1'>*</span></label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-4'>
                                <div className='refproduit' style={{ textAlign: 'justify', marginTop: '10px' }}>
                                    <label className='mb-1'>Domaine<span className='text-danger p-1'>*</span></label>
                                    <select className='form-select'>
                                        <option selected>Faite votre choix</option>
                                        <option>Ekame julien</option>
                                        <option>Hounang Loic</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col-sm-4'>
                                <div className='refproduit' style={{ textAlign: 'justify', marginTop: '10px' }}>
                                    <label className='mb-1'>Famille<span className='text-danger p-1'>*</span></label>
                                    <select className='form-select'>
                                        <option selected>Faite votre choix</option>
                                        <option>Ekame julien</option>
                                        <option>Hounang Loic</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col-sm-4'>
                                <div className='refproduit' style={{ textAlign: 'justify', marginTop: '10px' }}>
                                    <label className='mb-1'>Catégorie<span className='text-danger p-1'>*</span></label>
                                    <select className='form-select'>
                                        <option selected>Faite votre choix</option>
                                        <option>Ekame julien</option>
                                        <option>Hounang Loic</option>
                                    </select>
                                </div>
                            </div>

                        </div><br></br>

                        <div className='row'>

                            <div className='col-sm-3'>
                                <div className='refproduit' style={{ textAlign: 'justify', marginTop: '10px' }}>
                                    <label className='mb-1'>Prix unitaire<span className='text-danger p-1'>*</span></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                            <div className='col-sm-3'>
                                <div className='refproduit' style={{ textAlign: 'justify', marginTop: '10px' }}>
                                    <label className='mb-1'>Seuil réapprovisionement<span className='text-danger p-1'>*</span></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                            <div className='col-sm-3'>
                                <div className='refproduit' style={{ textAlign: 'justify', marginTop: '10px' }}>
                                    <label className='mb-1'>Qté réapprovisionement<span className='text-danger p-1'>*</span></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                            <div className='col-sm-3'>
                                <div className='refproduit' style={{ textAlign: 'justify', marginTop: '10px' }}>
                                    <label className='mb-1'>Stock alerte<span className='text-danger p-1'>*</span></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                        </div><br></br>


                        <div className='row'>

                            <div className='col-sm-4'>
                                <div className='refproduit' style={{ textAlign: 'justify', marginTop: '10px' }}>
                                    <label className='mb-1'>Unité de stockage<span className='text-danger'>*</span></label>
                                    <select className='form-select'>
                                        <option selected>Faite votre choix</option>
                                        <option>Ekame julien</option>
                                        <option>Hounang Loic</option>
                                    </select>
                                </div>
                            </div>


                            <div className='col-sm-4'>
                                <div className='refproduit' style={{ textAlign: 'justify', marginTop: '10px' }}>
                                    <label className='mb-1'>Unité d'utilisation<span className='text-danger p-1'>*</span></label>
                                    <select className='form-select'>
                                        <option selected>Faite votre choix</option>
                                        <option>Ekame julien</option>
                                        <option>Hounang Loic</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col-sm-3'>
                                <div className='refproduit' style={{ textAlign: 'justify', marginTop: '10px' }}>
                                    <label className='mb-1'>Une unité de stockage vaut<span className='text-danger p-1'>*</span></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                            <div className='col-sm-1'>
                                <br></br>
                                <div className='refprodui mt-4' style={{ textAlign: 'justify', marginBottom: '50px' }}>

                                    <p className='text-center' style={{ fontSize: '9px' }}>Unité(s) d'utilisation</p>

                                </div>
                            </div>



                        </div><br></br>

                        <div className='row' style={{ textAlign: 'justify', marginTop: '10px' }}>
                            <div className='col-sm-12'>

                                <label className='mb-1'>Description</label>
                                <textarea className='form-control'></textarea>
                            </div>
                        </div><br></br><br></br>

                        <div className='row' style={{ textAlign: 'justify', marginTop: '10px' }}>
                            <h5 style={{ textAlign: 'justify' }} className="mb-4 fw-bold">Autres options</h5>

                            <div className='col-sm-3'>

                                <label className='mb-1'>Flag produit archivé</label><br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" style={{ width: '30px' }} />
                                    <label htmlfor="" className=' p-2'> Flag produit archivé</label>
                                </div>
                            </div>

                            <div className='col-sm-3'>

                                <label className='mb-1'>Options de produit</label><br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="radio" style={{ width: '30px' }} />
                                    <label htmlfor="" className='  p-2'> Produit pharmacie </label>
                                </div><br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="radio" style={{ width: '30px' }} />
                                    <label htmlfor="" className=' p-2'> Produit stock divers</label>
                                </div>


                            </div>

                            <div className='col-sm-3'>

                                <label className='mb-1'>Option</label><br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="radio" style={{ width: '30px' }} />
                                    <label htmlfor="" className='  p-2'> En stock </label>
                                </div><br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="radio" style={{ width: '30px' }} />
                                    <label htmlfor="" className='  p-2'> Hors stock </label>
                                </div>

                            </div>

                            <div className='col-sm-3'>

                                <label className='mb-1'></label><br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" style={{ width: '30px' }} />
                                    <label htmlfor="" className='  p-2'> Produit désactivé </label>
                                </div><br></br>

                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" style={{ width: '30px' }} />
                                    <label htmlfor="" className='  p-2'> Groupe de Produit </label>
                                </div><br></br>

                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" style={{ width: '30px' }} />
                                    <label htmlfor="" className='  p-2'> Produit refrigéré </label>
                                </div>

                            </div>
                        </div>

                        <div className='row' style={{ textAlign: 'justify' }}>
                            <div className='col-sm-3'>

                                <label className='mb-1' >Sensibilité du produit</label><br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="radio" style={{ width: '30px' }} />
                                    <label htmlfor="" className=' p-2'> Sensible </label>
                                </div><br></br>

                                <div style={{ display: 'inline-block' }} >
                                    <input type="radio" style={{ width: '30px' }} />
                                    <label htmlfor="" className='  p-2'> Peu sensible </label>
                                </div><br></br>

                                <div style={{ display: 'inline-block' }} >
                                    <input type="radio" style={{ width: '30px' }} />
                                    <label htmlfor="" className='  p-2'> Très sensible </label>
                                </div>

                            </div>

                            <div className='col-sm-4'>
                                <div className='refproduit' style={{ textAlign: 'justify', marginBottom: '30px' }}>
                                    <label className='mb-1'>Dénomination commune internationale(DCI)</label><br></br>
                                    <input type="text" className='form-control' />
                                </div>
                                <div className='refproduit' style={{ textAlign: 'justify', marginBottom: '20px' }}>
                                    <label className='mb-1'>Nom commerciale</label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                            <div className='col-sm-5 '>

                            </div>
                        </div>

                        <div className='row'>
                            <h5 style={{ textAlign: 'justify' }} className="fw-bold">Liaison prestation</h5>
                            <div className='col-sm-4'>

                                <br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" style={{ width: '30px' }} />
                                    <label htmlfor="" className='  p-2'>Ce produit est lié à une prestation </label>
                                </div>
                            </div>

                            <div className='col-sm-4'>
                                <div className='refproduit' style={{ textAlign: 'justify' }}>
                                    <label className='mb-1'>Code prestation<span className='text-danger p-1'>*</span></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                            <div className='col-sm-4'>
                                <div className='refproduit' style={{ textAlign: 'justify' }}>
                                    <label className='mb-1'>Désignation<span className='text-danger p-1'>*</span></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>


                        </div><br></br>

                        <div className='row'>
                            <div className='col-sm-3'>

                                <br></br>
                                <div style={{ display: 'inline-block' }} >
                                    <input type="checkbox" style={{ width: '30px' }} />
                                    <label htmlfor="" className='  p-2'>PMUD </label>
                                </div>
                            </div>

                            <div className='col-sm-3'>
                                <div className='refproduit' style={{ textAlign: 'justify' }}>
                                    <label className='mb-1'>Prix moyen unitaire pondéré<span className='text-danger p-1'>*</span></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                            <div className='col-sm-3'>
                                <div className='refproduit' style={{ textAlign: 'justify' }}>
                                    <label className='mb-1'>Qté en stock<span className='text-danger p-1'>*</span></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                            <div className='col-sm-3'>
                                <div className='refproduit' style={{ textAlign: 'justify' }}>
                                    <label className='mb-1'>Valeur stock final<span className='text-danger p-1'>*</span></label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>

                        </div><br></br>
                        <div className='row' >
                            <div className='col-sm-4'></div>
                            <div className='col-sm-4'></div>


                            <div className='col-sm-4' >
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end" >
                                    <button className="btn btn-success me-md-2 w-100 mb-5 fw-bold" type="submit">Valider<BsCheckLg style={{ marginLeft: '10px' }} /></button>
                                    <button className="btn btn-primary w-100 mb-5 fw-bold " type="submit">Enregistrer<BsSave2 style={{ marginLeft: '10px' }} /></button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </Main>
        </Dashboard>

    )
}

export default Produit

