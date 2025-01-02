import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import { AuthContext } from "../../context/AuthContext";

const UpdateDoctor = () => {
  const { id } = useParams(); // Get doctor ID from the URL
  const navigate = useNavigate();
  const { token, url } = useContext(AuthContext);
  const [doctor, setDoctor] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`${url}api/doc/getOne/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDoctor(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchDoctor();
  }, [id, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${url}api/doc/updateOne/${id}`, doctor, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setSuccess("Doctor details updated successfully");
      setTimeout(() => navigate("/admin/doctor"), 2000); // Redirect to the doctors list
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Header />
      <div id="layoutSidenav">
        <SideNav /> {/* Use the SideNav component here */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Update Doctor</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <Link to='/admin'>Dashboard</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to='/admin/doctor'>All Doctor</Link>
                </li>
                <li className="breadcrumb-item active">Update Doctor</li>
              </ol>
              <div className="card mb-4 border-0">
                <div className="card-body">
                {doctor ? (
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="form-floating mb-3 mb-md-0">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={doctor.name}
                                    onChange={handleInputChange}
                                  />
                                    <label form="name">Enter doctor name name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating mb-3 mb-md-0">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="mobile"
                                    value={doctor.mobile}
                                    onChange={handleInputChange}
                                    />
                                    <label form="mobile">Enter doctor contact number</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="form-floating mb-3 mb-md-0">
                                <input
              type="text"
              className="form-control"
              name="degree"
              value={doctor.degree}
              onChange={handleInputChange}
            />
                                    <label form="degree">Enter doctor educational qualification</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3 mb-md-0">
                                <input
              type="text"
              className="form-control"
              name="special"
              value={doctor.special}
              onChange={handleInputChange}
            />
                                    <label form="special">Enter doctor specialization</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-10">
                                <div className="form-floating mb-3 mb-md-0">
                                <textarea
              className="form-control"
              name="about"
              value={doctor.about}
              onChange={handleInputChange}
            />
                                    <label form="about">About the doctor</label>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-floating mb-3 mb-md-0">
                                <input
              type="number"
              className="form-control"
              name="yoe"
              value={doctor.yoe}
              onChange={handleInputChange}
            />
                                    <label form="yoe">Experience in year</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-0">
                            {/* Error and Success Messages */}
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}
                            {/* Submit Button */}
                            <div className="d-grid">
                              <button type="submit" className="btn btn-primary">Update</button>
                              {/* <button className="btn btn-primary btn-block" type="submit">Update Doctor Details</button> */}
                            </div>
                        </div> 
                    </form>
                    ) : (
                      <p>Loading...</p>
                    )}
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
};

export default UpdateDoctor;
