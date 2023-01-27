import Dashboard from "../Dashboard"
import Main from "../layout/Main"
import PageHeading from "../components/PageHeading"
import { FaPlusCircle } from 'react-icons/fa'

const Patients = () => {
    return (
        <Dashboard>
            <Main>
                < PageHeading heading="Patients" stepName="Créer un nouveau patient" />
                <div className="main-content-child">
                    <div className="row border-bottom">
                        <h1 className="left-0 col-6 fs-4">Informations patient</h1>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="m-2 p-3 position-relative">
                                <img className="rounded-circle" style={{ width: '150px', height: '150px'}} src={require('../../../images/empty_person.png')} alt="profile img" />
                                <FaPlusCircle style={{ width: '30px', height: '30px', position: 'absolute',top:'140px',right:'50px'}} />
                            </div>
                            <ul className="list-group ">
                                <li className="list-group-item border-0">Informations personnelles</li>
                                <li className="list-group-item border-0">Address et contact</li>
                                <li className="list-group-item border-0">Prise en charge</li>
                                <li className="list-group-item border-0">Télechargement de fichiers</li>
                            </ul>
                            <hr className="vertical-bar" />
                        </div>
                        <div className="col-9 px-5 d-flex">
                            <div className="">
                                <div style={{ marginLeft: '-212px' }}>
                                    <h3 className="m-4 fs-5 text-primary">Informations personnelles</h3>
                                </div>
                                <form>
                                    <div className="row m-3 p-2">
                                        <label className="col-2" for="name">Name </label>
                                        <input className="col-10 w-full" type="text" name="name" />
                                    </div>
                                    <div className="row m-3 p-2">
                                        <label className="col-2" for="name">Prenom</label>
                                        <input className="col-10" type="text" name="surname" />
                                    </div>
                                    <div className="row m-3 p-2">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-4" for="name">Né(e) le</label>
                                                <input className="col-6 " type="date" name="name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-2" for="name">A </label>
                                                <input className="col-10" type="text" name="name" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row m-3 p-2">
                                        <label className="col-2" for="sex">Sexe</label>
                                        <div className="col-10 d-flex ">
                                            <div className="col-6">
                                                <div className="row">
                                                    <input className="col-2" type="radio" name="gender" />
                                                    <label className="col-2" for="male">Masculin</label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="row">
                                                    <input className="col-2" type="radio" name="gender" />
                                                    <label className="col-2" for="female">Feminin</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex position-relative m-5">
                                        <input className="prev-form  p-2 bg-danger border-0 rounded text-white" type="button" name="to_next_step_2" value="Retour" />
                                        <input className="next-form p-2 bg-primary border-0 rounded text-white " type="button" name="to_next_step_2" value="Continuer" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </Dashboard>
    )
}

export default Patients
