import { FaBars } from 'react-icons/fa'
import { BiBell } from 'react-icons/bi'
import { useState } from 'react'
const NavBar = ({ collapseSideBar }) => {
    const setCollapseSideBar = () => {
        collapseSideBar = !collapseSideBar
    }
    return (
        //Navbar
        <nav className="navbar navbar-expand fixed-top-bar rounded">
            <div className='container-fluid'>
                <div className="navbar-brand ">
                    <button onClick={() => setCollapseSideBar()} className="btn btn-light active"><FaBars /></button>
                </div>
                <div className='text-white  user-profil'>
                    <div className='notification-bell text-black'>
                        <BiBell className='mt-3 me-4 fs-3' />
                        <span class="badge bg-danger">
                            99+
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </div>
                    <div className='text-black'>
                        <h2>Administrator super</h2>
                        <p>super-admin</p>
                    </div>
                    <span className='avatar mt-2 position-relative'><img style={{ width: '60px', height: '60px' }} className="rounded-circle position-absolute end-0 bottom-0 border-0" src={require('../../../images/profil.jpg')} alt="profil" /></span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
