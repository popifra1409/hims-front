import Dashboard from "../Dashboard"
import Main from "../layout/Main"
import PageHeading from "../components/main/PageHeading"

const Lits = () => {
  return (
    <Dashboard>
      <Main>
        < PageHeading heading="Lits" />

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <section>
                <div className="inpt">
                  <label for="batiment">Batiment<span className="text-danger">*</span></label>
                  <select className="form-control">
                    <option disabled>faites votre choix</option>
                    <option>Batiment 1</option>
                    <option>Batiment 2</option>
                    <option>Batiment 3</option>

                  </select>
                </div>

                <div className="inpt">
                  <label for="batiment">Chambre<span className="text-danger">*</span></label>
                  <select className="form-control">
                    <option disabled>faites votre choix</option>
                    <option>Batiment 1</option>
                    <option>Batiment 2</option>
                    <option>Batiment 3</option>

                  </select>
                </div>

                <div className="inpt">
                  <label for="Libelle">Libelle<span className="text-danger">*</span></label>
                  <input type="text" placeholder="Entrez le nom de la chambre" className="form-control" />
                </div>



              </section>
              <div className="litdescript">
                <label for="description">Description</label>
                <textarea className="form-control"></textarea>
              </div><br></br>
              <button className="btn btn-success">Enregistrer</button>

            </div>
          </div>

        </div>
      </Main>
    </Dashboard>
  )
}

export default Lits
