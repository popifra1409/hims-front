import Dashboard from "../Dashboard"
import Main from "../layout/Main"
import PageHeading from "../components/main/PageHeading"

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
                  <input type="text" placeholder="Entrez le Libelle du batiment" className="form-control" />


                </div>
              </div>
              <div className="batdescript">
                <label for="description">Description</label>
                <textarea className="form-control"></textarea>
              </div><br></br>
              <button className="btn btn-success">Enregistrer</button>
            </form>
          </div>


        </div>

      {/* </Main> */}
    </Dashboard>
  )
}

export default Batiments
