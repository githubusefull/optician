import Home from "../pages/Home"
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Appointments from '../pages/Appointments'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import {Routes, Route} from 'react-router-dom';
import Reasons from "../pages/Reasons"
const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/doctors' element={<Doctors />} />
    <Route path='/doctors/:id' element={<DoctorDetails />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Signup />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/services' element={<Reasons />} />
    <Route path='/appointment' element={<Services />} />
    <Route path='/appointments' element={<Appointments />} />

  </Routes>
}

export default Routers
