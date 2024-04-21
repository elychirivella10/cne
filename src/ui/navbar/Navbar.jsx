import Link from "next/link"

const NavBar = () =>{
    return(
        <nav className="navbar has-background-red is-sticky top-px-1 mb-5" role="navigation" aria-label="main navigation">
        <div className="navbar-brand ml-5">
            <p className="navbar-item">
               LOGO
            </p>

            <p role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </p>
        </div>

        <div className="navbar-menu">
            <div className="navbar-start">
                <Link href="/funcionarios/dashboard" className="navbar-item ml-2 mr-2">
                    <span className='navbar-item-hover'>
                        <span className="icon is-small is-right mr-2">
                            <i className="fas fa-chart-pie"></i>
                        </span>
                        Dashboard
                    </span>
                </Link>
                <Link href="/funcionarios" className="navbar-item ml-2 mr-2">
                    <span className='navbar-item-hover'>
                        <span className="icon is-small is-right mr-2">
                            <i className="fa-solid fa-list"></i>
                        </span>
                        Lista Funcionarios
                    </span>
                </Link>
                <Link href="/" className="navbar-item ml-2 mr-2">
                    <span className='navbar-item-hover'>
                        <span className="icon is-small is-right mr-2">
                            <i className="fa-solid fa-list"></i>
                        </span>
                        Registrar Voto
                    </span>
                </Link>
            </div>
            <div className="navbar-end">
            <div className="navbar-item has-dropdown is-right is-hoverable is-radius ">

                <a className="navbar-link has-background-transparent">
                    <span className="icon is-small is-right mr-2">
                        <span className="fa-solid fa-user">
                        </span>
                    </span>
                    Usuario
                </a>

                <div className="navbar-dropdown is-right is-radius">
{/*                 <a className="navbar-item">
                    Perfil
                </a> */}
                <hr className="navbar-divider"/>
                    <a className="navbar-item">
                        Salir
                    </a>
                </div>
            </div>
            </div>
        </div>
    </nav>
    )
}

export default NavBar