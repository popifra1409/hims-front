import Dashboard from "../Dashboard"
import Main from "../layout/Main"
import PageHeading from "../components/main/PageHeading"
import { BsSave2 } from 'react-icons/bs'

const Chambres = () => {
  return (
    <Dashboard>
      {/* <Main> */}
        < PageHeading heading="Chambres - Nouveau" />
        <div className="container">
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
          <div className="area">
            <label for="description">Description</label>
            <textarea className="form-control"></textarea>
          </div><br></br>
          <div className='row' >
            <div className='col-sm-5'></div>
            <div className='col-sm-5'></div>


            <div className='col-sm-2' >
              <div className="d-grid gap-2 d-md-flex justify-content-md-end" >

                <button className="btn btn-success w-100 mb-5 fw-bold " type="submit">Enregistrer<BsSave2 style={{ marginLeft: '10px' }} /></button>
              </div>
            </div>
          </div>
        </div>
      {/* </Main> */}
    </Dashboard>
  )
}

export default Chambres
