import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../assets/Patient/lib/owlcarousel/assets/owl.carousel.min.css';
import '../../assets/Patient/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import '../../assets/Patient/css/bootstrap.min.css';
import '../../assets/Patient/css/style.css';
import '../../assets/Patient/css/style.css';
function NavBar() {
  return (
    <React.Fragment>
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <Link className="text-decoration-none text-body pe-3" to="#"><i className="bi bi-telephone me-2"></i>+012 345 6789</Link>
                        <span className="text-body">|</span>
                        <Link className="text-decoration-none text-body px-3" to="#"><i className="bi bi-envelope me-2"></i>info@example.com</Link>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center">
                        <Link className="text-body px-2" to="#">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="text-body px-2" to="#">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="text-body px-2" to="#">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link className="text-body px-2" to="#">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="text-body ps-2" to="#">
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="container-fluid sticky-top bg-white shadow-sm mb-5">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <NavLink to="/" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>Medinova</h1>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <NavLink to="/" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} >Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
                        <NavLink to="/service" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Service</NavLink>
                        <NavLink to="/login" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Login</NavLink>
                        {/* <NavLink to="#" className="nav-item nav-link">Pricing</NavLink> */}
                        {/* <div className="nav-item dropdown">
                            <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                            <div className="dropdown-menu m-0">
                                <NavLink to="#" className="dropdown-item">Blog Grid</NavLink>
                                <NavLink to="#" className="dropdown-item">Blog Detail</NavLink>
                                <NavLink to="#" className="dropdown-item">The Team</NavLink>
                                <NavLink to="#" className="dropdown-item">Testimonial</NavLink>
                                <NavLink to="#" className="dropdown-item">Appointment</NavLink>
                                <NavLink to="#" className="dropdown-item">Search</NavLink>
                            </div>
                        </div> */}
                        <NavLink to="/contact" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
                    </div>
                </div>
            </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NavBar