import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './NoPage';
import Home from './views/dashboard/pages/Home';
import Parametres from "./views/dashboard/pages/Parametres";
import TiersPayeurs from "./views/dashboard/pages/TiersPayeurs";
import Lits from "./views/dashboard/pages/Lits";
import Batiments from "./views/dashboard/pages/Batiments";
import Chambres from "./views/dashboard/pages/Chambres";
import Agents from "./views/dashboard/pages/Agents";
import Documentation from "./views/dashboard/pages/Documentation";
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import CreatePatient from './views/dashboard/pages/patients/CreatePatient';
import Patients from './views/dashboard/pages/patients/Patients';
import Patient from './views/dashboard/pages/patients/Patient';
import Hospitalisation from './views/dashboard/pages/hospitalisation/Hospitalisation';


function App() {
  return (
    // Application routes
    <BrowserRouter>
      <Routes>
        {/* Dashboard  Route */}
        <Route path='/dashboard'>
          {/* Point d'entrée du dashboard */}
          <Route index element={<Home />} />

          {/* Paramtres Routes */}
          <Route path='parametres' element={<Parametres />} />

          {/* TiersPayeurs Routes */}
          <Route path='tiersPayeurs' element={<TiersPayeurs />} />

          {/* Lits Routes */}
          <Route path='lits' element={<Lits />} />

          {/* Batiments Routes */}
          <Route path='batiments' element={<Batiments />} />

          {/* Chambres Routes */}
          <Route path='chambres' element={<Chambres />} />

          {/* Agents Routes */}
          <Route path='agents' element={<Agents />} />

          {/* Documentation Routes */}
          <Route path='documentation' element={<Documentation />} />

          {/* Hospitalisation Routes */}
          <Route path='hospitalisation' element={<Hospitalisation />} />

          {/* Patients Routes*/}
          <Route path='newPatient' element={<CreatePatient />} />
          <Route path='patients' element={<Patients />} />
          <Route path='patients/patient' element={<Patient />} />
        </Route>
        {/* Login/Logout and Register Route */}
        <Route path='/' element={<Register />} />
        <Route path='Login' element={<Login />} />

        {/* Page Not Found Route */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
