import '../../css/offcanvas.css'
import {useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'
export const Navbar = () => {
    
    const onNavLoad = () => {
        document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
            document.querySelector('.offcanvas-collapse').classList.toggle('open')
        })
    }

    useEffect(() => {
        onNavLoad()
    })

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation" onLoad={onNavLoad}>
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center justify-content-center" to="/">
                    <img src="/assets/favicon/favicon-32x32.png" alt="SpTube" width="32" height="32"/>
                    <span className='px-2'>SpTube</span>
                </Link>
                <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({isActive}) => "nav-link " + (isActive? "active": '') } to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => "nav-link " + (isActive? "active": '') } to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => "nav-link " + (isActive? "active": '') } to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive}) => "nav-link " + (isActive? "active": '') } to="/terms-and-condition">Terms</NavLink>
                        </li>
                        {/*<li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" href="/" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
