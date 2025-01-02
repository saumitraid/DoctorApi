import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Footer from './include/Footer';
import NavBar from './include/NavBar';

function Login(){
  const [formData, setFormData] = useState({
    email: '',
    password: '',
});

  const [error, setError] = useState('');
  // const context = useContext(AuthContext);
  // console.log(context);


  const { login, url } = useContext(AuthContext); // Make sure AuthContext is correctly imported
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email.");
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    try {
      const response = await axios.post(url+'api/auth/login', formData);
      if (response.status === 200) {
        const { token, role } = response.data;
        login(token, role); // Store token and role in AuthContext
        if (role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };
  
  return (
    <React.Fragment>
  <NavBar />
  <div className="container-fluid pt-5">
    <div className="container">
      <div className="text-center mx-auto">
        <h2 className="display-4" style={{ marginBottom: '55px' }}>Login</h2>
      </div>
      <div className="row justify-content-center position-relative">
        <div className="col-lg-8">
          <div className="bg-white rounded mb-0">
            <form onSubmit={handleSubmit} style={{ marginBottom: '70px' }}>
              <div className="row g-3">
                {/* Email Field */}
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control bg-light border-0"
                    placeholder="Your Email"
                    style={{ height: '55px' }}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {/* Password Field */}
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control bg-light border-0"
                    placeholder="Password"
                    style={{ height: '55px' }}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3 mb-3" type="submit">
                    Login
                  </button>
                  {/* Error Message */}
                  {error && <div className="alert alert-danger">{error}</div>}
                  {/* Submit Button */}
                </div>
              </div>
            </form>
            <p>New Patient?<Link to="/newreg">Click here</Link> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</React.Fragment>

  );
}

export default Login;
