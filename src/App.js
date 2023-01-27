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
import Patients from './views/dashboard/pages/Patients';

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
          <Route path='patients' element={<Patients />} />
        </Route>
        <Route path='/' element={<Login/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
