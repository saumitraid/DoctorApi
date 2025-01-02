import React, {useEffect} from 'react'
import NavBar from './include/NavBar';
import aboutImg from '../assets/Patient/img/about.jpg';
import Footer from './include/Footer';
function Home() {
    useEffect(() => {
        document.title = 'Home - Doctor Appointment';
      }, []);
  return (
    <React.Fragment>
        <NavBar/>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-start">
                    <div className="col-lg-8 text-center text-lg-start">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" style={{'border-color': 'rgba(256, 256, 256, .3) !important'}}>Welcome To Medinova</h5>
                        <h1 className="display-1 text-white mb-md-4">Best Healthcare Solution In Your City</h1>
                        <div className="pt-2">
                            <a href="" className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2">Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{"min-height": "500px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded" src={aboutImg} style={{"object-fit": "cover"}}/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="mb-4">
                            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                            <h1 className="display-4">Best Medical Care For Yourself and Your Family</h1>
                        </div>
                        <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                        <div className="row g-3 pt-3">
                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                                    <h6 className="mb-0">Qualified<small className="d-block text-primary">Doctors</small></h6>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                                    <h6 className="mb-0">Accurate<small className="d-block text-primary">Testing</small></h6>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <i className="fa fa-3x fa-ambulance text-primary mb-3"></i>
                                    <h6 className="mb-0">Free<small className="d-block text-primary">Ambulance</small></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </React.Fragment>
  )
}
export default Home