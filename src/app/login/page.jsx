import {Fragment} from 'react'
import Image from 'next/image'

const Login=()=>{

    return (
        <Fragment>
                    <section className="hero is-fullheight">
                        <div className="hero-head">

                        <nav className="navbar">
                            <div className="container is-justify-content-center">
                                <div className="navbar-brand is-justify-content-center">
                                <p className="navbar-item">
                                    <span className='is-pointer is-size-6 pr-2 border-logo' >CNE</span>
                                        <Image className="pl-2 mr-1" src={'/logo/logo.png'} priority alt="marca" width={25} height={25}/>
                                    <span className='has-text-weight-semibold is-pointer is-size-6' >EMPRESA</span>
                                </p>
                                </div>
                            </div>
                        </nav>
                            
                        </div>
                        <div className="hero-body is-centered">
                            <div className="box pl-5 pr-5 z-index-1 animate__animated animate__fadeInLeft">
                                <div className='mb-5 mr-5 ml-5 mt-4 has-text-weight-bold'>
                                    <p className=' has-text-centered is-size-5 '>Inicio de Sesion</p>
                                </div>
                                <div className='mb-5 mr-5 ml-5 mt-5'>
                                    <p className='is-size-7 has-text-centered '>Ingrese los datos solicitados para continuar con el proceso</p>
                                </div>
                                <div className='mb-5'>
                                    <form className="field" >
                                        <div className="control has-icons-right pb-4">
                                            <input className="input" type="text" placeholder="Usuario" name="user"/>
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                        </div>

                                        <div className="control has-icons-right pb-4 mb-4">
                                            <input className="input" type="password" placeholder="Contraseña" name="pass"/>
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-lock"></i>
                                            </span>
                                        </div>
                                    </form>
                                        <button className = "button is-fullwidth is-blue mb-4">Ingresar</button>
                                        
                                </div>
                                <div className='mb-4'>
                                </div>
                                <div className='mb-4'>
                                    <p className='is-size-8 has-text-centered has-text-grey'>2024 | Empresa</p>
                                </div>
                            </div>
                        </div>
                    </section>
            </Fragment>
        
    )
}

export default Login