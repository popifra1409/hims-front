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
<<<<<<< HEAD
import NewPatient from './views/dashboard/pages/NewPatient';
import Patients from './views/dashboard/pages/Patients';
import Login from './views/auth/Login';
import Register from './views/auth/Register';

=======
import Login from './views/auth/Login';
import CreatePatient from './views/dashboard/pages/patients/CreatePatient';
import Patients from './views/dashboard/pages/patients/Patients';
import Patient from './views/dashboard/pages/patients/Patient';
>>>>>>> 6cf554b8188c7f38cfe3b9e0c8ff646f968ce12e

function App() {
  return (
    // Application routes
    <BrowserRouter>
      <Routes>
        {/* Dashboard  Route */}
        <Route path='/dashboard'>
          <Route index element={<Home />} />
          <Route path='parametres' element={<Parametres />} />
          <Route path='tiersPayeurs' element={<TiersPayeurs />} />
          <Route path='lits' element={<Lits />} />
          <Route path='batiments' element={<Batiments />} />
          <Route path='chambres' element={<Chambres />} />
          <Route path='agents' element={<Agents />} />
          <Route path='documentation' element={<Documentation />} />

          <Route path='newPatient' element={<CreatePatient />} />
          <Route path='patients' element={<Patients />} />
          <Route path='patients/patient' element={<Patient />} />
        </Route>

        <Route path='/' element={<Register />} />
        <Route path='Login' element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
