import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PageHeading from "../../components/main/PageHeading"
import { Link } from "react-router-dom"
import { BsSave2 } from 'react-icons/bs'


import React from 'react'

const familleProduit = () => {
    return (
        <Dashboard>
            <Main>
                < PageHeading heading="Famille produit" />
                <div className='container'>
                    <form>
                        <div className='row' style={{ textAlign: 'justify' }}>
                            <div className="col-sm-4">
                                <label className="mb-1">N compte de la famille du produit<span className="text-danger p-1">*</span></label>
                                <input type="text" className="form-control" />
                            </div>
                        </div><br></br>

                        <div className="row" style={{ textAlign: 'justify' }}>
                            <div className="col-sm-12">
                                <label className="mb-1">Designation de la famille du produit<span className="text-danger p-1">*</span></label>
                                <input type="text" className="form-control" />

                            </div>
                        </div><br></br>

                        <div className="row" style={{ textAlign: 'justify' }}>
                            <div className="col-sm-12">
                                <label className="mb-1">Description</label>
                                <textarea type="text" className="form-control" ></textarea>

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
            </Main>
        </Dashboard>
    )
}

export default familleProduit
