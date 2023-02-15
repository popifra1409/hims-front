
import svg from '../../images/Illustration.svg'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>



            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-sm-8' >
                        <div className='container-fluid ' style={{ background: '#F6F6F6', height: '100%' }}>
                            <img src={svg} width="100%" alt="img1" />
                        </div>
                    </div>

                    <div className='col-sm-4'>

                        <div className="container-fluid " style={{ background: '#FFFFFF' }}>

                            <form action="" className="formulaire1" method="post">
                                <div className='header'>
                                    <h3 className='text-center fw-bold'>Enregistrement des patients</h3>
                                    <p className='text-secondary text-center fw-bold fs-0.75'>Avez vous déjà un compte? <Link to={{ pathname: "/Login" }} className='text-center fw-bold fs-0.75' style={{ color: '#ff5600', textDecoration: 'none' }}> Connectez-vous ici</Link></p>

                                </div>

                                <div >
                                    <label htmlFor="" className='fw-bold'>Nom<span className='text-danger p-1'>*</span></label>
                                    <input type="text" placeholder="Entrez votre nom" className="form-control" />
                                </div><br></br>
                                <div >
                                    <label htmlFor="" className='fw-bold'>Prénom<span className='text-danger p-1'>*</span></label>
                                    <input type="email" placeholder="Entrez votre prénom" className="form-control" />
                                </div><br></br>
                                <div  >
                                    <label htmlFor="" className='fw-bold'>E-mail<span className='text-danger p-1'>*</span></label>
                                    <input type="email" placeholder="Entrez votre email" className="form-control" />
                                </div><br></br>

                                <div >
                                    <label htmlFor="" className='fw-bold'>Mot de Passe<span className='text-danger p-1'>*</span></label>
                                    <input type="password" placeholder="Entrez votre mot de passe" className="form-control" />
                                </div><br></br>
                                <div >
                                    <label htmlFor="" className='fw-bold'>Confirmier le mot de Passe<span className='text-danger p-1'>*</span></label>
                                    <input type="password" placeholder="Confirmez votre mot de passe" className="form-control" />
                                </div><br></br>
                                <div>
                                    <input type="checkbox" style={{ width: '50px' }} />
                                    <label htmlfor="" className=' fw-bold '> J'accepte <span className='fs-bold' style={{ color: '#ff5600' }}>Termes et Conditions</span></label>
                                </div><br></br>
                                <div >
                                    <a href='#' type='submit' className="btn btn-lg btn-ligth w-100 mb-5 fw-bold" style={{ background: '#ff5600', color: '#FFFFFF' }} >S'inscrire</a>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Register
