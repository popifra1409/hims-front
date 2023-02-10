import { FaPlus } from 'react-icons/fa'
const PriseEnCharge = () => {
    return (
        <div>
            <div className="my-3 col-md-12 text-start">
                <h5 className="fs-6">prise en charge</h5>
            </div>
            <form className='border p-3'>
                <div>
                    <div className="mb-3 text-end">
                        <button className="btn btn-primary"><FaPlus className="me-2" />Ajouter</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 text-start'>
                        <label className='col-md-3 mx-2' for="assurance">
                            <input className='me-2' type="radio" name="responsale_prise_en_charge" />
                            Assurance
                        </label>
                        <label className='col-md-3 mx-2' for="reduction">
                            <input className='me-2' type="radio" name="responsale_prise_en_charge" />
                            Reduction
                        </label>
                        <label className='col-md-3 mx-2' for="csu">
                            <input className='me-2' type="radio" name="responsale_prise_en_charge" />
                            CSU
                        </label>
                        <label className='col-md-3 mx-2' for="cnamgs">
                            <input className='me-2' type="radio" name="responsale_prise_en_charge" />
                            CNAMGS
                        </label>
                    </div>
                    <div className='my-3 col-md-12 '>
                        <div className='row mb-3'>
                            <div className='col-md-4'>
                                <label className='text-start col-md-12 col-sm-6' for="tierPayeur">Tiers payeur</label>
                                <select name='tierPayeur' className='p-2 col-md-12 col-ms-6 rounded'>
                                    <option value="payeur1">AssuPro</option>
                                    <option value="payeur2">Payeur2</option>
                                    <option value="payeur3">Payear3</option>
                                </select>
                            </div>
                            <div className='col-md-4'>
                                <label className='text-start col-md-12' for="tierPayeur">Matricule <span className='text-danger'>*</span></label>
                                <input className='form-control' type="text" name="matricule" placeholder='MA-ASS533' />
                            </div>
                            <div className='col-md-4'>
                                <label className='text-start col-md-12' for="numeroDuContrat">Numero du contrat <span className='text-danger'>*</span></label>
                                <input className='form-control' type="text" name="matricule" placeholder='N66555' />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-md-4'>
                                <label className='text-start col-md-12' for="plafond">Plafond <span className='text-danger'>*</span></label>
                                <input className='form-control' type="text" name="plafond" placeholder='30' />
                            </div>
                            <div className='col-md-4'>
                                <input className='me-2 form-check-input' type="text" name="joursNonOuvrableExclus" />
                                <label className='form-check-label' for="joursNonOuvrableExclus">Jours non ouvrable exclus <span className='text-danger'>*</span></label>
                            </div>
                            <div className='col-md-4'>
                                <input className='me-2 form-control-check' type="checkbox" name="weekendExclus" />
                                <label className='form-check-label' for="weekendExclus">Weekend exlus</label>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-md-4'>
                                <label className='text-start col-md-12' for="ticketModerateur">Ticket moderatuer <span className='text-danger'>*</span></label>
                                <select name='ticketModerateur' className='p-2 col-md-12 rounded'>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                </select>
                            </div>
                            <div className='col-md-4'>
                                <label className='text-start col-md-12' for="dateEffet">Date Effet <span className='text-danger'>*</span></label>
                                <input className='form-control' type='date' name='dateEffet' />
                            </div>
                            <div className='col-md-4'>
                                <label className='text-start col-md-12' for="dateExpiration">Date Expiration <span className='text-danger'>*</span></label>
                                <input className='form-control' type='date' name='dateExpiration' />
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='mb text-start'>
                                <input className='me-2 form-check-input' type='checkbox' name='estAyantDroitF' />
                                <label className='form-check-label' for="estAyantDroit"> Est ayant droit</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <label className='text-start col-md-12' for="nomsAssurer">Noms assurer <span className='text-danger'>*</span></label>
                                <input className='form-control' type="text" name="nomsAssurer" placeholder='Takam' />
                            </div>
                            <div className='col-md-4'>
                                <label className='text-start col-md-12' for="prenomAssurer">Prenoms assurer</label>
                                <input className='form-control' type="text" name="prenomAssurer" placeholder='Gilbert' />
                            </div>
                            <div className='col-md-4'>
                                <label className='text-start col-md-12' for="societe">Societé <span className='text-danger'>*</span></label>
                                <input className='form-control' type="text" name="societe" placeholder='30' />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PriseEnCharge
