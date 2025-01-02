import React, { useState, useContext } from 'react';
import axios from 'axios';
import Footer from './include/Footer';
import NavBar from './include/NavBar';
import { AuthContext } from '../context/AuthContext';

function Registration() {
  const {url} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    address: '',
    mobile: '',
    age: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form data
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.gender || !formData.address || !formData.mobile || !formData.age) {
      setError("All fields are required.");
      return false;
    }
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email.");
      return false;
    }
    // Mobile number validation (simple check)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(formData.mobile)) {
      setError("Please enter a valid mobile number.");
      return false;
    }
    // Age validation
    if (formData.age <= 0 || isNaN(formData.age)) {
      setError("Please enter a valid age.");
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
  
    console.log('Form data being sent:', formData);
  
    try {
      const response = await axios.post(`${url}api/auth/newreg`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        setSuccessMessage('Registration successful!');
        setFormData({
          name: '',
          email: '',
          password: '',
          gender: '',
          address: '',
          mobile: '',
          age: ''
        });
      }
    } catch (error) {
      console.error('Error details:', error.response?.data); // Log server response
      setError(error.message);
    }
  };
  
  

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center mx-auto">
            <h2 className="display-4 mb-5">New Patient Registration</h2>
          </div>
          <div className="row justify-content-center position-relative">
            <div className="col-lg-8">
              <div className="bg-white rounded mb-0">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Name Field */}
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                        style={{ height: '55px' }}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Email Field */}
                    <div className="col-12 col-sm-6">
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
                    <div className="col-12 col-sm-6">
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
                    {/* Gender Field */}
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-control bg-light border-0"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {/* Address Field */}
                    <div className="col-12">
                      <textarea
                        className="form-control bg-light border-0"
                        rows="5"
                        placeholder="Your Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    {/* Mobile Field */}
                    <div className="col-12 col-sm-6">
                      <input
                        type="tel"
                        className="form-control bg-light border-0"
                        placeholder="Your Mobile Number"
                        style={{ height: '55px' }}
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Age Field */}
                    <div className="col-12 col-sm-6">
                      <input
                        type="number"
                        className="form-control bg-light border-0"
                        placeholder="Your Age"
                        style={{ height: '55px' }}
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Error and Success Messages */}
                    {error && <div className="alert alert-danger">{error}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    {/* Submit Button */}
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3 mb-5" type="submit">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Registration;
