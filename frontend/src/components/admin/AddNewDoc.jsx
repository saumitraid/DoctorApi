import React, {useState, useContext} from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav'; // Import the SideNav component
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";


const AddNewDoc = () => {
    const { token, url } = useContext(AuthContext);
    const [formData, setFormData]=useState({
       name:'',
       mobile:'',
       degree:'',
       special:'',
       about:'',
       yoe:'' 
    });
    const [error, setError]=useState('');
    const [successMessage, setSuccessMessage]=useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const handleSubmit= async(e)=>{
        e.preventDefault();
        if (!formData.name || !formData.mobile || !formData.degree || !formData.special || !formData.about || !formData.yoe) {
            setError("All fields are required.");
            return;
          }
        try{
            const response=await axios.post(`${url}api/doc/post`, formData, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              });
            if(response.status===200){
                setSuccessMessage('New doctor details add successfull');
                setFormData({
                    name:"",
                    degree:'',
                    mobile:'',
                    about:'',
                    yoe:'',
                    special:'',
                })
            }
        }catch(error){

            console.error(error); // Log the full error to console
      // This will give you more information on the error
            setError(error.response?.data?.message || error.message || 'Something went wrong. Please try again.');
        }
    }
  return (
    <div>
      <Header />
      <div id="layoutSidenav">
        <SideNav /> {/* Use the SideNav component here */}
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Add New Doctor</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <Link to='/admin'>Dashboard</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to='/admin/doctor'>All Doctor</Link>
                </li>
                <li className="breadcrumb-item active">Add New Doctor</li>
              </ol>
              <div className="card mb-4 border-0">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="form-floating mb-3 mb-md-0">
                                    <input className="form-control" id="name" name='name' type="text" placeholder="Enter doctor name" value={formData.name}
                        onChange={handleChange} />
                                    <label form="name">Enter doctor name name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3 mb-md-0">
                                    <input className="form-control" id="mobile" name='mobile' type="text" placeholder="Enter doctor contact number" value={formData.mobile}
                        onChange={handleChange} />
                                    <label form="mobile">Enter doctor contact number</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="form-floating mb-3 mb-md-0">
                                    <input className="form-control" id="degree" name='degree' type="text" placeholder="Enter doctor educational qualification" value={formData.degree}
                        onChange={handleChange} />
                                    <label form="degree">Enter doctor educational qualification</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3 mb-md-0">
                                    <input className="form-control" id="special" name='special' type="text" placeholder="Enter doctor specialization" value={formData.special}
                        onChange={handleChange} />
                                    <label form="special">Enter doctor specialization</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-10">
                                <div className="form-floating mb-3 mb-md-0">
                                    <textarea 
                                    className="form-control" 
                                    id="about" 
                                    name="about" 
                                    placeholder="About the doctor" 
                                    value={formData.about} 
                                    onChange={handleChange}>
                                    </textarea>
                                    <label form="about">About the doctor</label>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-floating mb-3 mb-md-0">
                                    <input className="form-control" id="yoe" name='yoe' type="text" placeholder="Experience in year" value={formData.yoe}
                            onChange={handleChange} />
                                    <label form="yoe">Experience in year</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-0">
                            {/* Error and Success Messages */}
                            {error && <div className="alert alert-danger">{error}</div>}
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            {/* Submit Button */}
                            <div className="d-grid"><button className="btn btn-primary btn-block" type="submit">Add New Doctor</button></div>
                        </div> 
                    </form>
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

export default AddNewDoc;