import { Outlet, Link } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs'
import { BsPeopleFill } from 'react-icons/bs'
import { BsFillHouseFill } from 'react-icons/bs'
import { BsWalletFill } from 'react-icons/bs'
import { BsHouseDoorFill } from 'react-icons/bs'
import { BsFillDoorOpenFill } from 'react-icons/bs'
import { BsMoonStarsFill } from 'react-icons/bs'
import { BsPersonCheckFill } from 'react-icons/bs'
import { BsFileEarmarkTextFill } from 'react-icons/bs'


const SideBar = () => {
    return (
        // sidebar
        <aside className="sidebarArea">
            <div className=''>
                <div className="text-center p-1 ">
                    <h1 className="mt-1 p-4 fs-3 fst-italic fw-normal cursor-pointer border border-primary rounded">himasys</h1>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <ul className="nav-list">
                        {/* module caption */}
                        <div className="nav-caption fw-light mt-4">Accueil</div>
                        <li ><Link to="/dashboard" className="nav-link"><BsFillHouseFill className='nav-link-icons' />Tableau de bord</Link></li>
                        {/* module caption */}
                        <div className="nav-caption fw-light mt-0">Pris en charge du patient</div>
                        <li ><Link to="/dashboard/test" className="nav-link"><BsPeopleFill className='nav-link-icons' />Patients</Link></li>
                        <div className="nav-caption fw-light mt-0">Configuration</div>
                        <li ><Link to="/dashboard/parametres" className="nav-link"><BsFillGearFill className='nav-link-icons' />Paramètres</Link></li>
                        <li ><Link to="/dashboard/tiersPayeurs" className="nav-link"><BsWalletFill className='nav-link-icons' />Tiers payeurs</Link></li>
                        <li ><Link to="/dashboard/batiments" className="nav-link"><BsHouseDoorFill className='nav-link-icons' />Batiments</Link></li>
                        <li ><Link to="/dashboard/chambres" className="nav-link"><BsFillDoorOpenFill className='nav-link-icons' />Chambres</Link></li>
                        <li ><Link to="/dashboard/lits" className="nav-link"><BsMoonStarsFill className='nav-link-icons' />Lits</Link></li>
                        <li ><Link to="/dashboard/agents" className="nav-link"><BsPersonCheckFill className='nav-link-icons' />Agents</Link></li>
                        <li ><Link to="/dashboard/documentation" className="nav-link"><BsFileEarmarkTextFill className='nav-link-icons' />Documentation</Link></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </aside>
    )
}

export default SideBar
