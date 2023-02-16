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
import Produit from './views/dashboard/pages/gestionProduits/Produit';
import FamilleProduit from './views/dashboard/pages/gestionProduits/familleProduit';
import ListeFamilleProduit from './views/dashboard/pages/gestionProduits/listeFamilleProduit';
import CategorieProduit from './views/dashboard/pages/gestionProduits/categorieProduit';
import ListeCategorieProduit from './views/dashboard/pages/gestionProduits/listeCategorieProduit';
import ListeFournisseur from './views/dashboard/pages/gestionProduits/listeFournisseur';
import Fournisseur from './views/dashboard/pages/gestionProduits/Fournisseur';
import ListeProduit from './views/dashboard/pages/gestionProduits/listeProduit';
import Patient from './views/dashboard/pages/patients/Patient';
import ListeBonCommandeFournisseur from './views/dashboard/pages/gestionProduits/listeBonCommandeFournisseur'
import BonCommandeFournisseur from './views/dashboard/pages/gestionProduits/BonCommandeFournisseur'
import ModifierBonCommande from './views/dashboard/pages/gestionProduits/ModifierBonCommande';
import FactureFournisseur from './views/dashboard/pages/gestionProduits/factureFournisseur'
import ListeFactureFournisseur from './views/dashboard/pages/gestionProduits/listeFactureFournisseur'
import BonCommandeInterne from './views/dashboard/pages/gestionProduits/bonCommandeInterne'
import ListeBonCommandeInterne from './views/dashboard/pages/gestionProduits/listeBonCommandeInterne'
import LivraisonInterne from './views/dashboard/pages/gestionProduits/livraisonInterne'
import ListeLivraisonInterne from './views/dashboard/pages/gestionProduits/listeLivraisonInterne'
import ReceptionInterne from './views/dashboard/pages/gestionProduits/receptionInterne'
import ListeReceptionInterne from './views/dashboard/pages/gestionProduits/listeReceptionInterne'







function App() {
  return (
    // Application routes
    <BrowserRouter>
      <Routes>
        {/* Dashboard  Route */}
        <Route path='/dashboard'>
          <Route index element={<Home />} />
          <Route path='listeProduit' element={<ListeProduit />} />
          <Route path='listeProduit/produit' element={<Produit />} />
          <Route path='listeFamilleProduit' element={<ListeFamilleProduit />} />
          <Route path='listeFamilleProduit/familleProduit' element={<FamilleProduit />} />
          <Route path='listeCategorieProduit' element={<ListeCategorieProduit />} />
          <Route path='listeCategorieProduit/categorieProduit' element={<CategorieProduit />} />
          <Route path='listeFournisseur' element={<ListeFournisseur />} />
          <Route path='listeFournisseur/fournisseur' element={<Fournisseur />} />
          <Route path='listeBonCommandeFournisseur' element={<ListeBonCommandeFournisseur />} />
          <Route path='listeBonCommandeFournisseur/BonCommandeFournisseur' element={<BonCommandeFournisseur />} />
          <Route path='listeBonCommandeFournisseur/ModifierBonCommande' element={<ModifierBonCommande />} />
          <Route path='listeFactureFournisseur' element={<ListeFactureFournisseur />} />
          <Route path='listeFactureFournisseur/factureFournisseur' element={<FactureFournisseur />} />
          <Route path='listeBonCommandeinterne' element={<ListeBonCommandeInterne />} />
          <Route path='listeBonCommandeinterne/bonCommandeInterne' element={<BonCommandeInterne />} />
          <Route path='listeLivraisoninterne' element={<ListeLivraisonInterne />} />
          <Route path='listeLivraisoninterne/livraisonInterne' element={<LivraisonInterne />} />
          <Route path='listeReceptionInterne' element={<ListeReceptionInterne />} />
          <Route path='listeReceptionInterne/receptionInterne' element={<ReceptionInterne />} />












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
