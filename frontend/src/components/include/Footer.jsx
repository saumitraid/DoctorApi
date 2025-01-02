import React from 'react';

function Footer() {
  return (
      <React.Fragment>
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-md-0">&copy; <a className="text-primary" href="#">Your Site Name</a>. All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="mb-0">Designed by <a className="text-primary" href="#">HTML Codex</a></p>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
  )
}

export default Footer