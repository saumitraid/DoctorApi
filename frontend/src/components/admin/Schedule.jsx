import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav'; // Import the SideNav component


const Schedule = () => {
  return (
    <div>
      <Header />
      <div id="layoutSidenav">
        <SideNav /> {/* Use the SideNav component here */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Doctors Schedule</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Doctor Schedule</li>
              </ol>
              <div className="card mb-4">
                <div className="card-body">
                  <p className="mb-0">
                    Hi
                  </p>
                </div>
              </div>
              <div style={{ height: '100vh' }}></div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Schedule;