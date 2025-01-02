import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/Admin/css/styles.css';
const Header = () => {
    const navigate=useNavigate();
    const {username, logout}=useContext(AuthContext);
    // console.log(username);
    const handleLogout=()=>{
        // console.log('hi');
        logout();
        navigate('/login', {replace:true});
    }
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          {/* Navbar Brand */}
          <Link className="navbar-brand ps-3" to="/admin">
            Administration Panel
          </Link>
          {/* Sidebar Toggle */}
          
          {/* Navbar Search */}
          <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
            </div>
          </form>
          {/* Navbar */}
          <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user fa-fw"></i>{username}
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#!">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Activity Log
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      );
}

export default Header