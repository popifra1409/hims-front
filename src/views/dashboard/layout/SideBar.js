import { Link } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs'
import { BsPeopleFill } from 'react-icons/bs'
import { BsFillHouseFill } from 'react-icons/bs'
import { BsWalletFill } from 'react-icons/bs'
import { BsHouseDoorFill } from 'react-icons/bs'
import { BsFillDoorOpenFill } from 'react-icons/bs'
import { BsMoonStarsFill } from 'react-icons/bs'
import { BsPersonCheckFill } from 'react-icons/bs'
import { BsFileEarmarkTextFill } from 'react-icons/bs'
import { MdOutlineLocalPharmacy } from 'react-icons/md'
import { FaProcedures } from 'react-icons/fa';
import $ from 'jquery';


const SideBar = ({ toggle }) => {
    $(function () {
        $('.collapseHospitalisation').on('mouseleave ', function () {
            $('#collapible-block').slideUp('slow')
        }).css('cursor', 'pointer')
        $('.collapseHospitalisation').on('mouseenter ', function () {
            $('#collapible-block').slideDown('slow')
        })


    }
    )

    return (
        // sidebar
        <aside className={`sidebarArea  ${toggle ? 'd-none' : ''}`}>
            <div className=''>
                <div className="text-center p-1 ">
                    <h1 className="mt-1 p-4 fs-3 fst-italic fw-normal cursor-pointer border border-primary rounded text-uppercase">himasys</h1>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <ul className="nav-list">
                        {/* module caption */}
                        <div className="nav-caption fw-light mt-4">Accueil</div>
                        <li ><Link to="/dashboard" className="nav-link"><BsFillHouseFill className='nav-link-icons' />Tableau de bord</Link></li>
                        {/* module caption */}
                        <div className="nav-caption fw-light mt-0">Gestion des produits</div>
                        <li ><Link to="/dashboard/listeProduit" className="nav-link"><MdOutlineLocalPharmacy className='nav-link-icons' /> Produits</Link></li>
                        <li ><Link to="/dashboard/listeFamilleProduit" className="nav-link"><MdOutlineLocalPharmacy className='nav-link-icons' /> Famille Produit</Link></li>
                        <li ><Link to="/dashboard/listeCategorieProduit" className="nav-link"><MdOutlineLocalPharmacy className='nav-link-icons' />Catégories produit</Link></li>
                        <li ><Link to="/dashboard/listeFournisseur" className="nav-link"><MdOutlineLocalPharmacy className='nav-link-icons' />Fournisseurs</Link></li>
                        <li ><Link to="/dashboard/listeBonCommandeFournisseur" className="nav-link"><MdOutlineLocalPharmacy className='nav-link-icons' />Bon commande fournisseur</Link></li>
                        <li ><Link to="/dashboard/listeFactureFournisseur" className="nav-link"><MdOutlineLocalPharmacy className='nav-link-icons' />Facture fournisseur</Link></li>
                        <li ><Link to="/dashboard/listeBonCommandeInterne" className="nav-link"><MdOutlineLocalPharmacy className='nav-link-icons' />Bon commande interne</Link></li>
                        <li ><Link to="/dashboard/listeLivraisonInterne" className="nav-link"><MdOutlineLocalPharmacy className='nav-link-icons' />Livraison interne</Link></li>
                        <li ><Link to="/dashboard/listeReceptionInterne" className="nav-link"><MdOutlineLocalPharmacy className='nav-link-icons' />Reception interne</Link></li>
                        <li ><Link to="/dashboard/patients" className="nav-link"><BsPeopleFill className='nav-link-icons' />Patients</Link></li>
                        <div className="nav-caption fw-light mt-0">Admission</div>
                        <li ><Link to="/dashboard/parametres" className="nav-link"><BsFillGearFill className='nav-link-icons' />Paramètres</Link></li>
                        <div className="nav-caption fw-light mt-0">Acceuil et facturation</div>
                        <li ><Link to="/dashboard/patients" className="nav-link"><BsPeopleFill className='nav-link-icons' />Patients</Link></li>
                        <li className='collapseHospitalisation nav-link' ><FaProcedures className='nav-link-icons' />Hospitalisation
                            <ul className='nav-list collapible-block' id='collapible-block' style={{ marginLeft: '0px' }}>
                                <li className='nav-item my-3'><Link className='text-uppercase' to='/dashboard/hospitalisation'>Admission</Link></li>
                                <li className='nav-item my-3'> <Link className='text-uppercase' to="/dashboard/hospitalisation/avis">avis</Link></li>
                                <li className='nav-item my-3'><Link className='text-uppercase' to='/dashboard/hospitalisation/transfer'>transfer</Link></li>
                            </ul>
                        </li>

                        <div className="nav-caption fw-light mt-0">Administration</div>
                        <li ><Link to="/dashboard/parametres" className="nav-link"><BsFillGearFill className='nav-link-icons' />Paramétrages</Link></li>
                        <li ><Link to="/dashboard/tiersPayeurs" className="nav-link"><BsWalletFill className='nav-link-icons' />Tiers payeurs</Link></li>
                        <li ><Link to="/dashboard/batiments" className="nav-link"><BsHouseDoorFill className='nav-link-icons' />Batiments</Link></li>
                        <li ><Link to="/dashboard/chambres" className="nav-link"><BsFillDoorOpenFill className='nav-link-icons' />Chambres</Link></li>
                        <li ><Link to="/dashboard/lits" className="nav-link"><BsMoonStarsFill className='nav-link-icons' />Lits</Link></li>
                        <li ><Link to="/dashboard/agents" className="nav-link"><BsPersonCheckFill className='nav-link-icons' />Agents</Link></li>
                        <li ><Link to="/dashboard/documentation" className="nav-link"><BsFileEarmarkTextFill className='nav-link-icons' />Documentation</Link></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default SideBar
