import footerSvg from "../svg/footer.svg"
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="px-5 text-dark" style={{ background: '#eee' }}>
            <div className="container d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 py-4">
                <div className="col-md-4 d-flex align-items-center">
                    <span>
                        &copy; 2021 SpTube,<br />
                        All Rights are reserver
                    </span>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src="/assets/favicon/apple-touch-icon.png" alt="SpTube" width="48" height="48" className="rounded-circle p-2 border border-2 border-primary" style={{ background: '#3b88c3' }} />
                    </Link>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="https://www.youtube.com/channel/UCOFwfN-LJ7wGvAOovAwpjxg"><svg className="bi" width="24" height="24"><use xlinkHref={`${footerSvg}#youtube`} /></svg><span className="visually-hidden">Youtube</span></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://twitter.com/soumodippaul6"><svg className="bi" width="24" height="24"><use xlinkHref={`${footerSvg}#twitter`} /></svg><span className="visually-hidden">Twitter</span></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://instagram.com/soumodippaul64"><svg className="bi" width="24" height="24"><use xlinkHref={`${footerSvg}#instagram`} /></svg><span className="visually-hidden">Instagram</span></a></li>
                </ul>
            </div>
        </footer>
    )
}
