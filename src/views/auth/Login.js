
import svg from '../../images/Illustration.svg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>




            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-sm-8'>
                        <div className='container-fluid' style={{ background: '#F6F6F6' }}>
                            <img src={svg} className="fluid" width="100%" alt="img1" />
                        </div>
                    </div>

                    <div className='col-sm-4'>

                        <div className="container-fluid " style={{ background: '#FFFFFF' }}>
                            <div className='header'>
                                <h4 className='text-center fw-bold'>Bienvenue sur HIMASYS</h4>
                                <p className='text-center'>please sign-in to your account and start<br></br> the adventure</p>
                            </div>
                            <form action="" className="formulaire" method="post">

                                <div >
                                    <label htmlFor="" className='fw-bold'>E-mail<span className='text-danger p-1'>*</span></label>
                                    <input type="email" placeholder="Entrez votre email" className="form-control" />
                                </div><br></br>

                                <div>
                                    <label htmlFor="" className='fw-bold'>Mot de Passe<span className='text-danger p-1'>*</span><a href='#' style={{ color: '#ff5600', position: 'absolute', left: '1150px' }}>Mot de passe oublié?</a></label>
                                    <input type="password" placeholder="Entrez votre mot de passe" className="form-control" />
                                </div><br></br>
                                <div>
                                    <input type="checkbox" style={{ width: '50px' }} />
                                    <label htmlfor="" className=' fw-bold'> Se souvenir de moi</label>
                                </div><br></br>
                                <div >
                                    <a href='#' type='submit' className="btn btn-lg btn-ligth w-100 mb-5 fw-bold" style={{ background: '#ff5600', color: '#FFFFFF' }} >Connexion</a>
                                </div>

                                <p>Avoir déjà un compte?<Link to={{ pathname: "/" }} className="fs-5 fw-bold" style={{ color: '#ff5600' }}> Créer un compte</Link></p>
                            </form>

                        </div>

                        <div className='p-3 text-center'>
                            Allez au  <Link className='text-wrap' to="/dashboard">dashboard</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login

