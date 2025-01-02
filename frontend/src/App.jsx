import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import Service from './components/Service';
import Dashboard from './components/admin/Dashboard';
import Registration from './components/Registration';
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Doctor from './components/admin/Doctor';
import Schedule from './components/admin/Schedule';
import AddNewDoc from './components/admin/AddNewDoc';
import UpdateDoctor from './components/admin/UpdateDoctor';
// import './App.css'

function App() {
  return (
    <AuthProvider> {/* Wrap all routes with AuthProvider */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route path="contact" element={<Contact />} />
      <Route path="newreg" element={<Registration />} />
      <Route path="login" element={<Login />} />
      {/* Protect admin route with PrivateRoute */}
      <Route path="admin/*" element={<PrivateRoute component={Dashboard} role="admin" />} />
      <Route path="admin/doctor" element={<PrivateRoute component={Doctor} role="admin" />} />
      <Route path="admin/schedule" element={<PrivateRoute component={Schedule} role="admin" />} />
      <Route path="admin/adddoc" element={<PrivateRoute component={AddNewDoc} role="admin" />} />
      <Route path="/admin/updatedoc/:id" element={<PrivateRoute component={UpdateDoctor} role="admin" />} />
    </Routes>
  </AuthProvider>
  )
}

export default App