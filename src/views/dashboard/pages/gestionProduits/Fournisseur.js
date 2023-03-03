import Dashboard from "../../Dashboard"
import Main from "../../layout/Main"
import PageHeading from "../../components/main/PageHeading"
import { Link } from "react-router-dom"
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheckLg } from 'react-icons/bs'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import React from 'react'

const Founisseur = () => {
  return (
    <Dashboard>
        <PageHeading heading="Fournisseur" />

        <div className="container">
          <form>
            <div className="row">
              <div className='col-sm-4'>
                <div style={{ textAlign: 'justify' }}>
                  <label className='mb-1'>N°Fournisseur<span className='text-danger p-1'>*</span></label>
                  <input type="text" className='form-control' />
                </div>
              </div>

              <div className="col-sm-4">
                <div style={{ textAlign: 'justify' }}>
                  <label className="mb-1"><span className="text-justify text-danger p-1">*</span></label>
                  <select className="form-select">
                    <option selected>Faite votre choix</option>
                    <option>1</option>
                    <option>1</option>
                  </select>
                </div>
              </div>

              <div className='col-sm-4'>
                <div style={{ textAlign: 'justify' }}>
                  <label className='mb-1'>Société<span className='text-danger p-1'>*</span></label>
                  <input type="text" className='form-control' />
                </div>
              </div>
            </div><br></br>

            <div className="row">
              <div className="col-sm-8">
                <div style={{ textAlign: 'justify' }}>
                  <label className="mb-1 text-justify">Noms<span className="text-justify text-danger p-1">*</span></label>
                  <input className="form-control " type="text" />
                </div>
              </div>

              <div className='col-sm-4'>
                <div style={{ textAlign: 'justify' }}>
                  <label className='mb-1'>Prénoms<span className='text-danger p-1'>*</span></label>
                  <input type="text" className='form-control' />
                </div>
              </div>
            </div><br></br>

            <div className="row">
              <div className="col-sm-4">
                <div style={{ textAlign: 'justify' }}>
                  <label className="mb-1 ">Email<span className="text-justify text-danger p-1">*</span></label>
                  <input className="form-control " type="mail" />
                </div>
              </div>

              <div className='col-sm-4'>
                <div style={{ textAlign: 'justify' }}>
                  <label className='mb-1'>Ville<span className='text-danger p-1'>*</span></label>
                  <input type="text" className='form-control' />
                </div>
              </div>

              <div className='col-sm-4'>
                <div style={{ textAlign: 'justify' }}>
                  <label className='mb-1'>Pays<span className='text-danger p-1'>*</span></label>
                  <input type="text" className='form-control' />
                </div>
              </div>
            </div><br></br>

            <div className="row">
              <div className="col-sm-4">
                <div style={{ textAlign: 'justify' }}>
                  <label className="mb-1 ">Référence Bancaire<span className="text-justify text-danger p-1">*</span></label>
                  <input className="form-control " type="number" />
                </div>
              </div>

              <div className='col-sm-4'>
                <div style={{ textAlign: 'justify' }}>
                  <label className='mb-1'>N°NIF<span className='text-danger p-1'>*</span></label>
                  <input type="text" className='form-control' />
                </div>
              </div>

              <div className='col-sm-4'>
                <div style={{ textAlign: 'justify' }}>
                  <label className='mb-1'>N°Compte<span className='text-danger p-1'>*</span></label>
                  <input type="text" className='form-control' />
                </div>
              </div>
            </div><br></br>

            <div className="row">
              <div className="col-sm-4">
                <div style={{ textAlign: 'justify' }}>
                  <label className="mb-1 ">N°Statistique<span className="text-justify text-danger p-1">*</span></label>
                  <input className="form-control " type="number" />
                </div>
              </div>

              <div className='col-sm-4'>
                <div style={{ textAlign: 'justify' }}>
                  <label className='mb-1'>Fax<span className='text-danger p-1'>*</span></label>
                  <input type="number" className='form-control' />
                </div>
              </div>

              <div className='col-sm-4'>
                <div style={{ textAlign: 'justify' }}>
                  <label className='mb-1'>Téléphone<span className='text-danger p-1'>*</span></label>
                  <input type="number" className='form-control' />
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

            <div className='row' >
              <div className='col-sm-3'></div>
              <div className='col-sm-3'></div>


              <div className='col-sm-6' >
                <div className="d-grid gap-2 d-md-flex justify-content-md-end" >
                  <button className="btn btn-primary w-100 mb-5 fw-bold " type="submit">affecter<FaArrowAltCircleRight style={{ marginLeft: '10px' }} /></button>
                  <button className="btn btn-success me-md-2 w-100 mb-5 fw-bold" type="submit">Valider<BsCheckLg style={{ marginLeft: '10px' }} /></button>
                  <button className="btn btn-danger w-100 mb-5 fw-bold " type="submit">Annuler<MdOutlineCancel style={{ marginLeft: '10px' }} /></button>

                </div>
              </div>
            </div>

          </form>

        </div>
    </Dashboard>
  )
}

export default Founisseur
