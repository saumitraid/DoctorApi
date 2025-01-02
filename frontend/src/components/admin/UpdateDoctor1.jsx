import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const UpdateDoctor = () => {
  const { id } = useParams(); // Get doctor ID from the URL
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const [doctor, setDoctor] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/api/doc/getOne/${id}`, {
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
      await axios.put(`http://localhost:3500/api/doc/updateOne/${id}`, doctor, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setSuccess("Doctor details updated successfully");
      setTimeout(() => navigate("/admin/doctors"), 2000); // Redirect to the doctors list
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Update Doctor</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      {doctor ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={doctor.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              value={doctor.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Degree</label>
            <input
              type="text"
              className="form-control"
              name="degree"
              value={doctor.degree}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Specialization</label>
            <input
              type="text"
              className="form-control"
              name="special"
              value={doctor.special}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">About</label>
            <textarea
              className="form-control"
              name="about"
              value={doctor.about}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Years of Experience</label>
            <input
              type="number"
              className="form-control"
              name="yoe"
              value={doctor.yoe}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UpdateDoctor;
