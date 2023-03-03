import React from 'react'
import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PageHeading from "../../components/main/PageHeading"

import { BsSave2 } from 'react-icons/bs'


const categorieProduit = () => {
    return (
        <Dashboard>
                < PageHeading heading="Categorie produit" />
                <div className='container'>
                    <form>
                        <div className='row' style={{ textAlign: 'justify' }}>
                            <div className="col-sm-8">
                                <label className="mb-1">Libelle catégorie produit<span className="text-danger p-1">*</span></label>
                                <input type="text" className="form-control" />
                            </div>
                        </div><br></br>

                        <div className="row" style={{ textAlign: 'justify' }}>
                            <div className="col-sm-12">
                                <label className="mb-1">catégorie parente du produit<span className="text-danger p-1">*</span></label>
                                <input type="text" className="form-control" />

                            </div>
                        </div><br></br>


                        <div className='row' >
                            <div className='col-sm-5'></div>
                            <div className='col-sm-5'></div>


                            <div className='col-sm-2' >
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end" >
                                    <button className="btn btn-primary w-100 mb-5 fw-bold " type="submit">Enregistrer<BsSave2 style={{ marginLeft: '10px' }} /></button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
        </Dashboard>
    )
}

export default categorieProduit
