import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Famille from "./pages/famille/famille"
import ListCategorie from "./pages/list/listecategories/ListCategorie"
import Single from "./pages/single/Single"
import NewFamille from "./pages/single/NewFamille"
import ListPatients from "./pages/list/listepatients/ListPatients";
import AddPatients from "./pages/single/ajouterPatient/AddPatients";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import EditFamille from "./pages/single/EditFamille";
import SinglePatient from "./pages/single/ajouterPatient/SinglePatient";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
             
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
          <Route path="/famille" element={<Famille />}/>
          <Route path="/ListCategorie" element={<ListCategorie />}/>
          <Route path="/ListCategorie/Single/:idBatiment" element={<Single />}/>
          <Route path="/Single/EditFamille/:idBatiment" element={<EditFamille />}/>
          <Route path="/ListCategorie/NewFamille" element={<NewFamille />}/>
          <Route path="/ListPatients" element={<ListPatients />}/>
          <Route path="/ListPatients/AddPatients" element={<AddPatients />}/>
          <Route path="/ListPatients/SinglePatient/:idPatient" element={<SinglePatient />}/>




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
