import React from 'react';
import { NavLink } from 'react-router-dom'
const SideNav = () => {
  return (
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <div className="nav">
            <NavLink className="nav-link" to="/admin">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>Dashboard</NavLink>
            <div className="sb-sidenav-menu-heading">Interface</div>
            
            <NavLink className="nav-link {({ isActive }) => `${isActive ? 'active' : ''}`}" to="/admin/doctor">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area"></i>
              </div>
              Doctor
            </NavLink>
            <NavLink className="nav-link {({ isActive }) => `${isActive ? 'active' : ''}`}" to="/admin/schedule">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area"></i>
              </div>
              Schedule
            </NavLink>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Administration
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
