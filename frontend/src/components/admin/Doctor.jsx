import React, { useEffect, useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Doctor = () => {
  const [allDoc, setAllDoc] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { token, url } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url+'api/doc/getAll', {
          headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
        });
        setAllDoc(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [token]);

  const handleDelete=async(id)=>{
    const isConfirmed = window.confirm("Are you sure you want to delete this doctor's details?");
    if (!isConfirmed) {
      return; // Exit if the user cancels the confirmation dialog
    }
    try{
      await axios.delete(`${url}api/doc/delOne/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setSuccess('Doctor details delete successfully');
      setAllDoc((prevDocs) => prevDocs.filter((doc) => doc._id !== id));
    }catch(err){
      setError(err.message)
    }
  }

  return (
    <div>
      <Header />
      <div id="layoutSidenav">
        <SideNav />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">All Doctors</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">All Doctor</li>
              </ol>
              <Link to='/admin/adddoc' className="btn btn-primary">Add New Doctor</Link>
              <div className="card mb-4">
                <div className="card-body">
                  {error && <div className="alert alert-danger col-3">Error: {error}</div>}
                  {success && <div className="alert alert-success col-3">{success}</div>}
                  {!error && allDoc ? (
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Name of Doctor</th>
                          <th>Contact Number</th>
                          <th>Qualification</th>
                          <th>Specialization</th>
                          <th>About</th>
                          <th>Year of Experience</th>
                          <th>Update</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allDoc.map((doc) => (
                          <tr key={doc._id}>
                            <td> {doc.name}</td>
                            <td> {doc.mobile}</td>
                            <td> {doc.degree}</td>
                            <td> {doc.special}</td>
                            <td> {doc.about}</td>
                            <td> {doc.yoe}</td>
                            <td>
                            <Link to={`/admin/updatedoc/${doc._id}`} className="btn btn-primary btn-sm">
    Update
  </Link>
                            </td>
                            <td><button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(doc._id)}
                              >
                                Delete
                              </button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    !error && <p>Loading...</p>
                  )}
                </div>
              </div>
              <div style={{ height: "100vh" }}></div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Doctor;
