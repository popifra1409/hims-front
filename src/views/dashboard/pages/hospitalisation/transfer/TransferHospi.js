import { Link } from "react-router-dom"
import PageHeading from "../../../components/main/PageHeading"
import Dashboard from "../../../Dashboard"

const TransferHospi = () => {
    return (
        <Dashboard>
            <PageHeading heading={'Hospitalisation'} stepName={'Faire un transfer'} />
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-12">
                        <div className="row text-start">
                            <h3 className="fs-6 fw-light">Patient</h3>
                        </div>
                        <div className="col-md-12 p-3 border rounded">
                            <div className="row mb-2">
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="hospiCode">Code hospit</label>
                                    <input className="form-control" type="text" name="hospiCode" value="23HP00000000" />
                                </div>
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="sejourCode">Code Séjour</label>
                                    <input className="form-control" type="text" name="sejourCode" value="23SH00000000" />
                                </div>
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="numeroPatient">N° Patient</label>
                                    <input className="form-control" type="text" name="numeroPatient" value="23PA00000000" />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="nomPatient">Nom</label>
                                    <input className="form-control" type="text" name="nomPatient" value="paul" disabled />
                                </div>
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="prenomPatient">Prénom</label>
                                    <input className="form-control" type="text" name="prenomPatient" value="Denisse" disabled />
                                </div>
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="statutPatient">Statut</label>
                                    <input className="form-control" type="text" name="statutPatient" value="NORMAL" disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-12">
                        <div className="row text-start">
                            <h3 className="fs-6 fw-light">Hospitalisation Patient</h3>
                        </div>
                        <div className="p-3 col-md-12 border rounded">
                            <div className="row mb-3">
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="dateEntree">Date entrée</label>
                                    <input className="form-control" type="date" name="dateEntree" disabled />
                                </div>
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="dateSortie">Date sortie</label>
                                    <input className="form-control" type="date" name="dateSortie" disabled />
                                </div>
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="sortiePrevisonnelle">Sortie prévisonnelle</label>
                                    <input className="form-control" type="date" name="sortiePrevisonnelle" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-6 mb-2 text-start">
                                            <label className="" for="heureEntree">Entrée</label>
                                            <input className="form-control pe-2" type="time" name="heureEntree" />
                                        </div>
                                        <div className="col-md-6 mb-2 text-start">
                                            <label className="" for="heureSortie">Sortie</label>
                                            <input className="form-control pe-2" type="time" name="heureSortie" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2 text-start position-relative">
                                    <label className="top-4 start-4 fs-6 position-absolute" for="modeEntree" >Mode d'entrée</label>
                                    <div className="mt-4 p-1 position-relative border rounded">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="modeEntree" />
                                            <label className="form-check-label fw-normal" for="rendezVous">Rendez-vous</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type='radio' name='modeEntree' />
                                            <label className="form-check-label fw-normal" for="urgence">Urgence</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="batiment">Batiment</label>
                                    <select name="batiment" className="form-select">
                                        <option value="">Faites un choix</option>
                                        <option value="">BAT 1</option>
                                        <option value="">BAT 2</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="chambreOccupee">Chambres occupée</label>
                                    <select className="form-select" name="chambreOccupee">
                                        <option value=''>Faite un choix</option>
                                        <option value=''>CHAM 1</option>
                                        <option value=''>CHAM 2</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="lit">Lit</label>
                                    <select className="form-select" name="lit">
                                        <option value=''>Faite un choix</option>
                                        <option value=''>LIT 1</option>
                                        <option value=''>LIT 2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3 p-3 ">
                                <div className="row text-start">
                                    <h3 className="fs-6 fw-light">Accompagnateur</h3>
                                </div>
                                <div className="p-3 col-md-12 border rounded">
                                    <div className="row mb-2">
                                        <div className="col-md-4 mb-2 text-start">
                                            <label className="" for="accompagnateur">Nom accompagnateur</label>
                                            <input className="form-control" type="text" name="accompagnateur" />
                                        </div>
                                        <div className="col-md-4 mb-2 text-start">
                                            <label className="" for="relationAccompagnateur">Relation accompagnateur</label>
                                            <input className="form-control" type="text" name="relationAccompagnateur" />
                                        </div>
                                        <div className="col-md-4 mb-2 text-start">
                                            <label className="" for="telrelationAccompagnateur">Tél accompagnateur</label>
                                            <input className="form-control" type="tel" name="telrelationAccompagnateur" />
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-md-4 mb-2 text-start">
                                            <label className="" for="adresseAccompagnateur">Adresse accompagnateur</label>
                                            <input className="form-control" type="text" name="adresseAccompagnateur" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4 mb-2 text-start position-relative">
                                    <label className="top-4 start-4 fs-6 position-absolute" for="typeHospit">Motif d'hospitalisation</label>
                                    <div className="mt-4 p-1 border rounded">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="typeHospit" />
                                            <label className="form-check-label fw-normal" for="">Ordinaire</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="typeHospit" />
                                            <label className="form-check-label fw-normal" for="">Accouchement</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="typeHospit" />
                                            <label className="form-check-label fw-normal" for="">Chirurgical</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="typeHospit" />
                                            <label className="form-check-label fw-normal" for="">Autre</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-start">
                                    <label className="" for="nomTraitant">Nom Traitant</label>
                                    <input className="form-control" type="text" name="nomTraitant" value={'FOTSO BRICE'} />
                                </div>
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="codeTraitant">Code Traitant</label>
                                    <select className="form-select" name="codeTraitant">
                                        <option value=''>Faite un choix</option>
                                        <option value=''>CODE 1</option>
                                        <option value=''>CODE 2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="motifEntree">Motif Entrée</label>
                                    <select className="form-select" name="motifEntree">
                                        <option value=''>Faite un choix</option>
                                        <option value=''>MOTIF 1</option>
                                        <option value=''>MOTIF 2</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="motifSortie">Motif Sortie</label>
                                    <select className="form-select" name="motifSortie">
                                        <option value=''>Faite un choix</option>
                                        <option value=''>MOTIF 1</option>
                                        <option value=''>MOTIF 2</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="commentaireAccompagnateur">Commentaire</label>
                                    <textarea className="form-control" name="commentaireAccompagnateur"></textarea>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-4 mb-2 text-start">
                                    <label className="" for="nombreEnfant">Nbre enfant</label>
                                    <input className="form-control" type="number" name="nombreEnfant" value="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 bg-light border">
                                    <div className="text-start ">
                                        <h3 className="fs-5 fw-bold ">Bébé</h3>
                                    </div>
                                    <table className="table border rounded">
                                        <thead>
                                            <tr className="table-secondary text-uppercase">
                                                <th>N° accouci</th>
                                                <th >Sexe</th>
                                                <th >Heure</th>
                                                <th >Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="fw-normal" >334</th>
                                                <th className="fw-normal">F</th>
                                                <th className="fw-normal">M</th>
                                                <th className="fw-normal">12/12/2012</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-3 bg-light">
                    <div className="col-md-12 bg-light border rounded">
                        <div className="text-start">
                            <h3 className="fs-5 fw-bold">Dossiers D'hospit</h3>
                        </div>
                        <table className="table border rounded">
                            <thead >
                                <tr className="table-secondary text-uppercase">
                                    <th>Code Dossier</th>
                                    <th >Date Dossier</th>
                                    <th >Option</th>
                                    <th >Payé</th>
                                    <th >Total Prest</th>
                                    <th >Acompte à Payer</th>
                                    <th >Reliquat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>22D000911</td>
                                <td>12/09/2022</td>
                                <td>Particulier à ses frais</td>
                                <td>0.00</td>
                                <td>76000.00</td>
                                <td>76000.00</td>
                                <td>76000.00</td>
                            </tbody>


                        </table>
                    </div>
                </div>
                <div className="mb-3 p-2">
                    <button className="btn btn-success text-wrap" style={{ width: '7rem' }}>Transferer</button>
                    <Link to='/dashboard/hospitalisation/avis' className="mx-3 btn btn-light border text-wrap" style={{ width: '6rem' }}>Imprimer</Link>
                    <button className=" btn btn-danger text-wrap " style={{ width: '6rem' }}>Annuler</button>
                </div>
            </div>
        </Dashboard>
    )
}

export default TransferHospi
