import Dashboard from "../Dashboard"
import Main from "../layout/Main"
import PageHeading from "../components/main/PageHeading"

const Agents = () => {
  return (
    <Dashboard>
      <Main>
        < PageHeading heading="Agents" />

        <div className="containers">
          <div className="row">
            <div className="col-sm-4">
              <form>
                <div>
                  <label for="noms">Noms<span className="text-danger">*</span></label>
                  <input type="text" placeholder="Entrez le nom complet" className="form-control" />
                </div>
                <div>
                  <label for="Telephone">Telephone<span className="text-danger">*</span></label>
                  <input type="tel" className="form-control" />
                </div>
                <div>
                  <label for="email">Email<span className="text-danger">*</span></label>
                  <input type="email" placeholder="Entrez votre email" className="form-control" />
                </div>
                <div>
                  <label for="relegion">Religion<span className="text-danger">*</span></label>
                  <input type="text" placeholder="Entrez votre religion" className="form-control" />
                </div>
              </form>
            </div>
            <div className="col-sm-4">
              <form>
                <div>
                  <label for="prenom">Prenoms<span className="text-danger">*</span></label>
                  <input type="text" placeholder="Entrez le prix de la chambre" className="form-control" />
                </div>
                <div>
                  <label for="nationalite">Prix<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" />
                </div>
                <div>
                  <label for="datenaissance">Date de naissance<span className="text-danger">*</span></label>
                  <input type="date" className="form-control" />
                </div>
                <div>
                  <label for="lieunaissance">Lieu de naissance<span className="text-danger">*</span></label>
                  <input type="text" placeholder="Entrez le prix de la chambre" className="form-control" />
                </div>
              </form>
            </div>
            <div className="col-sm-4">
              <form>
                <div>
                  <label for="adresse">Adresse<span className="text-danger">*</span></label>
                  <input type="text" placeholder="Entrez le prix de la chambre" className="form-control" />
                </div>

                <div className="sexe">
                  <label for="sexe">Sexe<span className="text-danger">*</span></label>
                  <select className="form-select">
                    <option selected>faites votre choix</option>
                    <option>Masculin</option>
                    <option>Feminin</option>

                  </select>
                </div>

                <div>
                  <label for="profession">profession<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" />
                </div>


              </form>

            </div>

            <div className="btn">
              <button className="btn btn-warning" style={{ background: '#ff5600', color: '#fff', marginLeft: '3px' }}>Retour</button>
              <button className="btn btn-success">Enregistrer</button>
            </div>

          </div>

        </div>


      </Main>
    </Dashboard>

  )
}

export default Agents
