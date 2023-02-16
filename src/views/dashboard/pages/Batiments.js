import Dashboard from "../Dashboard"
import Main from "../layout/Main"
import PageHeading from "../components/main/PageHeading"
import { BsSave2 } from 'react-icons/bs'
const Batiments = () => {
  return (
    <Dashboard>
      {/* <Main> */}
        < PageHeading heading="Batiments - Nouveau" />

        <div className="container">
          <div className="row">
            <form>
              <div className="col-sm-12">

                <div className="in">

                  <label for="Libelle">Libelle<span className="text-danger">*</span></label>
                  <input type="text" placeholder="Entrez le Libelle du batiment " className="form-control " />


                </div>
              </div>
              <div className="batdescript">
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
            </form>
          </div>


        </div>

      {/* </Main> */}
    </Dashboard>
  )
}

export default Batiments
