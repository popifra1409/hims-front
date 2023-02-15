import { Link } from "react-router-dom"
import PageHeading from "../../components/main/PageHeading"
import Dashboard from "../../Dashboard"


const Hospitalisation = () => {
    return (
        <Dashboard>
            {/* <Main> */}
            < PageHeading heading="Hospitalisation" />
            <div className="container">
                <div className="p-3 border rounded">
                    <div className="row mb-2">
                        <div className="col-md-2 mb-2 text-start">
                            <label className="" for="hospiCode">Code hospit</label>
                            <input className="form-control" type="text" name="hospiCode" value="23HP00000000" />
                        </div>
                        <div className="col-md-2 mb-2 text-start">
                            <label className="" for="sejourCode">Code Séjour</label>
                            <input className="form-control" type="text" name="sejourCode" value="23SH00000000" />
                        </div>
                        <div className="col-md-2 mb-2 text-start">
                            <label className="" for="dateEntree">Date entrée</label>
                            <input className="form-control" type="date" name="dateEntree" />
                        </div>
                        <div className="col-md-2 mb-2 text-start">
                            <label className="" for="dateSortie">Date sortie</label>
                            <input className="form-control" type="date" name="dateSortie" />
                        </div>
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
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 mb-2 col-sm-12 text-start">
                                    <label className="" for="motifEntree">Motif Entrée</label>
                                    <select className="form-select" name="">
                                        <option value=''>Faites un choix</option>
                                        <option value=''>Motif 1</option>
                                        <option value=''>Motif 2</option>
                                        <option value=''>Motif 3</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-2 col-sm-12 text-start">
                                    <label className="" for="motifSortie">Motif Sortie</label>
                                    <select className="form-select" name="motifSortie" >
                                        <option value=''>Faites un choix</option>
                                        <option value=''>Motif 1</option>
                                        <option value=''>Motif 2</option>
                                        <option value=''>Motif 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-4 mb-2 text-start position-relative">
                            <label className="top-4 start-4 fs-6 position-absolute" for="typeHospit">Type d'hospit</label>
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
                        <div className="col-md-4 text-start">
                            <label className="" for="traitant">Traitant</label>
                            <input className="form-control" type="text" name="traitant" />
                        </div>
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
                            <div className="col-md-4 mb-2 text-start">
                                <label className="" for="sortiePrevisonnelle">Sortie prévisonnelle</label>
                                <input className="form-control" type="date" name="sortiePrevisonnelle" />
                            </div>
                            <div className="col-md-4 mb-2 text-start">
                                <label className="" for="commentaireAccompagnateur">Commentaire</label>
                                <textarea className="form-control" name="commentaireAccompagnateur"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-3 mb-3">
                    <div className="col-md-12">
                        <div className="row text-start">
                            <h3 className="fs-6 fw-light ">Facturation</h3>
                        </div>
                        <div className="p-3 row border rounded">
                            <div className="col-md-4 mb-2 text-start">
                                <label for="serviceAccueil">Service d'accueil</label>
                                <select className="form-select" name="serviceAccueil">
                                    <option value="">Faites un choix</option>
                                    <option value="">SERVICE 1</option>
                                    <option value="">SERVICE 2</option>
                                    <option value="">SERVICE 3</option>
                                </select>
                            </div>
                            <div className="col-md-4 mb-2 text-start">
                                <label for="nbreJour">Nbre Jour</label>
                                <input className="form-control" type="number" name="nbreJour" />
                            </div>
                            <div className="col-md-4 mb-2 text-start">
                                <label for="prestation">Prestation</label>
                                <select className="form-select" name="prestation">
                                    <option value="">Faites un choix</option>
                                    <option value="">SERVICE 1</option>
                                    <option value="">SERVICE 2</option>
                                    <option value="">SERVICE 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 p-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row text-start ">
                                    <h4 className="fs-6 fw-light">Particulier a ses Frais</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mb-2 p-3 border rounded">
                                        <div className="p-2 mb-3 border rounded">
                                            <div className="row">
                                                <div className="col-md-4 mb-2 text-start position-relative">
                                                    <label for="ticketMcSU">Ticket M CSU</label>
                                                    <input className="form-control" type="number" name="ticketMcSU" disabled />
                                                    <span className="position-absolute end-0" style={{ marginTop: '-30px', left: '315px' }}>%</span>
                                                </div>
                                                <div className="col-md-4 mb-2 text-start position-relative">
                                                    <label for="ticketModTiers">Ticket Mod. Tiers</label>
                                                    <input className="form-control" type="number" name="ticketModTiers" disabled />
                                                    <span className="position-absolute end-0" style={{ marginTop: '-30px', left: '315px' }}>%</span>
                                                </div>
                                                <div className="col-md-4 mb-2 text-start position-relative">
                                                    <label for="tva">TVA</label>
                                                    <input className="form-control" type="number" name="tva" />
                                                    <span className="position-absolute end-0" style={{ marginTop: '-30px', left: '315px' }}>%</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 mb-2 text-start">
                                                    <label for="montantHospit">Montant Hospit</label>
                                                    <input className="form-control" type="number" name="montantHospit" />
                                                </div>
                                                <div className="col-md-4 mb-2 text-start">
                                                    <label for="rembCSU">Remb. CSU</label>
                                                    <input className="form-control" type="number" name="rembCSU" disabled />
                                                </div>
                                                <div className="col-md-4 mb-2 text-start">
                                                    <label for="rembTiers">Remb. Tiers</label>
                                                    <input className="form-control" type="number" name="rembTiers" disabled />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 mb-2 text-start">
                                                    <label for="totalHospit">Total Hospit</label>
                                                    <input className="form-control" type="number" name="totalHospit" />
                                                </div>
                                                <div className="col-md-4 mb-2 text-start">
                                                    <label for="totalCSU">Toatl CSU</label>
                                                    <input className="form-control" type="number" name="totalCSU" disabled />
                                                </div>
                                                <div className="col-md-4 mb-2 text-start">
                                                    <label for="totalTiers">Total Tiers</label>
                                                    <input className="form-control" type="number" name="rembTiers" disabled />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 mb-2 text-start">
                                                    <label for="montantPatient">Mont. Patient</label>
                                                    <input className="form-control" type="number" name="montantPatient" />
                                                </div>
                                                <div className="col-md-4 mb-2 text-start">
                                                    <label for="totalPatient">Total Patient</label>
                                                    <input className="form-control" type="number" name="totalPatient" />
                                                </div>
                                                <div className="col-md-4 mb-2 text-start">
                                                    <label for="totalTTCPatient">Total TTC Patient</label>
                                                    <input className="form-control" type="number" name="totalTTCPatient" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-2 p-2">
                                            <div className="col-md-12 p-3">
                                                <div className="row text-start">
                                                    <h4 className="fs-6 fw-light">Acompte</h4>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-10 p-3 border rounded">
                                                        <div className="col-1 mb-2">
                                                            <div className="p-2">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" name="acompte" disabled checked />
                                                                    <label className="form-check-label" for="acompte " disabled >Acompte?</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">

                                                            <div className="col-md-3 mb-2">
                                                                <label for="Forme de monnaie"></label>
                                                                <select className="form-select" name="formDeMoney">

                                                                    <option value="">Espèce</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-3 mb-2 text-start">
                                                                <label for="montantAcompte">Montant acompte</label>
                                                                <input className="form-control" type="number" name="montantAcompte" disabled />
                                                            </div>
                                                            <div className="col-md-3 mb-2 text-start">
                                                                <label for="refPaiement">Réf. Paiement</label>
                                                                <input className="form-control" type="text" name="refPaiement" disabled />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3 p-2">
                    <button className="btn btn-success text-wrap" style={{ width: '7rem' }}>Hospitaliser</button>
                    <Link to='/dashboard/hospitalisation/avis' className="mx-3 btn btn-light border text-wrap" style={{ width: '6rem' }}>Avis</Link>
                    <button className=" btn btn-danger text-wrap" style={{ width: '6rem' }}>Annuler</button>
                </div>
            </div>
        </Dashboard>
    )
}

export default Hospitalisation
