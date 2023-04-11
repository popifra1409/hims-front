import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ListPatients from "./pages/identification/patient/patientlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";  

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          {/* <Route path="users">
            <Route index element={<List />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route> */}
          <Route path="identification">
            {/* identification resources */}
            <Route path="patients">
              <Route index element={<ListPatients />} />
              {/* <Route path=":patientid" element={<SinglePatient />} />
              <Route
                path="newpatient"
                element={<NewPatient title="Add New Patient" />}
              />
              <Route
                path="update/:patientid"
                element={<UpdatePatient title="Update Patient" />}
              /> */}
            </Route>
          </Route>
          {/* <Route path="/famille" element={<Famille />} />
            <Route path="/ListCategorie" element={<ListCategorie />} />
            <Route path="/ListCategorie/Single/:idBatiment" element={<Single />} />
            <Route path="/Single/EditFamille/:idBatiment" element={<EditFamille />} />
            <Route path="/ListCategorie/NewFamille" element={<NewFamille />} />
            <Route path="/ListPatients" element={<ListPatients />} />
            <Route path="/ListPatients/AddPatients" element={<AddPatients />} />
            <Route path="/ListPatients/SinglePatient/:idPatient" element={<SinglePatient />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
